import type { StorageAdapter } from './types.js';
import { STORAGE_KEYS } from './types.js';

/**
 * Creates a StorageAdapter backed by sessionStorage.
 */
export function createSessionStorageAdapter(): StorageAdapter {
  return {
    get: (key: string) => sessionStorage.getItem(key),
    set: (key: string, value: string) => sessionStorage.setItem(key, value),
    remove: (key: string) => sessionStorage.removeItem(key),
  };
}

/**
 * Creates a StorageAdapter backed by localStorage.
 */
export function createLocalStorageAdapter(): StorageAdapter {
  return {
    get: (key: string) => localStorage.getItem(key),
    set: (key: string, value: string) => localStorage.setItem(key, value),
    remove: (key: string) => localStorage.removeItem(key),
  };
}

/**
 * Creates an in-memory StorageAdapter. Useful for Node.js, SSR, or testing.
 */
export function createMemoryStorageAdapter(): StorageAdapter {
  const store = new Map<string, string>();

  return {
    get: (key: string) => store.get(key) ?? null,
    set: (key: string, value: string) => {
      store.set(key, value);
    },
    remove: (key: string) => {
      store.delete(key);
    },
  };
}

// === Internal helpers with key prefix ===

/** @internal */
export async function storageGet(
  storage: StorageAdapter,
  prefix: string,
  key: string,
): Promise<string | null> {
  return await storage.get(prefix + key);
}

/** @internal */
export async function storageSet(
  storage: StorageAdapter,
  prefix: string,
  key: string,
  value: string,
): Promise<void> {
  await storage.set(prefix + key, value);
}

/** @internal */
export async function storageRemove(
  storage: StorageAdapter,
  prefix: string,
  key: string,
): Promise<void> {
  await storage.remove(prefix + key);
}

/** @internal Removes all known SMART storage keys. */
export async function storageClear(
  storage: StorageAdapter,
  prefix: string,
): Promise<void> {
  for (const key of Object.values(STORAGE_KEYS)) {
    await storage.remove(prefix + key);
  }
}
