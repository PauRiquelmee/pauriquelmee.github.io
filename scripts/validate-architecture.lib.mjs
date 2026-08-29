import path from 'node:path';
import ts from 'typescript';

const isJsxNode = (node) =>
  ts.isJsxElement(node) ||
  ts.isJsxSelfClosingElement(node) ||
  ts.isJsxFragment(node);

const isJsxExpression = (node) => {
  let current = node;
  while (
    ts.isParenthesizedExpression(current) ||
    ts.isAsExpression(current) ||
    ts.isSatisfiesExpression(current)
  ) {
    current = current.expression;
  }
  return isJsxNode(current);
};

const functionReturnsJsx = (node) => {
  if (node.body && isJsxExpression(node.body)) return true;
  let found = false;
  const visit = (child) => {
    if (found) return;
    if (
      ts.isReturnStatement(child) &&
      child.expression &&
      isJsxExpression(child.expression)
    ) {
      found = true;
      return;
    }
    ts.forEachChild(child, visit);
  };
  if (node.body) ts.forEachChild(node.body, visit);
  return found;
};

const initializerProducesComponent = (initializer) => {
  if (
    (ts.isArrowFunction(initializer) || ts.isFunctionExpression(initializer)) &&
    functionReturnsJsx(initializer)
  ) {
    return true;
  }

  let found = false;
  const visit = (node) => {
    if (found) return;
    if (
      (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) &&
      functionReturnsJsx(node)
    ) {
      found = true;
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(initializer);
  return found;
};

const isComponentName = (name) => /^[A-Z]/.test(name);

export const inspectTsxSource = ({ file, root, source }) => {
  const errors = [];
  const relativeFile = path.relative(root, file);
  const ast = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  let componentDeclarations = 0;

  const visit = (node) => {
    if (
      ts.isFunctionDeclaration(node) &&
      node.name &&
      isComponentName(node.name.text) &&
      functionReturnsJsx(node)
    ) {
      componentDeclarations += 1;
    }

    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
      const name = node.name.text;
      if (
        isComponentName(name) &&
        node.initializer &&
        initializerProducesComponent(node.initializer)
      ) {
        componentDeclarations += 1;
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(ast);

  if (componentDeclarations !== 1) {
    errors.push(
      `${relativeFile} must contain exactly one React component; found ${componentDeclarations}.`,
    );
  }

  for (const statement of ast.statements) {
    if (
      !ts.isImportDeclaration(statement) ||
      !ts.isStringLiteral(statement.moduleSpecifier)
    ) {
      continue;
    }

    const specifier = statement.moduleSpecifier.text;
    if (
      specifier.startsWith('@base-ui/react') &&
      !relativeFile.startsWith(
        `src${path.sep}components${path.sep}foundations${path.sep}`,
      ) &&
      !relativeFile.startsWith(
        `src${path.sep}components${path.sep}patterns${path.sep}`,
      )
    ) {
      errors.push(`${relativeFile} may not import Base UI directly.`);
    }

    if (!specifier.startsWith('@/components/')) continue;
    if (specifier.split('/').length !== 4) {
      errors.push(
        `${relativeFile} bypasses a component folder boundary: ${specifier}.`,
      );
    }
  }

  return errors;
};
