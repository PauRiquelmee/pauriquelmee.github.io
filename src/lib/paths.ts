export const siteUrl = new URL("https://PauRiquelmee.github.io/");

export const withBasePath = (pathname: string) => {
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
};
