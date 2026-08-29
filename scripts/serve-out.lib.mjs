import path from "node:path";

export function normalizeOutputPath(pathname) {
  const decodedPath = decodeURIComponent(pathname);

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
