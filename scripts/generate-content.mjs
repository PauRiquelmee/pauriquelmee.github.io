import { writeFile } from 'node:fs/promises';
import { renderIndexMarkdown, renderLlmsText } from './content-output.mjs';

await Promise.all([
  writeFile('public/llms.txt', renderLlmsText()),
  writeFile('public/index.md', renderIndexMarkdown()),
]);

console.log(
  'Generated public/llms.txt and public/index.md from canonical content.',
);
