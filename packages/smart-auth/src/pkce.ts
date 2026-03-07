import { SmartAuthError } from './errors.js';

/**
 * Encodes a Uint8Array as a base64url string (no padding).
 */
function base64url(buffer: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < buffer.length; i++) {
    binary += String.fromCharCode(buffer[i]!);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Generates a cryptographically random PKCE code_verifier.
 * 32 random bytes → 43 base64url characters (>= 256 bits entropy).
 */
export async function generateCodeVerifier(): Promise<string> {
  const crypto = globalThis.crypto;
  if (!crypto?.getRandomValues) {
    throw new SmartAuthError('pkce_failed', 'crypto.getRandomValues is not available');
  }

  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return base64url(array);
}

/**
 * Generates a PKCE code_challenge from a code_verifier using S256.
 * code_challenge = base64url(SHA-256(code_verifier))
 */
export async function generateCodeChallenge(verifier: string): Promise<string> {
  const crypto = globalThis.crypto;
  if (!crypto?.subtle) {
    throw new SmartAuthError('pkce_failed', 'crypto.subtle is not available');
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return base64url(new Uint8Array(hash));
}

/**
 * Generates a PKCE code_verifier and code_challenge pair.
 */
export async function generatePkcePair(): Promise<{
  codeVerifier: string;
  codeChallenge: string;
}> {
  const codeVerifier = await generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  return { codeVerifier, codeChallenge };
}
