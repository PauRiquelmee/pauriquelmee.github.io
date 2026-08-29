import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const sourceRoot = path.join(root, 'src');
const componentRoot = path.join(sourceRoot, 'components');
const errors = [];

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  const ignoredDirectories = new Set([
    '.git',
    '.next',
    'coverage',
    'node_modules',
    'out',
    'playwright-report',
    'test-results',
  ]);

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) continue;
      files.push(...(await walk(entryPath)));
    } else {
      files.push(entryPath);
    }
  }

  return files;
};

const isJsxNode = (node) => {
  return (
    ts.isJsxElement(node) ||
    ts.isJsxSelfClosingElement(node) ||
    ts.isJsxFragment(node)
  );
};

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

const inspectTsx = (file, source) => {
  const ast = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  let componentDeclarations = 0;
  let jsxReturns = 0;

  const functionReturnsJsx = (node) => {
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

    if (node.body && isJsxExpression(node.body)) return true;
    if (node.body) ts.forEachChild(node.body, visit);
    return found;
  };

  const visit = (node) => {
    if (
      (ts.isFunctionDeclaration(node) ||
        ts.isFunctionExpression(node) ||
        ts.isArrowFunction(node)) &&
      functionReturnsJsx(node)
    ) {
      componentDeclarations += 1;
    }

    if (
      ts.isReturnStatement(node) &&
      node.expression &&
      isJsxExpression(node.expression)
    ) {
      jsxReturns += 1;
    }

    if (ts.isArrowFunction(node) && isJsxExpression(node.body)) {
      jsxReturns += 1;
    }

    ts.forEachChild(node, visit);
  };

  visit(ast);

  if (componentDeclarations !== 1) {
    errors.push(
      `${path.relative(root, file)} must contain exactly one React component; found ${componentDeclarations}.`,
    );
  }

  if (jsxReturns > 1) {
    errors.push(
      `${path.relative(root, file)} must contain at most one component-level JSX return; found ${jsxReturns}.`,
    );
  }

  for (const statement of ast.statements) {
    if (
      !ts.isImportDeclaration(statement) ||
      !ts.isStringLiteral(statement.moduleSpecifier)
    )
      continue;
    const specifier = statement.moduleSpecifier.text;
    if (!specifier.startsWith('@/components/')) continue;
    if (specifier.split('/').length !== 4) {
      errors.push(
        `${path.relative(root, file)} bypasses a component folder boundary: ${specifier}.`,
      );
    }
  }
};

const inspectComponentFolders = async () => {
  const categories = ['foundations', 'patterns', 'sections'];

  for (const category of categories) {
    const categoryPath = path.join(componentRoot, category);
    let entries = [];
    try {
      entries = await readdir(categoryPath, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        errors.push(
          `${path.relative(root, categoryPath)} may contain only component folders.`,
        );
        continue;
      }

      const folder = path.join(categoryPath, entry.name);
      const files = await readdir(folder);
      const implementations = files.filter(
        (file) => file.endsWith('.tsx') && !file.endsWith('.test.tsx'),
      );
      const tests = files.filter((file) => file.endsWith('.test.tsx'));

      if (implementations.length !== 1) {
        errors.push(
          `${path.relative(root, folder)} must contain exactly one production TSX component.`,
        );
      }
      if (tests.length !== 1) {
        errors.push(
          `${path.relative(root, folder)} must contain exactly one colocated component test.`,
        );
      }
      if (!files.includes('index.ts')) {
        errors.push(`${path.relative(root, folder)} must contain index.ts.`);
      } else {
        const indexSource = await readFile(
          path.join(folder, 'index.ts'),
          'utf8',
        );
        if (!/export\s*\{\s*default\s*\}\s*from/.test(indexSource)) {
          errors.push(
            `${path.relative(root, folder)}/index.ts must expose a default export.`,
          );
        }
      }
    }
  }
};

const allFiles = await walk(sourceRoot);
const productionTsx = allFiles.filter(
  (file) => file.endsWith('.tsx') && !file.endsWith('.test.tsx'),
);

for (const file of productionTsx) {
  inspectTsx(file, await readFile(file, 'utf8'));
}

await inspectComponentFolders();

const textExtensions = new Set([
  '.css',
  '.json',
  '.md',
  '.mjs',
  '.ts',
  '.tsx',
  '.yaml',
  '.yml',
]);
const projectFiles = (await walk(root)).filter(
  (file) =>
    !file.includes(`${path.sep}.git${path.sep}`) &&
    !file.includes(`${path.sep}node_modules${path.sep}`) &&
    textExtensions.has(path.extname(file)),
);

for (const file of projectFiles) {
  const source = await readFile(file, 'utf8');
  if (source.includes('\u2014')) {
    errors.push(
      `${path.relative(root, file)} contains a prohibited em dash character.`,
    );
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(
  `Architecture is valid across ${productionTsx.length} production TSX files.`,
);
