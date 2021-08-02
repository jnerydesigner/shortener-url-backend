import { randomBytes, createCipheriv } from 'crypto';

export function b64_to_utf8(longUrl: string) {
  // const strtotstr = '61080c28bf6e0dc15565f636';
  const passwd = '12345678978945612345678978456123';
  const iv = Buffer.from(randomBytes(16));
  const cypher = createCipheriv('aes-256-gcm', Buffer.from(passwd), iv);

  let encrypted = cypher.update(longUrl);
  encrypted = Buffer.concat([encrypted, cypher.final()]);

  return encrypted.toString('base64');
}
