export function isExternal(url: string) {
  const regex = /^https?:\/\//i;
  return regex.test(url);
}
