import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { brotliCompressSync, constants as zlibConstants } from 'node:zlib';
import { normalizeOutputPath } from './serve-out.lib.mjs';

const port = Number(process.env.PORT ?? 4173);
const outputRoot = path.resolve('out');
const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.md', 'text/markdown; charset=utf-8'],
  ['.pdf', 'application/pdf'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.webmanifest', 'application/manifest+json; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.woff2', 'font/woff2'],
  ['.xml', 'application/xml; charset=utf-8'],
]);
const compressibleExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.svg',
  '.txt',
  '.webmanifest',
  '.xml',
]);

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(
      request.url ?? '/',
      `http://${request.headers.host}`,
    );
    const outputPath = normalizeOutputPath(requestUrl.pathname);
    let filePath = path.join(outputRoot, outputPath);

    try {
      const fileStats = await stat(filePath);
      if (fileStats.isDirectory()) filePath = path.join(filePath, 'index.html');
    } catch {
      if (!path.extname(filePath)) filePath = path.join(filePath, 'index.html');
    }

    const file = await readFile(filePath);
    const extension = path.extname(filePath);
    const shouldCompress =
      request.headers['accept-encoding']?.includes('br') &&
      compressibleExtensions.has(extension);
    const responseBody = shouldCompress
      ? brotliCompressSync(file, {
          params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 4 },
        })
      : file;
    const responseHeaders = {
      'cache-control': 'no-store',
      'content-type': contentTypes.get(extension) ?? 'application/octet-stream',
      vary: 'Accept-Encoding',
    };
    if (shouldCompress) responseHeaders['content-encoding'] = 'br';
    response.writeHead(200, responseHeaders);
    if (request.method === 'HEAD') response.end();
    else response.end(responseBody);
  } catch {
    try {
      const notFoundPage = await readFile(path.join(outputRoot, '404.html'));
      response.writeHead(404, {
        'cache-control': 'no-store',
        'content-type': 'text/html; charset=utf-8',
        vary: 'Accept-Encoding',
      });
      if (request.method === 'HEAD') response.end();
      else response.end(notFoundPage);
    } catch {
      response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      response.end('Not found');
    }
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Static export available at http://127.0.0.1:${port}/`);
});
