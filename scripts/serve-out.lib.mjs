import path from "node:path";

export const previewBasePath = "/paula-riquelme-portfolio";

export function normalizeOutputPath(pathname) {
  let decodedPath = decodeURIComponent(pathname);

  if (
    decodedPath === previewBasePath ||
    decodedPath.startsWith(`${previewBasePath}/`)
  ) {
    decodedPath = decodedPath.slice(previewBasePath.length);
  }

  if (decodedPath === "" || decodedPath === "/") return "index.html";

  const relativePath = decodedPath.replace(/^\/+/, "");
  const normalizedPath = path.posix.normalize(relativePath);

  if (
    normalizedPath === ".." ||
    normalizedPath.startsWith("../") ||
    path.posix.isAbsolute(normalizedPath)
  ) {
    throw new Error("Invalid output path");
  }

  return relativePath.endsWith("/")
    ? `${normalizedPath}/index.html`
    : normalizedPath;
}
