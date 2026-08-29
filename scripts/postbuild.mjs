import { readFile, writeFile } from 'node:fs/promises';
import { injectDirectionContract } from './postbuild.lib.mjs';

await writeFile('out/.nojekyll', '');
const indexPath = 'out/index.html';
const indexHtml = await readFile(indexPath, 'utf8');
await writeFile(indexPath, injectDirectionContract(indexHtml));
console.log('Created out/.nojekyll and injected the direction contract.');
