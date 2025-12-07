/**
 * SpecRegistry - Manages FHIR StructureDefinitions, ValueSets, and CodeSystems
 *
 * Automatically detects and loads specs from @fhir-toolkit/{version}-specs packages.
 * Supports loading additional Implementation Guides from various sources:
 * - Local directories
 * - .tgz files
 * - HTTP/HTTPS URLs
 * - FHIR package registry (packages.fhir.org)
 */

import { glob } from 'glob';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join, resolve } from 'path';
import { LRUCache } from 'lru-cache';
import type {
  StructureDefinition,
  ValueSet,
  CodeSystem,
} from './types.js';
import { IGLoader, type IGLoadOptions } from './ig-loader.js';

/** Supported FHIR versions */
export type FhirVersion = 'R4' | 'R4B' | 'R5';

/** Package names for each FHIR version */
const SPECS_PACKAGE_NAMES: Record<FhirVersion, string> = {
  R4: '@fhir-toolkit/r4-specs',
  R4B: '@fhir-toolkit/r4b-specs',
  R5: '@fhir-toolkit/r5-specs',
};

/**
 * Try to resolve the specs path from the installed specs package
 */
async function resolveSpecsPackage(version: FhirVersion): Promise<string | null> {
  const packageName = SPECS_PACKAGE_NAMES[version];

  try {
    // Try to dynamically import the specs package
    const specsModule = await import(packageName);
    if (specsModule.specsPath && existsSync(specsModule.specsPath)) {
      return specsModule.specsPath;
    }
  } catch {
    // Package not installed
  }

  return null;
}

/**
 * Get the directory for specs based on version
 * Tries multiple locations in order of preference
 */
async function getDefaultSpecsPath(version: FhirVersion = 'R4'): Promise<string | null> {
  const versionLower = version.toLowerCase(); // r4, r4b, r5

  // 1. First, try to load from the dedicated specs package
  const packagePath = await resolveSpecsPackage(version);
  if (packagePath) {
    return packagePath;
  }

  // 2. Try common node_modules locations (for when package is installed but import fails)
  const possiblePaths = [
    // Monorepo workspace
    resolve(process.cwd(), 'node_modules', '@fhir-toolkit', `${versionLower}-specs`, 'specs'),
    // From current working directory (development)
    resolve(process.cwd(), 'packages', `${versionLower}-specs`, 'specs'),
  ];

  for (const path of possiblePaths) {
    if (existsSync(path)) {
      return path;
    }
  }

  return null;
}

export type SpecType = 'StructureDefinition' | 'ValueSet' | 'CodeSystem';

export interface LoadedSpec {
  type: SpecType;
  resource: StructureDefinition | ValueSet | CodeSystem;
  source: string;
}

export interface SpecRegistryOptions {
  /** Maximum number of specs to keep in memory cache */
  cacheSize?: number;
  /** Custom path to specs directory (for testing or custom setups) */
  specsPath?: string;
  /** FHIR version (default: R4) */
  fhirVersion?: FhirVersion;
}

export class SpecRegistry {
  private specs = new Map<string, LoadedSpec>();
  private urlIndex = new Map<string, string>();
  private typeIndex = new Map<string, Set<string>>();
  private profileIndex = new Map<string, Set<string>>(); // Maps base type to profile URLs
  private cache: LRUCache<string, LoadedSpec>;
  private initialized = false;
  private specsPath: string | null = null;
  private fhirVersion: FhirVersion;
  private customSpecsPath?: string;

  constructor(options: SpecRegistryOptions = {}) {
    const { cacheSize = 500, specsPath, fhirVersion = 'R4' } = options;

    this.cache = new LRUCache<string, LoadedSpec>({
      max: cacheSize,
    });

    this.fhirVersion = fhirVersion;
    this.customSpecsPath = specsPath;
  }

  /**
   * Initialize the registry by loading specs
   */
  async initialize(): Promise<void> {
    if (this.initialized) {
      return;
    }

    // Resolve specs path (custom or auto-detected)
    if (this.customSpecsPath) {
      this.specsPath = this.customSpecsPath;
    } else {
      this.specsPath = await getDefaultSpecsPath(this.fhirVersion);
    }

    if (!this.specsPath) {
      const packageName = SPECS_PACKAGE_NAMES[this.fhirVersion];
      throw new Error(
        `No FHIR ${this.fhirVersion} specs found. ` +
        `Please install the specs package: npm install ${packageName}\n\n` +
        `Or provide a custom specsPath in the options.`
      );
    }

    if (!existsSync(this.specsPath)) {
      throw new Error(
        `Specs directory not found: ${this.specsPath}\n` +
        `Please ensure the specs package is properly installed.`
      );
    }

    await this.loadFromDirectory(this.specsPath);
    this.initialized = true;
  }

  /**
   * Get the resolved specs path (after initialization)
   */
  getSpecsPath(): string | null {
    return this.specsPath;
  }

  /**
   * Get the FHIR version this registry is configured for
   */
  getFhirVersion(): FhirVersion {
    return this.fhirVersion;
  }

  /**
   * Load specs from a directory (bundled or IG)
   */
  async loadFromDirectory(dirPath: string): Promise<number> {
    const pattern = join(dirPath, '**/*.json');
    const files = await glob(pattern);
    let loadedCount = 0;

    for (const filePath of files) {
      try {
        const content = await readFile(filePath, 'utf-8');
        const resource = JSON.parse(content);

        if (this.isValidSpec(resource)) {
          this.addSpec(resource, filePath);
          loadedCount++;
        }
      } catch {
        // Skip files that can't be parsed or aren't valid specs
      }
    }

    return loadedCount;
  }

  /**
   * Load a single spec file
   */
  async loadFromFile(filePath: string): Promise<void> {
    const content = await readFile(filePath, 'utf-8');
    const resource = JSON.parse(content);

    if (!this.isValidSpec(resource)) {
      throw new Error(`File ${filePath} does not contain a valid FHIR spec resource`);
    }

    this.addSpec(resource, filePath);
  }

  /**
   * Load specs from an NPM package (Implementation Guide)
   * @deprecated Use loadIG() instead for better flexibility
   */
  async loadFromPackage(packagePath: string): Promise<number> {
    // Look for specs in common IG package locations
    const searchPaths = [
      join(packagePath, 'package'),
      join(packagePath, 'output'),
      packagePath,
    ];

    let loadedCount = 0;

    for (const searchPath of searchPaths) {
      try {
        loadedCount += await this.loadFromDirectory(searchPath);
      } catch {
        // Directory doesn't exist, try next
      }
    }

    return loadedCount;
  }

  /**
   * Load an Implementation Guide from various sources
   *
   * Supports:
   * - Local directories: `./path/to/ig/package`
   * - .tgz files: `./hl7.fhir.cl.clcore-1.8.5.tgz`
   * - HTTP/HTTPS URLs: `https://packages.fhir.org/hl7.fhir.cl.clcore/1.8.5`
   * - FHIR package identifiers: `hl7.fhir.cl.clcore@1.8.5` or `hl7.fhir.cl.clcore#1.8.5`
   *
   * @param source - Path, URL, or package identifier
   * @param options - Optional loading options
   * @returns Object with loaded count and package metadata
   *
   * @example
   * ```typescript
   * // From local directory
   * await registry.loadIG('./path/to/ig/package');
   *
   * // From .tgz file
   * await registry.loadIG('./hl7.fhir.cl.clcore-1.8.5.tgz');
   *
   * // From URL
   * await registry.loadIG('https://packages.fhir.org/hl7.fhir.cl.clcore/1.8.5');
   *
   * // From package registry (auto-downloads)
   * await registry.loadIG('hl7.fhir.cl.clcore@1.8.5');
   *
   * // Latest version from registry
   * await registry.loadIG('hl7.fhir.cl.clcore');
   * ```
   */
  async loadIG(
    source: string,
    options?: IGLoadOptions
  ): Promise<{ count: number; packageName?: string; packageVersion?: string }> {
    const loader = new IGLoader(options);

    try {
      const result = await loader.load(source);
      const count = await this.loadFromDirectory(result.path);

      // Cleanup if needed
      if (result.isTemporary && options?.cleanup !== false) {
        await loader.cleanup();
      }

      return {
        count,
        packageName: result.packageName,
        packageVersion: result.packageVersion,
      };
    } catch (error) {
      // Always cleanup on error
      await loader.cleanup();
      throw error;
    }
  }

  /**
   * Get the latest version of a package from the FHIR registry
   *
   * @param packageName - Package name (e.g., 'hl7.fhir.cl.clcore')
   * @param options - Optional loader options
   * @returns The latest version string
   */
  async getLatestPackageVersion(
    packageName: string,
    options?: IGLoadOptions
  ): Promise<string> {
    const loader = new IGLoader(options);
    return loader.getLatestVersion(packageName);
  }

  /**
   * List available versions of a package from the FHIR registry
   *
   * @param packageName - Package name (e.g., 'hl7.fhir.cl.clcore')
   * @param options - Optional loader options
   * @returns Array of available versions (sorted descending)
   */
  async listPackageVersions(
    packageName: string,
    options?: IGLoadOptions
  ): Promise<string[]> {
    const loader = new IGLoader(options);
    return loader.listVersions(packageName);
  }

  /**
   * Add a spec directly (useful for programmatic loading)
   */
  addSpec(resource: StructureDefinition | ValueSet | CodeSystem, source: string = 'programmatic'): void {
    const type = resource.resourceType as SpecType;
    const url = resource.url;

    if (!url) {
      throw new Error(`Spec ${type} must have a url`);
    }

    const loadedSpec: LoadedSpec = {
      type,
      resource,
      source,
    };

    // Store by URL (primary key)
    this.specs.set(url, loadedSpec);
    this.urlIndex.set(url, url);

    // Index by resource type for quick lookups
    if (!this.typeIndex.has(type)) {
      this.typeIndex.set(type, new Set());
    }
    this.typeIndex.get(type)!.add(url);

    // For StructureDefinitions, also index by type name and base type
    if (type === 'StructureDefinition') {
      const sd = resource as StructureDefinition;
      this.urlIndex.set(sd.type, url);
      if (sd.name) {
        this.urlIndex.set(sd.name, url);
      }
      // Index profiles by their base type
      if (sd.derivation === 'constraint' && sd.baseDefinition) {
        // Extract base type from baseDefinition URL
        const baseType = sd.type;
        if (!this.profileIndex.has(baseType)) {
          this.profileIndex.set(baseType, new Set());
        }
        this.profileIndex.get(baseType)!.add(url);
      }
    }

    // Clear from cache if it was there
    this.cache.delete(url);
  }

  /**
   * Get a spec by URL or name
   */
  get(urlOrName: string): LoadedSpec | undefined {
    // Check cache first
    const cached = this.cache.get(urlOrName);
    if (cached) {
      return cached;
    }

    // Look up in index
    const url = this.urlIndex.get(urlOrName) || urlOrName;
    const spec = this.specs.get(url);

    if (spec) {
      this.cache.set(urlOrName, spec);
    }

    return spec;
  }

  /**
   * Get a StructureDefinition by URL or type name
   */
  getStructureDefinition(urlOrType: string): StructureDefinition | undefined {
    const spec = this.get(urlOrType);
    if (spec && spec.type === 'StructureDefinition') {
      return spec.resource as StructureDefinition;
    }
    return undefined;
  }

  /**
   * Get a ValueSet by URL
   */
  getValueSet(url: string): ValueSet | undefined {
    const spec = this.get(url);
    if (spec && spec.type === 'ValueSet') {
      return spec.resource as ValueSet;
    }
    return undefined;
  }

  /**
   * Get a CodeSystem by URL
   */
  getCodeSystem(url: string): CodeSystem | undefined {
    const spec = this.get(url);
    if (spec && spec.type === 'CodeSystem') {
      return spec.resource as CodeSystem;
    }
    return undefined;
  }

  /**
   * Check if a spec exists
   */
  has(urlOrName: string): boolean {
    const url = this.urlIndex.get(urlOrName) || urlOrName;
    return this.specs.has(url);
  }

  /**
   * Get all URLs for a specific resource type
   */
  getUrlsForType(type: SpecType): string[] {
    return Array.from(this.typeIndex.get(type) || []);
  }

  /**
   * Get all StructureDefinition URLs
   */
  getAllStructureDefinitions(): string[] {
    return this.getUrlsForType('StructureDefinition');
  }

  /**
   * Get all ValueSet URLs
   */
  getAllValueSets(): string[] {
    return this.getUrlsForType('ValueSet');
  }

  /**
   * Get all CodeSystem URLs
   */
  getAllCodeSystems(): string[] {
    return this.getUrlsForType('CodeSystem');
  }

  /**
   * Get all profile URLs for a given resource type
   */
  getProfilesForType(resourceType: string): string[] {
    return Array.from(this.profileIndex.get(resourceType) || []);
  }

  /**
   * Get a profile by its canonical URL (with optional version)
   */
  getProfile(canonicalUrl: string): StructureDefinition | undefined {
    // Handle versioned URLs (e.g., "http://example.org/Profile|1.0.0")
    const [url, version] = canonicalUrl.split('|');

    const sd = this.getStructureDefinition(url);
    if (!sd) {
      return undefined;
    }

    // If version specified, check it matches
    if (version && sd.version !== version) {
      return undefined;
    }

    return sd;
  }

  /**
   * Check if a URL is a profile (constraint on a base type)
   */
  isProfile(url: string): boolean {
    const sd = this.getStructureDefinition(url);
    return sd?.derivation === 'constraint';
  }

  /**
   * Get the total number of loaded specs
   */
  get size(): number {
    return this.specs.size;
  }

  /**
   * Get stats about loaded specs
   */
  getStats(): { structureDefinitions: number; valueSets: number; codeSystems: number; total: number } {
    return {
      structureDefinitions: this.typeIndex.get('StructureDefinition')?.size || 0,
      valueSets: this.typeIndex.get('ValueSet')?.size || 0,
      codeSystems: this.typeIndex.get('CodeSystem')?.size || 0,
      total: this.specs.size,
    };
  }

  /**
   * Clear all loaded specs
   */
  clear(): void {
    this.specs.clear();
    this.urlIndex.clear();
    this.typeIndex.clear();
    this.profileIndex.clear();
    this.cache.clear();
    this.initialized = false;
  }

  /**
   * Check if a resource is a valid spec type
   */
  private isValidSpec(resource: unknown): resource is StructureDefinition | ValueSet | CodeSystem {
    if (!resource || typeof resource !== 'object') {
      return false;
    }

    const res = resource as Record<string, unknown>;
    const validTypes = ['StructureDefinition', 'ValueSet', 'CodeSystem'];
    return validTypes.includes(res.resourceType as string) && typeof res.url === 'string';
  }
}

// Cache registries by version
const registryByVersion = new Map<FhirVersion, SpecRegistry>();

/**
 * Get the default SpecRegistry instance for a specific FHIR version
 */
export function getDefaultRegistry(version: FhirVersion = 'R4'): SpecRegistry {
  let registry = registryByVersion.get(version);
  if (!registry) {
    registry = new SpecRegistry({ fhirVersion: version });
    registryByVersion.set(version, registry);
  }
  return registry;
}

/**
 * Initialize the default registry (loads bundled specs)
 */
export async function initializeDefaultRegistry(version: FhirVersion = 'R4'): Promise<SpecRegistry> {
  const registry = getDefaultRegistry(version);
  await registry.initialize();
  return registry;
}

/**
 * Check if specs are available for a specific FHIR version
 */
export async function areSpecsAvailable(version: FhirVersion): Promise<boolean> {
  const specsPath = await getDefaultSpecsPath(version);
  return specsPath !== null;
}

/**
 * Get the installed specs package name for a version, if any
 */
export function getSpecsPackageName(version: FhirVersion): string {
  return SPECS_PACKAGE_NAMES[version];
}
