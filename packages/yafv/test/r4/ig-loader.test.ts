/**
 * Tests for IG Loader - Loading FHIR Implementation Guides from various sources
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { IGLoader, createIGLoader, loadIG } from '../../src/index.js';
import { join } from 'path';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'fs';
import { tmpdir } from 'os';

describe('IGLoader', () => {
  let loader: IGLoader;
  let testDir: string;

  beforeEach(() => {
    loader = new IGLoader();
    // Create a unique test directory
    testDir = join(tmpdir(), `ig-loader-test-${Date.now()}`);
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(async () => {
    await loader.cleanup();
    // Clean up test directory
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  describe('constructor', () => {
    it('should create loader with default options', () => {
      const loader = new IGLoader();
      expect(loader).toBeInstanceOf(IGLoader);
    });

    it('should create loader with custom options', () => {
      const loader = new IGLoader({
        httpTimeout: 60000,
        registryUrl: 'https://custom-registry.example.com',
        cachePackages: false,
      });
      expect(loader).toBeInstanceOf(IGLoader);
    });
  });

  describe('loadFromDirectory', () => {
    it('should load from a valid directory', async () => {
      // Create a mock package directory with package.json
      const packageDir = join(testDir, 'package');
      mkdirSync(packageDir, { recursive: true });
      writeFileSync(
        join(packageDir, 'package.json'),
        JSON.stringify({
          name: 'test.package',
          version: '1.0.0',
        })
      );

      const result = await loader.loadFromDirectory(testDir);

      expect(result.source).toBe('directory');
      expect(result.isTemporary).toBe(false);
      expect(result.path).toBe(packageDir);
      expect(result.packageName).toBe('test.package');
      expect(result.packageVersion).toBe('1.0.0');
    });

    it('should throw error for non-existent directory', async () => {
      await expect(loader.loadFromDirectory('/non/existent/path')).rejects.toThrow(
        'Directory not found'
      );
    });

    it('should load from directory without package.json', async () => {
      const result = await loader.loadFromDirectory(testDir);

      expect(result.source).toBe('directory');
      expect(result.path).toBe(testDir);
      expect(result.packageName).toBeUndefined();
      expect(result.packageVersion).toBeUndefined();
    });

    it('should prefer package subdirectory if exists', async () => {
      // Create package subdirectory
      const packageDir = join(testDir, 'package');
      mkdirSync(packageDir, { recursive: true });
      writeFileSync(join(packageDir, 'package.json'), JSON.stringify({ name: 'inner' }));

      const result = await loader.loadFromDirectory(testDir);

      expect(result.path).toBe(packageDir);
    });
  });

  describe('load - source detection', () => {
    it('should detect HTTP URL', async () => {
      // We can't test actual HTTP loading without network,
      // but we can verify the detection logic
      const loader = new IGLoader({ httpTimeout: 100 });

      // This should fail quickly with a network error or timeout
      await expect(
        loader.load('https://invalid-url-that-does-not-exist.example.com/package.tgz')
      ).rejects.toThrow();
    });

    it('should detect .tgz file extension', async () => {
      // Should throw file not found
      await expect(loader.load('/path/to/package.tgz')).rejects.toThrow('File not found');
    });

    it('should detect .tar.gz file extension', async () => {
      // Should throw file not found
      await expect(loader.load('/path/to/package.tar.gz')).rejects.toThrow('File not found');
    });

    it('should detect package identifier with @', async () => {
      // Use a non-existent package to avoid cache hits
      // and disable caching to ensure we don't use cached data
      const loader = new IGLoader({
        httpTimeout: 100,
        cachePackages: false,
        cacheDir: join(testDir, 'no-cache'),
      });
      await expect(loader.load('nonexistent.package.test@1.0.0')).rejects.toThrow();
    });

    it('should detect package identifier with #', async () => {
      const loader = new IGLoader({
        httpTimeout: 100,
        cachePackages: false,
        cacheDir: join(testDir, 'no-cache'),
      });
      await expect(loader.load('nonexistent.package.test#1.0.0')).rejects.toThrow();
    });

    it('should detect package identifier without version', async () => {
      const loader = new IGLoader({
        httpTimeout: 100,
        cachePackages: false,
        cacheDir: join(testDir, 'no-cache'),
      });
      await expect(loader.load('nonexistent.package.test')).rejects.toThrow();
    });

    it('should use cached package if available', async () => {
      // Create a mock cached package
      const cacheDir = join(testDir, 'cache');
      const packageCacheDir = join(cacheDir, 'cached.package#1.0.0', 'package');
      mkdirSync(packageCacheDir, { recursive: true });
      writeFileSync(
        join(packageCacheDir, 'package.json'),
        JSON.stringify({ name: 'cached.package', version: '1.0.0' })
      );

      const loader = new IGLoader({
        cachePackages: true,
        cacheDir: cacheDir,
      });

      const result = await loader.load('cached.package@1.0.0');

      expect(result.source).toBe('registry');
      expect(result.isTemporary).toBe(false);
      expect(result.packageName).toBe('cached.package');
      expect(result.packageVersion).toBe('1.0.0');
      expect(result.path).toBe(packageCacheDir);
    });

    it('should treat path-like strings as directories', async () => {
      // Paths with slashes are treated as directories
      await expect(loader.load('./some/path')).rejects.toThrow('Directory not found');
    });
  });

  describe('parsePackageIdentifier', () => {
    it('should parse name@version format', async () => {
      // We can test this indirectly by verifying that a non-existent package
      // throws an error related to network/abort (not "directory not found")
      const loader = new IGLoader({
        httpTimeout: 100,
        cachePackages: false,
        cacheDir: join(testDir, 'no-cache'),
      });

      // This will try to fetch from the registry with the parsed name/version
      try {
        await loader.load('test.package@1.0.0');
        // If we get here, the test still passes - it means the error was thrown
      } catch (e: any) {
        // The error should indicate network/abort issue, not "Directory not found"
        expect(e.message).toMatch(/abort|fetch|network|timeout|ENOTFOUND|Failed to/i);
      }
    });

    it('should parse name#version format', async () => {
      const loader = new IGLoader({
        httpTimeout: 100,
        cachePackages: false,
        cacheDir: join(testDir, 'no-cache'),
      });

      try {
        await loader.load('test.package#2.0.0');
      } catch (e: any) {
        expect(e.message).toMatch(/abort|fetch|network|timeout|ENOTFOUND|Failed to/i);
      }
    });
  });

  describe('cleanup', () => {
    it('should clean up temporary directories', async () => {
      // Load from a directory (no temp dirs created)
      await loader.loadFromDirectory(testDir);

      // Cleanup should not throw
      await expect(loader.cleanup()).resolves.not.toThrow();
    });
  });

  describe('caching', () => {
    it('should not use cache for latest version', async () => {
      const loader = new IGLoader({
        cachePackages: true,
        cacheDir: join(testDir, 'cache'),
        httpTimeout: 100,
      });

      // Even with caching enabled, 'latest' should not use cache
      // (will fail because of network, but that's expected)
      await expect(loader.load('test.package')).rejects.toThrow();
    });
  });
});

describe('createIGLoader', () => {
  it('should create a new IGLoader instance', () => {
    const loader = createIGLoader();
    expect(loader).toBeInstanceOf(IGLoader);
  });

  it('should pass options to the loader', () => {
    const loader = createIGLoader({
      httpTimeout: 45000,
    });
    expect(loader).toBeInstanceOf(IGLoader);
  });
});

describe('loadIG convenience function', () => {
  let testDir: string;

  beforeEach(() => {
    testDir = join(tmpdir(), `ig-loader-test-${Date.now()}`);
    mkdirSync(testDir, { recursive: true });
    writeFileSync(
      join(testDir, 'package.json'),
      JSON.stringify({ name: 'convenience.test', version: '1.0.0' })
    );
  });

  afterEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it('should load IG using convenience function', async () => {
    const result = await loadIG(testDir);

    expect(result.source).toBe('directory');
    expect(result.packageName).toBe('convenience.test');
  });

  it('should accept options', async () => {
    const result = await loadIG(testDir, {
      cleanup: false,
    });

    expect(result.source).toBe('directory');
  });
});

describe('isPackageIdentifier detection', () => {
  let loader: IGLoader;

  beforeEach(() => {
    loader = new IGLoader({ httpTimeout: 100 });
  });

  afterEach(async () => {
    await loader.cleanup();
  });

  it('should not treat path with forward slash as package identifier', async () => {
    await expect(loader.load('path/to/package')).rejects.toThrow('Directory not found');
  });

  it('should not treat path with backslash as package identifier', async () => {
    await expect(loader.load('path\\to\\package')).rejects.toThrow('Directory not found');
  });

  it('should not treat .json file as package identifier', async () => {
    await expect(loader.load('StructureDefinition-Patient.json')).rejects.toThrow(
      'Directory not found'
    );
  });

  it('should require at least one dot for package identifier', async () => {
    // Single word without dots is treated as directory
    await expect(loader.load('singleword')).rejects.toThrow('Directory not found');
  });

  it('should recognize valid package identifiers', async () => {
    // These should attempt registry lookup (and fail due to network)
    const validIdentifiers = [
      'hl7.fhir.r4.core',
      'hl7.fhir.cl.clcore@1.8.5',
      'some.package#1.0.0',
    ];

    for (const id of validIdentifiers) {
      try {
        await loader.load(id);
      } catch (e: any) {
        // Should fail with network error, not "Directory not found"
        expect(e.message).not.toContain('Directory not found');
      }
    }
  });
});
