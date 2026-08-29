export const siteUrl = new URL("https://PauRiquelmee.github.io/");

export function withBasePath(pathname: string) {
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}
