/**
 * IG Loader - Load FHIR Implementation Guides from various sources
 *
 * Supports:
 * - Local directories
 * - .tgz files (npm packages)
 * - HTTP/HTTPS URLs
 * - FHIR package registry (packages.fhir.org)
 */

import { existsSync, createWriteStream } from 'fs';
import { readFile, mkdir, rm } from 'fs/promises';
import { join, resolve, basename } from 'path';
import { tmpdir } from 'os';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';

// Use dynamic import for tar to handle ESM/CJS compatibility
let tar: typeof import('tar') | null = null;

async function getTar() {
  if (!tar) {
    tar = await import('tar');
  }
  return tar;
}

/**
 * Options for loading an Implementation Guide
 */
export interface IGLoadOptions {
  /**
   * Temporary directory for extracting packages
   * Default: system temp directory
   */
  tempDir?: string;

  /**
   * Whether to clean up temporary files after loading
   * Default: true
   */
  cleanup?: boolean;

  /**
   * Timeout for HTTP requests in milliseconds
   * Default: 30000 (30 seconds)
   */
  httpTimeout?: number;

  /**
   * Custom headers for HTTP requests
   */
  httpHeaders?: Record<string, string>;

  /**
   * FHIR package registry URL
   * Default: https://packages.fhir.org
   */
  registryUrl?: string;

  /**
   * Whether to cache downloaded packages
   * Default: true
   */
  cachePackages?: boolean;

  /**
   * Directory for caching downloaded packages
   * Default: ~/.fhir/packages
   */
  cacheDir?: string;
}

const DEFAULT_REGISTRY_URL = 'https://packages.fhir.org';
const DEFAULT_TIMEOUT = 30000;

/**
 * Result of loading an IG
 */
export interface IGLoadResult {
  /** Path to the extracted/loaded directory */
  path: string;
  /** Source type */
  source: 'directory' | 'tgz' | 'http' | 'registry';
  /** Whether this is a temporary path that should be cleaned up */
  isTemporary: boolean;
  /** Package name if available */
  packageName?: string;
  /** Package version if available */
  packageVersion?: string;
}

/**
 * IG Loader class for loading FHIR Implementation Guides from various sources
 */
export class IGLoader {
  private options: Required<IGLoadOptions>;
  private tempDirs: string[] = [];

  constructor(options: IGLoadOptions = {}) {
    this.options = {
      tempDir: options.tempDir || tmpdir(),
      cleanup: options.cleanup ?? true,
      httpTimeout: options.httpTimeout || DEFAULT_TIMEOUT,
      httpHeaders: options.httpHeaders || {},
      registryUrl: options.registryUrl || DEFAULT_REGISTRY_URL,
      cachePackages: options.cachePackages ?? true,
      cacheDir: options.cacheDir || this.getDefaultCacheDir(),
    };
  }

  /**
   * Load an Implementation Guide from any supported source
   *
   * @param source - Path, URL, or package identifier
   * @returns IGLoadResult with the path to load specs from
   *
   * @example
   * ```typescript
   * const loader = new IGLoader();
   *
   * // From local directory
   * const result1 = await loader.load('./path/to/ig/package');
   *
   * // From .tgz file
   * const result2 = await loader.load('./hl7.fhir.cl.clcore-1.8.5.tgz');
   *
   * // From URL
   * const result3 = await loader.load('https://packages.fhir.org/hl7.fhir.cl.clcore/1.8.5');
   *
   * // From package identifier
   * const result4 = await loader.load('hl7.fhir.cl.clcore@1.8.5');
   * const result5 = await loader.load('hl7.fhir.cl.clcore#1.8.5');
   * ```
   */
  async load(source: string): Promise<IGLoadResult> {
    // Detect source type
    if (this.isUrl(source)) {
      return this.loadFromUrl(source);
    }

    if (this.isPackageIdentifier(source)) {
      return this.loadFromRegistry(source);
    }

    if (source.endsWith('.tgz') || source.endsWith('.tar.gz')) {
      return this.loadFromTgz(source);
    }

    // Assume it's a directory
    return this.loadFromDirectory(source);
  }

  /**
   * Load from a local directory
   */
  async loadFromDirectory(dirPath: string): Promise<IGLoadResult> {
    const resolvedPath = resolve(dirPath);

    if (!existsSync(resolvedPath)) {
      throw new Error(`Directory not found: ${resolvedPath}`);
    }

    // Check if there's a 'package' subdirectory (common IG structure)
    const packageDir = join(resolvedPath, 'package');
    const finalPath = existsSync(packageDir) ? packageDir : resolvedPath;

    // Try to read package.json for metadata
    let packageName: string | undefined;
    let packageVersion: string | undefined;

    try {
      const packageJsonPath = join(finalPath, 'package.json');
      if (existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
        packageName = packageJson.name;
        packageVersion = packageJson.version;
      }
    } catch {
      // Ignore errors reading package.json
    }

    return {
      path: finalPath,
      source: 'directory',
      isTemporary: false,
      packageName,
      packageVersion,
    };
  }

  /**
   * Load from a .tgz file
   */
  async loadFromTgz(tgzPath: string): Promise<IGLoadResult> {
    const resolvedPath = resolve(tgzPath);

    if (!existsSync(resolvedPath)) {
      throw new Error(`File not found: ${resolvedPath}`);
    }

    const tarModule = await getTar();

    // Create temp directory for extraction
    const extractDir = await this.createTempDir(basename(tgzPath, '.tgz'));
    this.tempDirs.push(extractDir);

    // Extract the tgz file
    await tarModule.extract({
      file: resolvedPath,
      cwd: extractDir,
    });

    // Find the extracted content (usually in 'package' folder for npm tarballs)
    const packageDir = join(extractDir, 'package');
    const finalPath = existsSync(packageDir) ? packageDir : extractDir;

    // Try to read package.json for metadata
    let packageName: string | undefined;
    let packageVersion: string | undefined;

    try {
      const packageJsonPath = join(finalPath, 'package.json');
      if (existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
        packageName = packageJson.name;
        packageVersion = packageJson.version;
      }
    } catch {
      // Ignore errors reading package.json
    }

    return {
      path: finalPath,
      source: 'tgz',
      isTemporary: true,
      packageName,
      packageVersion,
    };
  }

  /**
   * Load from a URL (HTTP/HTTPS)
   */
  async loadFromUrl(url: string): Promise<IGLoadResult> {
    // Download to temp file
    const tempFile = await this.downloadToTemp(url);

    // Load as tgz
    const result = await this.loadFromTgz(tempFile);
    result.source = 'http';

    // Clean up the downloaded file
    if (this.options.cleanup) {
      try {
        await rm(tempFile, { force: true });
      } catch {
        // Ignore cleanup errors
      }
    }

    return result;
  }

  /**
   * Load from FHIR package registry using package identifier
   *
   * @param identifier Package identifier in format:
   *   - 'package-name@version' (e.g., 'hl7.fhir.cl.clcore@1.8.5')
   *   - 'package-name#version' (e.g., 'hl7.fhir.cl.clcore#1.8.5')
   *   - 'package-name' (uses latest version)
   */
  async loadFromRegistry(identifier: string): Promise<IGLoadResult> {
    const { name, version } = this.parsePackageIdentifier(identifier);

    // Check cache first
    if (this.options.cachePackages) {
      const cachedPath = await this.getCachedPackage(name, version);
      if (cachedPath) {
        return {
          path: cachedPath,
          source: 'registry',
          isTemporary: false,
          packageName: name,
          packageVersion: version,
        };
      }
    }

    // Resolve version if 'latest'
    let resolvedVersion = version;
    if (version === 'latest') {
      resolvedVersion = await this.getLatestVersion(name);
    }

    // Download from registry
    const downloadUrl = `${this.options.registryUrl}/${name}/${resolvedVersion}`;
    const result = await this.loadFromUrl(downloadUrl);
    result.source = 'registry';
    result.packageName = name;
    result.packageVersion = resolvedVersion;

    // Cache the package if enabled
    if (this.options.cachePackages && !result.isTemporary) {
      await this.cachePackage(name, resolvedVersion, result.path);
    }

    return result;
  }

  /**
   * Get the latest version of a package from the registry
   */
  async getLatestVersion(packageName: string): Promise<string> {
    const url = `${this.options.registryUrl}/${packageName}`;
    const response = await this.fetchWithTimeout(url, {
      headers: {
        Accept: 'application/json',
        ...this.options.httpHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get package info: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as { 'dist-tags'?: { latest?: string }; versions?: Record<string, unknown> };

    // Try dist-tags.latest first
    if (data['dist-tags']?.latest) {
      return data['dist-tags'].latest;
    }

    // Fall back to highest version
    if (data.versions) {
      const versions = Object.keys(data.versions).sort((a, b) => {
        return this.compareVersions(b, a); // Sort descending
      });
      if (versions.length > 0) {
        return versions[0];
      }
    }

    throw new Error(`Could not determine latest version for package: ${packageName}`);
  }

  /**
   * List available versions of a package from the registry
   */
  async listVersions(packageName: string): Promise<string[]> {
    const url = `${this.options.registryUrl}/${packageName}`;
    const response = await this.fetchWithTimeout(url, {
      headers: {
        Accept: 'application/json',
        ...this.options.httpHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get package info: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as { versions?: Record<string, unknown> };

    if (data.versions) {
      return Object.keys(data.versions).sort((a, b) => this.compareVersions(b, a));
    }

    return [];
  }

  /**
   * Clean up temporary directories
   */
  async cleanup(): Promise<void> {
    for (const dir of this.tempDirs) {
      try {
        await rm(dir, { recursive: true, force: true });
      } catch {
        // Ignore cleanup errors
      }
    }
    this.tempDirs = [];
  }

  // ============================================================================
  // Private helpers
  // ============================================================================

  private isUrl(source: string): boolean {
    return source.startsWith('http://') || source.startsWith('https://');
  }

  private isPackageIdentifier(source: string): boolean {
    // Package identifiers look like: name@version or name#version or just name
    // They don't contain path separators and don't end with known file extensions
    if (source.includes('/') || source.includes('\\')) {
      return false;
    }
    if (source.endsWith('.tgz') || source.endsWith('.tar.gz') || source.endsWith('.json')) {
      return false;
    }
    // Must have at least one dot (FHIR package naming convention)
    return source.includes('.');
  }

  private parsePackageIdentifier(identifier: string): { name: string; version: string } {
    // Handle name@version format
    if (identifier.includes('@')) {
      const [name, version] = identifier.split('@');
      return { name, version: version || 'latest' };
    }

    // Handle name#version format
    if (identifier.includes('#')) {
      const [name, version] = identifier.split('#');
      return { name, version: version || 'latest' };
    }

    // Just name, use latest
    return { name: identifier, version: 'latest' };
  }

  private getDefaultCacheDir(): string {
    const homeDir = process.env.HOME || process.env.USERPROFILE || tmpdir();
    return join(homeDir, '.fhir', 'packages');
  }

  private async getCachedPackage(name: string, version: string): Promise<string | null> {
    if (version === 'latest') {
      return null; // Don't use cache for 'latest'
    }

    const cachePath = join(this.options.cacheDir, `${name}#${version}`, 'package');
    if (existsSync(cachePath)) {
      return cachePath;
    }

    return null;
  }

  private async cachePackage(name: string, version: string, sourcePath: string): Promise<void> {
    const cacheDir = join(this.options.cacheDir, `${name}#${version}`);

    try {
      await mkdir(cacheDir, { recursive: true });

      // Copy files to cache (simple approach - copy the source directory)
      // For a more robust implementation, you might want to use a proper file copy
      const packageJsonPath = join(sourcePath, 'package.json');
      if (existsSync(packageJsonPath)) {
        const destPackageDir = join(cacheDir, 'package');
        await mkdir(destPackageDir, { recursive: true });

        // For now, we just mark that we tried to cache
        // A full implementation would copy all files
      }
    } catch {
      // Ignore cache errors
    }
  }

  private async createTempDir(prefix: string): Promise<string> {
    const tempDir = join(this.options.tempDir, `fhir-ig-${prefix}-${Date.now()}`);
    await mkdir(tempDir, { recursive: true });
    return tempDir;
  }

  private async downloadToTemp(url: string): Promise<string> {
    const response = await this.fetchWithTimeout(url, {
      headers: this.options.httpHeaders,
    });

    if (!response.ok) {
      throw new Error(`Failed to download from ${url}: ${response.status} ${response.statusText}`);
    }

    // Create temp file
    const tempDir = await this.createTempDir('download');
    const tempFile = join(tempDir, 'package.tgz');

    // Write response body to file
    const body = response.body;
    if (!body) {
      throw new Error('No response body');
    }

    // Use stream pipeline for efficient download
    const fileStream = createWriteStream(tempFile);

    // Convert web stream to Node.js stream
    const nodeStream = Readable.fromWeb(body as import('stream/web').ReadableStream);
    await pipeline(nodeStream, fileStream);

    return tempFile;
  }

  private async fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.options.httpTimeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      return response;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private compareVersions(a: string, b: string): number {
    const partsA = a.split('.').map(p => parseInt(p, 10) || 0);
    const partsB = b.split('.').map(p => parseInt(p, 10) || 0);

    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
      const partA = partsA[i] || 0;
      const partB = partsB[i] || 0;
      if (partA > partB) return 1;
      if (partA < partB) return -1;
    }

    return 0;
  }
}

/**
 * Create an IG loader with default options
 */
export function createIGLoader(options?: IGLoadOptions): IGLoader {
  return new IGLoader(options);
}

/**
 * Convenience function to load an IG from any source
 */
export async function loadIG(source: string, options?: IGLoadOptions): Promise<IGLoadResult> {
  const loader = new IGLoader(options);
  return loader.load(source);
}
