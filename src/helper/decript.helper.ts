import btoa from 'btoa';

export function utf8_to_b64(str: string) {
  return btoa(unescape(encodeURIComponent(str)));
}
