import { describe, it, expect } from 'vitest';
import { createMemoryStorageAdapter } from '../src/storage.js';
import { storageGet, storageSet, storageRemove, storageClear } from '../src/storage.js';
import { createMockStorageAdapter } from './helpers/mock-storage.js';

describe('Storage', () => {
  describe('createMemoryStorageAdapter', () => {
    it('stores and retrieves values', () => {
      const adapter = createMemoryStorageAdapter();
      adapter.set('key', 'value');
      expect(adapter.get('key')).toBe('value');
    });

    it('returns null for missing keys', () => {
      const adapter = createMemoryStorageAdapter();
      expect(adapter.get('missing')).toBeNull();
    });

    it('removes values', () => {
      const adapter = createMemoryStorageAdapter();
      adapter.set('key', 'value');
      adapter.remove('key');
      expect(adapter.get('key')).toBeNull();
    });

    it('overwrites existing values', () => {
      const adapter = createMemoryStorageAdapter();
      adapter.set('key', 'old');
      adapter.set('key', 'new');
      expect(adapter.get('key')).toBe('new');
    });
  });

  describe('storageGet/Set/Remove with prefix', () => {
    it('prepends prefix to keys', async () => {
      const adapter = createMockStorageAdapter();
      await storageSet(adapter, 'smart_', 'token', 'abc');
      expect(adapter._store.get('smart_token')).toBe('abc');
    });

    it('reads with prefix', async () => {
      const adapter = createMockStorageAdapter();
      adapter._store.set('smart_token', 'abc');
      const result = await storageGet(adapter, 'smart_', 'token');
      expect(result).toBe('abc');
    });

    it('removes with prefix', async () => {
      const adapter = createMockStorageAdapter();
      adapter._store.set('smart_token', 'abc');
      await storageRemove(adapter, 'smart_', 'token');
      expect(adapter._store.has('smart_token')).toBe(false);
    });
  });

  describe('storageClear', () => {
    it('removes all known SMART keys', async () => {
      const adapter = createMockStorageAdapter();
      adapter._store.set('smart_code_verifier', 'v');
      adapter._store.set('smart_state', 's');
      adapter._store.set('smart_token_response', 't');
      adapter._store.set('smart_smart_configuration', 'c');
      adapter._store.set('other_key', 'x');

      await storageClear(adapter, 'smart_');

      expect(adapter._store.has('smart_code_verifier')).toBe(false);
      expect(adapter._store.has('smart_state')).toBe(false);
      expect(adapter._store.has('smart_token_response')).toBe(false);
      expect(adapter._store.has('smart_smart_configuration')).toBe(false);
      // Other keys should remain
      expect(adapter._store.get('other_key')).toBe('x');
    });
  });
});
