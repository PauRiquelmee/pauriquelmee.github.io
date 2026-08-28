export const productionBasePath = "/paula-riquelme-portfolio";

export const siteUrl = new URL(
  "https://PauRiquelmee.github.io/paula-riquelme-portfolio/",
);

export function withBasePath(
  pathname: string,
  basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "",
) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const normalizedBasePath = basePath.replace(/\/$/, "");

  return `${normalizedBasePath}${normalizedPath}`;
}
