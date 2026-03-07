import { describe, it, expect } from 'vitest';
import { generateCodeVerifier, generateCodeChallenge, generatePkcePair } from '../src/pkce.js';

describe('PKCE', () => {
  describe('generateCodeVerifier', () => {
    it('generates a 43-character string', async () => {
      const verifier = await generateCodeVerifier();
      expect(verifier).toHaveLength(43);
    });

    it('generates URL-safe characters only', async () => {
      const verifier = await generateCodeVerifier();
      expect(verifier).toMatch(/^[A-Za-z0-9_-]+$/);
    });

    it('generates different values on each call', async () => {
      const a = await generateCodeVerifier();
      const b = await generateCodeVerifier();
      expect(a).not.toBe(b);
    });

    it('has no padding characters', async () => {
      const verifier = await generateCodeVerifier();
      expect(verifier).not.toContain('=');
      expect(verifier).not.toContain('+');
      expect(verifier).not.toContain('/');
    });
  });

  describe('generateCodeChallenge', () => {
    it('generates a base64url-encoded SHA-256 hash', async () => {
      const challenge = await generateCodeChallenge('test-verifier');
      expect(challenge).toMatch(/^[A-Za-z0-9_-]+$/);
    });

    it('produces consistent output for same input', async () => {
      const a = await generateCodeChallenge('fixed-input');
      const b = await generateCodeChallenge('fixed-input');
      expect(a).toBe(b);
    });

    it('produces different output for different inputs', async () => {
      const a = await generateCodeChallenge('input-a');
      const b = await generateCodeChallenge('input-b');
      expect(a).not.toBe(b);
    });

    it('has no padding characters', async () => {
      const challenge = await generateCodeChallenge('test');
      expect(challenge).not.toContain('=');
    });
  });

  describe('generatePkcePair', () => {
    it('returns both codeVerifier and codeChallenge', async () => {
      const pair = await generatePkcePair();
      expect(pair.codeVerifier).toBeDefined();
      expect(pair.codeChallenge).toBeDefined();
    });

    it('the challenge is the SHA-256 of the verifier', async () => {
      const pair = await generatePkcePair();
      const expectedChallenge = await generateCodeChallenge(pair.codeVerifier);
      expect(pair.codeChallenge).toBe(expectedChallenge);
    });
  });
});
