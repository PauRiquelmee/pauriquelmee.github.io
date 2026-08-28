import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { normalizeOutputPath } from "./serve-out.lib.mjs";

const port = Number(process.env.PORT ?? 4173);
const outputRoot = path.resolve("out");
const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webmanifest", "application/manifest+json; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host}`);
    const outputPath = normalizeOutputPath(requestUrl.pathname);
    let filePath = path.join(outputRoot, outputPath);

    try {
      const fileStats = await stat(filePath);
      if (fileStats.isDirectory()) filePath = path.join(filePath, "index.html");
    } catch {
      if (!path.extname(filePath)) filePath = path.join(filePath, "index.html");
    }

    const file = await readFile(filePath);
    response.writeHead(200, {
      "cache-control": "no-store",
      "content-type": contentTypes.get(path.extname(filePath)) ?? "application/octet-stream",
    });
    if (request.method === "HEAD") response.end();
    else response.end(file);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Static export available at http://127.0.0.1:${port}/paula-riquelme-portfolio/`);
});
