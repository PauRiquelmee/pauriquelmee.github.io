import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { inspectTsxSource } from './validate-architecture.lib.mjs';

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

const inspectTsx = (file, source) => {
  errors.push(...inspectTsxSource({ file, root, source }));
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
