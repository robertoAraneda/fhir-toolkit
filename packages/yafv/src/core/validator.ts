/**
 * FhirValidator - Main validator class
 *
 * Validates FHIR resources against StructureDefinitions using:
 * - Structural validation (cardinality, required fields)
 * - Type validation (primitives, complex types)
 * - Constraint validation (FHIRPath expressions)
 * - Terminology validation (ValueSet bindings)
 */

import type {
  FhirResource,
  OperationOutcome,
  OperationOutcomeIssue,
  ValidationOptions,
  ValidationContext,
  StructureDefinition,
  ElementDefinition,
  IssueSeverity,
  IssueCode,
} from './types.js';
import { SpecRegistry, getDefaultRegistry, type FhirVersion } from './spec-registry.js';
import { validatePrimitiveType, isPrimitiveType } from '../validators/primitive-types.js';
import { evaluateConstraint } from '../validators/fhirpath-evaluator.js';
import {
  validateCodingAgainstBinding,
  validateCodeableConceptAgainstBinding,
  validateCodeAgainstBinding,
  bindingStrengthToSeverity,
} from '../validators/terminology-validator.js';
import { TerminologyService } from '../validators/terminology-service.js';
import {
  validateSlicing,
  type SliceDefinition,
} from '../validators/slicing-validator.js';
import { validateExtension } from '../validators/extension-validator.js';
import { validateGlobalInvariants } from '../validators/invariant-validator.js';

// Re-export FhirVersion for convenience
export type { FhirVersion };

export interface ValidatorOptions {
  /** Custom SpecRegistry instance (uses default if not provided) */
  registry?: SpecRegistry;
  /** Default validation options */
  defaultOptions?: ValidationOptions;
  /** FHIR version (default: R4) */
  fhirVersion?: FhirVersion;
  /** External terminology server URL (e.g., https://tx.fhir.org/r4) */
  terminologyServer?: string;
  /** Terminology service timeout in milliseconds (default: 10000) */
  terminologyTimeout?: number;
  /** Terminology cache TTL in milliseconds (default: 3600000 = 1 hour) */
  terminologyCacheTTL?: number;
  /** Terminology cache max size (default: 1000) */
  terminologyCacheSize?: number;
}

export class FhirValidator {
  private registry: SpecRegistry;
  private defaultOptions: ValidationOptions;
  private initialized = false;
  private terminologyService?: TerminologyService;
  private fhirVersion: FhirVersion;

  constructor(options: ValidatorOptions = {}) {
    this.fhirVersion = options.fhirVersion || 'R4';
    this.registry = options.registry || getDefaultRegistry(this.fhirVersion);
    this.defaultOptions = {
      level: 'full',
      includeWarnings: true,
      failFast: false,
      ...options.defaultOptions,
    };

    // Create terminology service if configured
    if (options.terminologyServer) {
      this.terminologyService = new TerminologyService({
        baseUrl: options.terminologyServer,
        timeout: options.terminologyTimeout,
        cacheTTL: options.terminologyCacheTTL,
        cacheSize: options.terminologyCacheSize,
      });
    }
  }

  /**
   * Get the FHIR version configured for this validator
   */
  getFhirVersion(): FhirVersion {
    return this.fhirVersion;
  }

  /**
   * Get terminology service cache statistics
   */
  getTerminologyCacheStats(): { size: number; maxSize: number } | undefined {
    return this.terminologyService?.getCacheStats();
  }

  /**
   * Clear terminology service cache
   */
  clearTerminologyCache(): void {
    this.terminologyService?.clearCache();
  }

  /**
   * Initialize the validator (loads bundled specs if not already loaded)
   */
  async initialize(): Promise<void> {
    if (this.initialized) {
      return;
    }

    await this.registry.initialize();
    this.initialized = true;
  }

  /**
   * Validate a FHIR resource
   */
  async validate(
    resource: FhirResource,
    options?: ValidationOptions
  ): Promise<OperationOutcome> {
    // Ensure initialized
    if (!this.initialized) {
      await this.initialize();
    }

    const mergedOptions = { ...this.defaultOptions, ...options };
    const issues: OperationOutcomeIssue[] = [];

    // Basic structure check
    if (!resource || typeof resource !== 'object') {
      return this.createOutcome([
        this.createIssue('error', 'invalid', 'Resource must be a non-null object'),
      ]);
    }

    // Check for resourceType
    if (!resource.resourceType) {
      return this.createOutcome([
        this.createIssue('error', 'required', 'Resource must have a resourceType'),
      ]);
    }

    // Get the StructureDefinition for this resource type
    const profileUrl = mergedOptions.profile || this.getBaseProfileUrl(resource.resourceType);
    const structureDefinition = this.registry.getStructureDefinition(profileUrl);

    if (!structureDefinition) {
      return this.createOutcome([
        this.createIssue(
          'error',
          'not-supported',
          `No StructureDefinition found for ${profileUrl}`,
          resource.resourceType
        ),
      ]);
    }

    // Create validation context
    const context: ValidationContext = {
      rootResource: resource,
      data: resource,
      path: resource.resourceType,
    };

    // Run validations based on level
    if (mergedOptions.level === 'structural' || mergedOptions.level === 'full') {
      const structuralIssues = await this.validateStructure(
        resource,
        structureDefinition,
        context,
        mergedOptions
      );
      issues.push(...structuralIssues);

      // Validate global FHIR invariants (data-driven)
      // These apply to ALL elements regardless of profile (e.g., ele-1)
      const invariantIssues = validateGlobalInvariants(
        resource,
        resource.resourceType
      );
      issues.push(...invariantIssues);
    }

    if (mergedOptions.level === 'constraints' || mergedOptions.level === 'full') {
      const constraintIssues = await this.validateConstraints(
        resource,
        structureDefinition,
        context,
        mergedOptions
      );
      issues.push(...constraintIssues);
    }

    if (mergedOptions.level === 'terminology' || mergedOptions.level === 'full') {
      const terminologyIssues = await this.validateTerminology(
        resource,
        structureDefinition,
        context,
        mergedOptions
      );
      issues.push(...terminologyIssues);
    }

    // Validate against profiles specified in meta.profile
    if (mergedOptions.level === 'full' && resource.meta?.profile) {
      const profileIssues = await this.validateProfiles(
        resource,
        context,
        mergedOptions
      );
      issues.push(...profileIssues);
    }

    // Validate mustSupport elements if enabled
    if (mergedOptions.validateMustSupport && resource.meta?.profile) {
      const mustSupportIssues = this.validateMustSupport(
        resource,
        context
      );
      issues.push(...mustSupportIssues);
    }

    // Filter warnings if not included
    const filteredIssues = mergedOptions.includeWarnings
      ? issues
      : issues.filter((i) => i.severity !== 'warning' && i.severity !== 'information');

    // Deduplicate issues (same path + same message without profile prefix)
    const deduplicatedIssues = this.deduplicateIssues(filteredIssues);

    // If no issues, add a success informational issue
    if (deduplicatedIssues.length === 0) {
      deduplicatedIssues.push(
        this.createIssue(
          'information',
          'informational',
          'Validation successful',
          resource.resourceType
        )
      );
    }

    return this.createOutcome(deduplicatedIssues);
  }

  /**
   * Deduplicate issues by path and normalized message
   * When the same issue appears from both base definition and profile,
   * keep only the profile version (more specific)
   */
  private deduplicateIssues(issues: OperationOutcomeIssue[]): OperationOutcomeIssue[] {
    const seen = new Map<string, OperationOutcomeIssue>();

    for (const issue of issues) {
      // Create a key based on path and normalized message (without profile prefix)
      const path = issue.expression?.join(',') || '';
      const normalizedMessage = (issue.diagnostics || '')
        .replace(/^\[Profile: [^\]]+\] /, ''); // Remove profile prefix for comparison

      const key = `${issue.severity}|${issue.code}|${path}|${normalizedMessage}`;

      // If we haven't seen this issue, or if this one has a profile prefix (more specific), keep it
      const existing = seen.get(key);
      if (!existing) {
        seen.set(key, issue);
      } else if (issue.diagnostics?.startsWith('[Profile:') && !existing.diagnostics?.startsWith('[Profile:')) {
        // Prefer the profile-specific version
        seen.set(key, issue);
      }
      // Otherwise keep the existing one (first profile-specific wins)
    }

    return Array.from(seen.values());
  }

  /**
   * Validate multiple resources
   */
  async validateAll(
    resources: FhirResource[],
    options?: ValidationOptions
  ): Promise<Map<number, OperationOutcome>> {
    const results = new Map<number, OperationOutcome>();

    for (let i = 0; i < resources.length; i++) {
      results.set(i, await this.validate(resources[i], options));
    }

    return results;
  }

  /**
   * Check if a resource is valid (convenience method)
   */
  async isValid(resource: FhirResource, options?: ValidationOptions): Promise<boolean> {
    const outcome = await this.validate(resource, options);
    return !outcome.issue.some((i) => i.severity === 'error' || i.severity === 'fatal');
  }

  /**
   * Get the SpecRegistry instance
   */
  getRegistry(): SpecRegistry {
    return this.registry;
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
   * @param options - Optional loading options (httpTimeout, registryUrl, etc.)
   * @returns Number of resources loaded (for backward compatibility)
   *
   * @example
   * ```typescript
   * // From local directory
   * await validator.loadIG('./path/to/ig/package');
   *
   * // From .tgz file
   * await validator.loadIG('./hl7.fhir.cl.clcore-1.8.5.tgz');
   *
   * // From URL
   * await validator.loadIG('https://packages.fhir.org/hl7.fhir.cl.clcore/1.8.5');
   *
   * // From FHIR package registry
   * await validator.loadIG('hl7.fhir.cl.clcore@1.8.5');
   *
   * // Latest version from registry
   * await validator.loadIG('hl7.fhir.cl.clcore');
   * ```
   */
  async loadIG(source: string, options?: {
    /** Timeout for HTTP requests in milliseconds (default: 30000) */
    httpTimeout?: number;
    /** Custom headers for HTTP requests */
    httpHeaders?: Record<string, string>;
    /** FHIR package registry URL (default: https://packages.fhir.org) */
    registryUrl?: string;
    /** Whether to cache downloaded packages (default: true) */
    cachePackages?: boolean;
    /** Directory for caching downloaded packages */
    cacheDir?: string;
  }): Promise<number> {
    const result = await this.registry.loadIG(source, options);
    return result.count;
  }

  /**
   * Load an Implementation Guide with full metadata
   *
   * Same as loadIG but returns package metadata in addition to count.
   *
   * @param source - Path, URL, or package identifier
   * @param options - Optional loading options
   * @returns Object with count, packageName, and packageVersion
   */
  async loadIGWithMetadata(source: string, options?: {
    httpTimeout?: number;
    httpHeaders?: Record<string, string>;
    registryUrl?: string;
    cachePackages?: boolean;
    cacheDir?: string;
  }): Promise<{ count: number; packageName?: string; packageVersion?: string }> {
    return this.registry.loadIG(source, options);
  }

  /**
   * Get available versions of a package from the FHIR registry
   *
   * @param packageName - Package name (e.g., 'hl7.fhir.cl.clcore')
   * @returns Array of available versions (sorted descending)
   */
  async listPackageVersions(packageName: string): Promise<string[]> {
    return this.registry.listPackageVersions(packageName);
  }

  /**
   * Get the latest version of a package from the FHIR registry
   *
   * @param packageName - Package name (e.g., 'hl7.fhir.cl.clcore')
   * @returns The latest version string
   */
  async getLatestPackageVersion(packageName: string): Promise<string> {
    return this.registry.getLatestPackageVersion(packageName);
  }

  // ============================================================================
  // Private validation methods
  // ============================================================================

  /**
   * Validate structural aspects (cardinality, required fields, unknown elements)
   */
  private async validateStructure(
    data: any,
    structureDefinition: StructureDefinition,
    context: ValidationContext,
    options: ValidationOptions
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    if (!structureDefinition.snapshot?.element) {
      return issues;
    }

    const elements = structureDefinition.snapshot.element;
    const rootElement = elements[0];

    // Build slicing information from the snapshot
    const slicingInfo = this.buildSlicingInfo(elements);

    // Validate each element in the StructureDefinition
    for (const element of elements) {
      // Skip the root element itself
      if (element.path === rootElement.path) {
        continue;
      }

      // Skip slice definitions and their child elements - they are validated via slicing validation
      // Check if element ID contains ":" which indicates it's part of a slice
      const isSliceRelated = element.sliceName || (element.id && element.id.includes(':'));
      if (isSliceRelated) {
        continue;
      }
      // Check if this element has slicing defined
      if (element.slicing && slicingInfo.has(element.path)) {
        // Validate slicing for this element
        const slicingIssues = await this.validateSlicedElement(
          data,
          element,
          slicingInfo.get(element.path)!,
          context,
          options
        );
        issues.push(...slicingIssues);
      } else {
        // Regular element validation
        const elementIssues = await this.validateElement(data, element, context, options);
        issues.push(...elementIssues);
      }

      if (options.failFast && issues.some((i) => i.severity === 'error')) {
        break;
      }
    }

    // Check for unknown elements (elements not in the StructureDefinition)
    const unknownIssues = this.checkUnknownElements(data, elements, context);
    issues.push(...unknownIssues);

    return issues;
  }

  /**
   * Build slicing information from snapshot elements
   * Returns a map of base path -> { slicing definition, slice definitions }
   */
  private buildSlicingInfo(
    elements: ElementDefinition[]
  ): Map<string, { slicing: ElementDefinition; slices: SliceDefinition[] }> {
    const slicingInfo = new Map<string, { slicing: ElementDefinition; slices: SliceDefinition[] }>();

    // First pass: find slicing definitions and slice root elements
    for (const element of elements) {
      // Find elements that define slicing
      if (element.slicing) {
        slicingInfo.set(element.path, {
          slicing: element,
          slices: [],
        });
      }

      // Find slice definitions (elements with sliceName)
      if (element.sliceName) {
        // Extract base path (e.g., "Patient.name" from "Patient.name:NombreOficial")
        const basePath = element.path;

        // Find the parent slicing definition
        const info = slicingInfo.get(basePath);
        if (info) {
          info.slices.push({
            name: element.sliceName,
            element: element,
            min: element.min ?? 0,
            max: element.max ?? '*',
            childElements: [],
          });
        }
      }
    }

    // Second pass: collect child elements for each slice
    for (const element of elements) {
      if (element.id && element.id.includes(':')) {
        // This is a slice-related element. Find which slice it belongs to.
        // e.g., "Patient.name:NombreOficial.use" belongs to slice "NombreOficial"
        const idParts = element.id.split(':');
        if (idParts.length >= 2) {
          // Extract slice name from ID (e.g., "NombreOficial.use" -> "NombreOficial")
          const afterColon = idParts[1];
          const sliceName = afterColon.split('.')[0];

          // Find the slice in slicingInfo
          for (const [, info] of slicingInfo) {
            const slice = info.slices.find(s => s.name === sliceName);
            if (slice && slice.childElements && element.id !== slice.element.id) {
              slice.childElements.push(element);
            }
          }
        }
      }
    }

    return slicingInfo;
  }

  /**
   * Validate an element that has slicing defined
   */
  private async validateSlicedElement(
    data: any,
    element: ElementDefinition,
    slicingInfo: { slicing: ElementDefinition; slices: SliceDefinition[] },
    context: ValidationContext,
    options: ValidationOptions
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];
    const { slicing, slices } = slicingInfo;

    // Get the value at this path
    const value = this.getValueAtPath(data, element.path, context.path);

    // If no value and element is not required, skip
    if (value === undefined || value === null) {
      // Check overall cardinality
      if (element.min && element.min > 0) {
        issues.push(
          this.createIssue(
            'error',
            'required',
            `Element '${element.path}' has cardinality 0 but minimum is ${element.min}`,
            element.path,
            context
          )
        );
      }
      return issues;
    }

    // Ensure value is an array for slicing validation
    const values = Array.isArray(value) ? value : [value];

    // First, check overall cardinality of the element
    const totalCount = values.length;
    if (element.min !== undefined && totalCount < element.min) {
      issues.push(
        this.createIssue(
          'error',
          'required',
          `Element '${element.path}' has cardinality ${totalCount} but minimum is ${element.min}`,
          element.path,
          context
        )
      );
    }
    if (element.max && element.max !== '*') {
      const maxNum = parseInt(element.max, 10);
      if (totalCount > maxNum) {
        issues.push(
          this.createIssue(
            'error',
            'value',
            `Element '${element.path}' has cardinality ${totalCount} but maximum is ${element.max}`,
            element.path,
            context
          )
        );
      }
    }

    // Validate slicing
    if (slicing.slicing && slices.length > 0) {
      const slicingResult = validateSlicing(
        values,
        slicing.slicing,
        slices,
        element.path,
        this.registry
      );
      issues.push(...slicingResult.issues);

      // Now validate each value against the constraints of its matched slice
      const sliceMatches = this.matchValuesToSlices(values, slices, slicing.slicing);

      for (let i = 0; i < values.length; i++) {
        const v = values[i];
        const matchedSlice = sliceMatches.get(i);

        if (matchedSlice) {
          // Validate the value against the slice's child element constraints
          const sliceIssues = await this.validateValueAgainstSlice(
            v,
            matchedSlice,
            `${element.path}[${i}]`,
            context,
            options
          );
          issues.push(...sliceIssues);
        }
        // For unmatched values in open slicing, validate against base constraints
        // (already handled by overall cardinality check)
      }
    }

    return issues;
  }

  /**
   * Match values to their corresponding slices
   */
  private matchValuesToSlices(
    values: any[],
    slices: SliceDefinition[],
    slicing: any
  ): Map<number, SliceDefinition> {
    const matches = new Map<number, SliceDefinition>();
    const discriminators = slicing.discriminator || [];

    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      for (const slice of slices) {
        if (this.valueMatchesSlice(value, slice, discriminators)) {
          matches.set(i, slice);
          break;
        }
      }
    }

    return matches;
  }

  /**
   * Check if a value matches a slice based on discriminators
   */
  private valueMatchesSlice(
    value: any,
    slice: SliceDefinition,
    discriminators: any[]
  ): boolean {
    if (discriminators.length === 0) {
      return false;
    }

    for (const discriminator of discriminators) {
      if (!this.valueMatchesDiscriminator(value, slice, discriminator)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Check if a value matches a specific discriminator
   */
  private valueMatchesDiscriminator(
    value: any,
    slice: SliceDefinition,
    discriminator: any
  ): boolean {
    const { type, path } = discriminator;
    const discriminatorValue = this.getNestedValue(value, path);

    switch (type) {
      case 'value': {
        // Look for fixed[x] or pattern[x] in the slice's element or child elements
        const fixedValue = this.getFixedValueFromSlice(slice, path);
        if (fixedValue !== undefined) {
          return this.deepEquals(discriminatorValue, fixedValue);
        }
        return false;
      }
      case 'exists': {
        const exists = discriminatorValue !== undefined && discriminatorValue !== null;
        // For exists discriminator, we need to check if the slice expects the value to exist or not
        return exists;
      }
      case 'pattern': {
        const pattern = this.getPatternFromSlice(slice, path);
        if (pattern !== undefined) {
          return this.matchesPattern(discriminatorValue, pattern);
        }
        return false;
      }
      case 'type': {
        const types = slice.element.type || [];
        for (const t of types) {
          if (this.valueMatchesType(value, t.code)) {
            return true;
          }
        }
        return false;
      }
      default:
        return false;
    }
  }

  /**
   * Get fixed value from slice element for a given path
   */
  private getFixedValueFromSlice(slice: SliceDefinition, path: string): any {
    const element = slice.element;

    // Special handling for extension slicing by URL
    // When discriminator is {type: 'value', path: 'url'} for extensions,
    // the expected URL comes from type[0].profile[0], not from fixedUri
    if (path === 'url' && element.type && element.type.length > 0) {
      const type = element.type[0];
      if (type.code === 'Extension' && type.profile && type.profile.length > 0) {
        return type.profile[0];
      }
    }

    // Handle direct fixed values on the element
    if (path === '$this' || path === '') {
      // Check for fixed[x] properties
      for (const key of Object.keys(element)) {
        if (key.startsWith('fixed')) {
          return (element as any)[key];
        }
      }
      // Check for pattern values
      for (const key of Object.keys(element)) {
        if (key.startsWith('pattern')) {
          return (element as any)[key];
        }
      }
    }

    // For nested paths, look in child elements
    // e.g., path="use" should find "Patient.name:NombreOficial.use"
    if (slice.childElements && slice.childElements.length > 0) {
      for (const childElement of slice.childElements) {
        // Check if this child element matches the discriminator path
        // The child path should end with the discriminator path
        const childPath = childElement.path;
        const childPathParts = childPath.split('.');
        const lastPart = childPathParts[childPathParts.length - 1];

        if (lastPart === path || childPath.endsWith('.' + path)) {
          // Found matching element, get its fixed/pattern value
          for (const key of Object.keys(childElement)) {
            if (key.startsWith('fixed')) {
              return (childElement as any)[key];
            }
            if (key.startsWith('pattern')) {
              return (childElement as any)[key];
            }
          }
        }
      }
    }

    return undefined;
  }

  /**
   * Get pattern value from slice element for a given path
   */
  private getPatternFromSlice(slice: SliceDefinition, path: string): any {
    const element = slice.element;

    if (path === '$this' || path === '') {
      for (const key of Object.keys(element)) {
        if (key.startsWith('pattern')) {
          return (element as any)[key];
        }
      }
    }

    return undefined;
  }

  /**
   * Check if a value matches a pattern
   */
  private matchesPattern(value: any, pattern: any): boolean {
    if (pattern === undefined || pattern === null) {
      return true;
    }
    if (value === undefined || value === null) {
      return false;
    }
    if (typeof pattern !== 'object') {
      return value === pattern;
    }
    if (Array.isArray(pattern)) {
      if (!Array.isArray(value)) {
        return false;
      }
      for (const patternItem of pattern) {
        const hasMatch = value.some((v: any) => this.matchesPattern(v, patternItem));
        if (!hasMatch) {
          return false;
        }
      }
      return true;
    }
    // Object: all keys in pattern must match
    for (const key of Object.keys(pattern)) {
      if (!this.matchesPattern(value[key], pattern[key])) {
        return false;
      }
    }
    return true;
  }

  /**
   * Check if a value matches a FHIR type
   */
  private valueMatchesType(value: any, typeCode: string): boolean {
    if (value === undefined || value === null) {
      return false;
    }
    if (typeof value === 'object' && value.resourceType) {
      return value.resourceType === typeCode;
    }
    // Primitive type checking
    switch (typeCode) {
      case 'boolean':
        return typeof value === 'boolean';
      case 'integer':
      case 'positiveInt':
      case 'unsignedInt':
        return typeof value === 'number' && Number.isInteger(value);
      case 'decimal':
        return typeof value === 'number';
      case 'string':
      case 'code':
      case 'id':
      case 'markdown':
      case 'uri':
      case 'url':
      case 'canonical':
      case 'oid':
      case 'uuid':
        return typeof value === 'string';
      case 'date':
      case 'dateTime':
      case 'instant':
      case 'time':
        // Date/time types are strings in JSON representation
        return typeof value === 'string';
      case 'base64Binary':
        return typeof value === 'string';
      default:
        return typeof value === 'object';
    }
  }

  /**
   * Deep equality comparison
   */
  private deepEquals(a: any, b: any): boolean {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (typeof a !== 'object' || a === null || b === null) return false;
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      return a.every((item, i) => this.deepEquals(item, b[i]));
    }
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((key) => this.deepEquals(a[key], b[key]));
  }

  /**
   * Get a nested value from an object using a path
   */
  private getNestedValue(obj: any, path: string): any {
    if (!obj || !path || path === '$this') {
      return obj;
    }
    const parts = path.split('.');
    let current = obj;
    for (const part of parts) {
      if (current === undefined || current === null) {
        return undefined;
      }
      current = current[part];
    }
    return current;
  }

  /**
   * Validate a value against a slice's constraints (child elements)
   */
  private async validateValueAgainstSlice(
    _value: any,
    _slice: SliceDefinition,
    _basePath: string,
    _context: ValidationContext,
    _options: ValidationOptions
  ): Promise<OperationOutcomeIssue[]> {
    // For now, we don't recursively validate nested elements within slices
    // This would require building a mini-StructureDefinition from the slice
    // The main fix is that we don't apply constraints from other slices

    // In the future, this could validate:
    // - Child element cardinality within the slice
    // - Fixed values within the slice
    // - Extensions specific to the slice

    return [];
  }

  /**
   * Validate a single element against its ElementDefinition
   */
  private async validateElement(
    data: any,
    element: ElementDefinition,
    context: ValidationContext,
    _options: ValidationOptions
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    // Get the value at this element's path
    const pathParts = element.path.split('.');
    const fieldName = pathParts[pathParts.length - 1];

    // Handle polymorphic types (e.g., value[x])
    if (fieldName.endsWith('[x]')) {
      // For nested choice types (depth > 2), we need to navigate to the parent first
      if (pathParts.length > 2) {
        const parentPath = pathParts.slice(0, -1).join('.');
        const parentValue = this.getValueAtPath(data, parentPath, context.path);

        // If parent doesn't exist, skip validation of this nested element
        if (parentValue === undefined || parentValue === null) {
          return issues;
        }

        // If parent is an array, validate each item's choice type
        if (Array.isArray(parentValue)) {
          for (let i = 0; i < parentValue.length; i++) {
            const item = parentValue[i];
            if (item && typeof item === 'object') {
              const itemPath = `${parentPath}[${i}]`;
              const choiceIssues = await this.validateChoiceType(
                item,
                element,
                { ...context, path: itemPath }
              );
              // Adjust error paths to include array index
              for (const issue of choiceIssues) {
                if (issue.expression) {
                  issue.expression = issue.expression.map((p) =>
                    p.replace(element.path, `${itemPath}.${fieldName}`)
                  );
                }
              }
              issues.push(...choiceIssues);
            }
          }
          return issues;
        } else {
          // Parent is a single object
          const choiceIssues = await this.validateChoiceType(parentValue, element, context);
          issues.push(...choiceIssues);
          return issues;
        }
      } else {
        // Top-level choice type
        const choiceIssues = await this.validateChoiceType(data, element, context);
        issues.push(...choiceIssues);
        return issues;
      }
    }

    // For nested elements (depth > 2), check if parent exists first
    // e.g., for Patient.communication.language, check if Patient.communication exists
    if (pathParts.length > 2) {
      const parentPath = pathParts.slice(0, -1).join('.');
      const parentValue = this.getValueAtPath(data, parentPath, context.path);

      // If parent doesn't exist, skip validation of this nested element
      if (parentValue === undefined || parentValue === null) {
        return issues;
      }

      // If parent is an array, we need to validate each item's nested element
      if (Array.isArray(parentValue)) {
        for (let i = 0; i < parentValue.length; i++) {
          const item = parentValue[i];
          if (item && typeof item === 'object') {
            const nestedValue = item[fieldName];
            const itemPath = `${parentPath}[${i}].${fieldName}`;

            // Check cardinality
            const cardinalityIssues = this.validateCardinality(nestedValue, element, context);
            // Adjust the path to include array index
            for (const issue of cardinalityIssues) {
              if (issue.expression) {
                issue.expression = [itemPath];
              }
            }
            issues.push(...cardinalityIssues);

            // Check if a scalar value is provided for an array field
            if (nestedValue !== undefined && nestedValue !== null && !Array.isArray(nestedValue)) {
              const isArrayField = element.max === '*' || (element.max !== undefined && parseInt(element.max, 10) > 1);
              if (isArrayField) {
                issues.push(
                  this.createIssue(
                    'error',
                    'structure',
                    `Element '${itemPath}' is an array field (0..${element.max}) but received a scalar value. Arrays must use JSON array syntax.`,
                    itemPath
                  )
                );
              }
            }

            // Validate type if value exists
            if (nestedValue !== undefined && nestedValue !== null && element.type && element.type.length > 0) {
              const values = Array.isArray(nestedValue) ? nestedValue : [nestedValue];

              for (let j = 0; j < values.length; j++) {
                const v = values[j];
                const valuePath = Array.isArray(nestedValue) ? `${itemPath}[${j}]` : itemPath;

                // Try each allowed type
                let typeMatched = false;
                let collectedTypeIssues: OperationOutcomeIssue[] = [];
                for (const type of element.type) {
                  const typeIssues = await this.validateValueAgainstType(v, type.code, valuePath);
                  if (typeIssues.length === 0) {
                    typeMatched = true;
                    break;
                  }
                  // For Extension type, if we have a valid url, the type matches
                  // but there may be content validation issues
                  if (type.code === 'Extension' && v && typeof v === 'object' && typeof v.url === 'string') {
                    typeMatched = true;
                    collectedTypeIssues = typeIssues;
                    break;
                  }
                }

                // Add collected issues from type validation (e.g., extension content errors)
                if (collectedTypeIssues.length > 0) {
                  issues.push(...collectedTypeIssues);
                }

                if (!typeMatched && element.type.length > 0) {
                  const expectedTypes = element.type.map(t => t.code).join(' | ');
                  issues.push(
                    this.createIssue(
                      'error',
                      'value',
                      `Value at '${valuePath}' does not match expected type(s): ${expectedTypes}`,
                      valuePath
                    )
                  );
                }
              }
            }
          }
        }
        return issues;
      }
    }

    // Navigate to the parent and get the value
    const value = this.getValueAtPath(data, element.path, context.path);

    // Check cardinality
    const cardinalityIssues = this.validateCardinality(value, element, context);
    issues.push(...cardinalityIssues);

    // If value exists, validate its type
    if (value !== undefined && element.type && element.type.length > 0) {
      const typeIssues = await this.validateType(value, element, context);
      issues.push(...typeIssues);
    }

    // Validate fixed/pattern values if defined
    if (value !== undefined && value !== null) {
      const fixedPatternIssues = this.validateFixedAndPattern(value, element, context);
      issues.push(...fixedPatternIssues);
    }

    return issues;
  }

  /**
   * Validate cardinality (min/max)
   */
  private validateCardinality(
    value: any,
    element: ElementDefinition,
    context: ValidationContext
  ): OperationOutcomeIssue[] {
    const issues: OperationOutcomeIssue[] = [];
    const { min, max, path } = element;

    // Determine actual count
    let count = 0;
    if (value !== undefined && value !== null) {
      count = Array.isArray(value) ? value.length : 1;
    }

    // Check if a scalar value is provided for an array field (max = "*" or max > 1)
    if (value !== undefined && value !== null && !Array.isArray(value)) {
      const isArrayField = max === '*' || (max !== undefined && parseInt(max, 10) > 1);
      if (isArrayField) {
        issues.push(
          this.createIssue(
            'error',
            'structure',
            `Element '${path}' is an array field (0..${max}) but received a scalar value. Arrays must use JSON array syntax.`,
            path,
            { ...context, path, parentPath: context.path }
          )
        );
      }
    }

    // Check minimum
    if (count < min) {
      issues.push(
        this.createIssue(
          'error',
          'required',
          `Element '${path}' has cardinality ${count} but minimum is ${min}`,
          path,
          { ...context, path, parentPath: context.path }
        )
      );
    }

    // Check maximum
    if (max !== '*') {
      const maxNum = parseInt(max, 10);
      if (count > maxNum) {
        issues.push(
          this.createIssue(
            'error',
            'value',
            `Element '${path}' has cardinality ${count} but maximum is ${max}`,
            path,
            { ...context, path, parentPath: context.path }
          )
        );
      }
    }

    return issues;
  }

  /**
   * Validate type (primitive or complex)
   */
  private async validateType(
    value: any,
    element: ElementDefinition,
    _context: ValidationContext
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    // Handle arrays
    const values = Array.isArray(value) ? value : [value];
    const isArray = Array.isArray(value);

    for (let i = 0; i < values.length; i++) {
      const v = values[i];
      if (v === null || v === undefined) {
        continue;
      }

      // Build path with array index if applicable
      const valuePath = isArray ? `${element.path}[${i}]` : element.path;

      // Get the expected type(s)
      const types = element.type || [];
      let typeMatched = false;
      let lastTypeIssues: OperationOutcomeIssue[] = [];

      let collectedTypeIssues: OperationOutcomeIssue[] = [];
      for (const type of types) {
        const typeIssues = await this.validateValueAgainstType(
          v,
          type.code,
          valuePath,
          {
            ..._context,
            path: valuePath,
            expectedTypes: [type.code],
            parentPath: _context.path,
          }
        );
        if (typeIssues.length === 0) {
          typeMatched = true;
          break;
        }
        // For Extension type, if we have a valid url, the type matches
        // but there may be content validation issues
        if (type.code === 'Extension' && v && typeof v === 'object' && typeof v.url === 'string') {
          typeMatched = true;
          collectedTypeIssues = typeIssues;
          break;
        }
        lastTypeIssues = typeIssues;
      }

      // Add collected issues from type validation (e.g., extension content errors)
      if (collectedTypeIssues.length > 0) {
        issues.push(...collectedTypeIssues);
      }

      if (!typeMatched && types.length > 0) {
        // If we have specific issues from the type validation, use those instead of a generic error
        if (lastTypeIssues.length > 0) {
          issues.push(...lastTypeIssues);
        } else {
          const expectedTypes = types.map((t) => t.code);
          issues.push(
            this.createIssue(
              'error',
              'value',
              `Value at '${valuePath}' does not match expected type(s)`,
              valuePath,
              {
                ..._context,
                path: valuePath,
                expectedTypes,
                parentPath: _context.path,
              }
            )
          );
        }
      }
    }

    return issues;
  }

  /**
   * Validate a value against a specific FHIR type
   */
  private async validateValueAgainstType(
    value: any,
    typeCode: string,
    path: string,
    context?: ValidationContext
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    // Handle FHIRPath System types (used in some StructureDefinitions)
    // These map to FHIR primitive types
    if (typeCode.startsWith('http://hl7.org/fhirpath/System.')) {
      const systemType = typeCode.replace('http://hl7.org/fhirpath/System.', '');
      // Map FHIRPath system types to FHIR primitive types
      const fhirType = systemType.toLowerCase() === 'string' ? 'string' : systemType.toLowerCase();
      const primitiveResult = this.validatePrimitiveValue(value, fhirType, path);
      if (primitiveResult !== null) {
        if (!primitiveResult.valid) {
          issues.push(
            this.createIssue(
              'error',
              'value',
              primitiveResult.message || `Invalid ${fhirType} value`,
              path,
              context
            )
          );
        }
      }
      return issues;
    }

    // Primitive type validation
    const primitiveResult = this.validatePrimitiveValue(value, typeCode, path);
    if (primitiveResult !== null) {
      if (!primitiveResult.valid) {
        issues.push(
          this.createIssue(
            'error',
            'value',
            primitiveResult.message || `Invalid ${typeCode} value`,
            path,
            context
          )
        );
      }
      return issues;
    }

    // Complex type validation - recursively validate against the type's StructureDefinition
    const complexTypeIssues = await this.validateComplexType(value, typeCode, path);
    issues.push(...complexTypeIssues);

    return issues;
  }

  /**
   * Validate a complex type (HumanName, Address, CodeableConcept, etc.)
   */
  private async validateComplexType(
    value: any,
    typeCode: string,
    path: string
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    // Skip BackboneElement - these are validated via nested element validation
    if (typeCode === 'BackboneElement' || typeCode === 'Element') {
      return issues;
    }

    // Special handling for Extension type
    // Extensions have recursive structure and special fields that need simplified validation
    if (typeCode === 'Extension') {
      // Just validate that url is present (required)
      if (!value.url) {
        issues.push(
          this.createIssue(
            'error',
            'required',
            `Extension at '${path}' must have a url`,
            path
          )
        );
        return issues;
      }
      // Use the full extension validator to validate structure against definition
      const extResult = validateExtension(value, path, this.registry, false);
      issues.push(...extResult.issues);
      return issues;
    }

    // Skip if value is not an object
    if (typeof value !== 'object' || value === null) {
      return issues;
    }

    // Get the StructureDefinition for this complex type
    const typeSD = this.registry.getStructureDefinition(typeCode);
    if (!typeSD) {
      // Type not found - could be a resource type or unknown
      return issues;
    }

    // Only validate complex-type kinds (not resources or primitives)
    if (typeSD.kind !== 'complex-type') {
      return issues;
    }

    // Get elements from snapshot
    const elements = typeSD.snapshot?.element;
    if (!elements || elements.length === 0) {
      return issues;
    }

    // Validate each element in the complex type
    for (const element of elements) {
      // Skip root element
      if (element.path === typeCode) {
        continue;
      }

      // Get field name (e.g., "HumanName.family" -> "family")
      const pathParts = element.path.split('.');
      const fieldName = pathParts[pathParts.length - 1];

      // Skip nested elements (depth > 2) - we'll handle them recursively
      if (pathParts.length > 2) {
        continue;
      }

      // Skip choice types for now
      if (fieldName.endsWith('[x]')) {
        continue;
      }

      // Get the value for this field
      const fieldValue = value[fieldName];

      // Check cardinality
      let count = 0;
      if (fieldValue !== undefined && fieldValue !== null) {
        count = Array.isArray(fieldValue) ? fieldValue.length : 1;
      }

      // Check if a scalar value is provided for an array field (max = "*" or max > 1)
      if (fieldValue !== undefined && fieldValue !== null && !Array.isArray(fieldValue)) {
        const isArrayField = element.max === '*' || (element.max !== undefined && parseInt(element.max, 10) > 1);
        if (isArrayField) {
          issues.push(
            this.createIssue(
              'error',
              'structure',
              `Element '${path}.${fieldName}' is an array field (0..${element.max}) but received a scalar value. Arrays must use JSON array syntax.`,
              `${path}.${fieldName}`
            )
          );
          // Skip type validation since the structural error is the primary issue
          continue;
        }
      }

      // Check for empty arrays - FHIR requires that if an element is present, it must have content
      if (Array.isArray(fieldValue) && fieldValue.length === 0) {
        issues.push(
          this.createIssue(
            'error',
            'structure',
            `Element '${path}.${fieldName}' is present but empty. In FHIR, elements must have content if present.`,
            `${path}.${fieldName}`
          )
        );
        continue;
      }

      // Check minimum cardinality
      if (count < element.min) {
        issues.push(
          this.createIssue(
            'error',
            'required',
            `Element '${path}.${fieldName}' is required but missing`,
            `${path}.${fieldName}`
          )
        );
      }

      // Check maximum cardinality
      if (element.max !== '*') {
        const maxNum = parseInt(element.max, 10);
        if (count > maxNum) {
          issues.push(
            this.createIssue(
              'error',
              'value',
              `Element '${path}.${fieldName}' has ${count} values but maximum is ${element.max}`,
              `${path}.${fieldName}`
            )
          );
        }
      }

      // Validate type if value exists
      if (fieldValue !== undefined && fieldValue !== null && element.type && element.type.length > 0) {
        const values = Array.isArray(fieldValue) ? fieldValue : [fieldValue];

        for (let i = 0; i < values.length; i++) {
          const v = values[i];
          const valuePath = Array.isArray(fieldValue) ? `${path}.${fieldName}[${i}]` : `${path}.${fieldName}`;

          // Try each allowed type
          let typeMatched = false;
          let collectedTypeIssues: OperationOutcomeIssue[] = [];
          for (const type of element.type) {
            const typeIssues = await this.validateValueAgainstType(v, type.code, valuePath);
            if (typeIssues.length === 0) {
              typeMatched = true;
              break;
            }
            // For Extension type, if we have a valid url, the type matches
            // but there may be content validation issues
            if (type.code === 'Extension' && v && typeof v === 'object' && typeof v.url === 'string') {
              typeMatched = true;
              collectedTypeIssues = typeIssues;
              break;
            }
          }

          // Add collected issues from type validation (e.g., extension content errors)
          if (collectedTypeIssues.length > 0) {
            issues.push(...collectedTypeIssues);
          }

          if (!typeMatched && element.type.length > 0) {
            const expectedTypes = element.type.map(t => t.code).join(' | ');
            issues.push(
              this.createIssue(
                'error',
                'value',
                `Value at '${valuePath}' does not match expected type(s): ${expectedTypes}`,
                valuePath
              )
            );
          }
        }
      }
    }

    // Check for unknown elements
    const allowedFields = new Set<string>();
    for (const element of elements) {
      const pathParts = element.path.split('.');
      if (pathParts.length === 2) {
        let fieldName = pathParts[1];
        if (fieldName.endsWith('[x]')) {
          fieldName = fieldName.replace('[x]', '');
        }
        allowedFields.add(fieldName);
      }
    }

    for (const key of Object.keys(value)) {
      if (key === 'extension' || key === 'modifierExtension' || key === 'id') {
        continue;
      }

      // Check for primitive extensions (_element syntax)
      if (key.startsWith('_')) {
        const baseElement = key.substring(1);
        // Primitive extension is valid if the base element is allowed and is a primitive type
        if (allowedFields.has(baseElement)) {
          // Validate the primitive extension structure
          const primitiveExtIssues = this.validatePrimitiveExtension(
            value[key],
            key,
            `${path}.${key}`
          );
          issues.push(...primitiveExtIssues);
        } else {
          issues.push(
            this.createIssue(
              'error',
              'structure',
              `Invalid primitive extension '${key}' - base element '${baseElement}' not found in ${typeCode}`,
              `${path}.${key}`
            )
          );
        }
        continue;
      }

      let isKnown = allowedFields.has(key);
      if (!isKnown) {
        // Check for choice type variants
        for (const allowed of allowedFields) {
          if (key.startsWith(allowed) && key.length > allowed.length) {
            isKnown = true;
            break;
          }
        }
      }

      if (!isKnown) {
        issues.push(
          this.createIssue(
            'error',
            'structure',
            `Unknown element '${key}' in ${typeCode}`,
            `${path}.${key}`
          )
        );
      }
    }

    return issues;
  }

  /**
   * Validate a choice type element (e.g., value[x])
   */
  private async validateChoiceType(
    data: any,
    element: ElementDefinition,
    context: ValidationContext
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    // Get the base name without [x] (e.g., "value" from "value[x]")
    const pathParts = element.path.split('.');
    const choiceField = pathParts[pathParts.length - 1];
    const baseName = choiceField.replace('[x]', '');

    // Get allowed types for this choice
    const allowedTypes = element.type || [];
    if (allowedTypes.length === 0) {
      return issues;
    }

    // Find which variant is present in the data
    const presentVariants: { key: string; typeCode: string; value: any }[] = [];

    for (const type of allowedTypes) {
      // Build the actual field name (e.g., "valueQuantity", "valueString")
      const typeName = type.code.charAt(0).toUpperCase() + type.code.slice(1);
      const fieldName = baseName + typeName;

      if (data[fieldName] !== undefined) {
        presentVariants.push({
          key: fieldName,
          typeCode: type.code,
          value: data[fieldName],
        });
      }
    }

    // Check cardinality
    if (presentVariants.length === 0 && element.min > 0) {
      const typeNames = allowedTypes.map(t => baseName + t.code.charAt(0).toUpperCase() + t.code.slice(1)).join(', ');
      issues.push(
        this.createIssue(
          'error',
          'required',
          `Choice element '${element.path}' is required. Expected one of: ${typeNames}`,
          element.path
        )
      );
    }

    // Check that only one variant is present
    if (presentVariants.length > 1) {
      const variantNames = presentVariants.map(v => v.key).join(', ');
      issues.push(
        this.createIssue(
          'error',
          'structure',
          `Multiple variants of choice type '${element.path}' are present: ${variantNames}. Only one is allowed.`,
          element.path
        )
      );
    }

    // Validate the present variant
    if (presentVariants.length === 1) {
      const variant = presentVariants[0];
      const variantPath = `${context.path}.${variant.key}`;

      // Validate the value against its type
      const typeIssues = await this.validateValueAgainstType(variant.value, variant.typeCode, variantPath);
      issues.push(...typeIssues);
    }

    return issues;
  }

  /**
   * Validate primitive types using the dedicated primitive-types module
   * Returns: true if valid, false if invalid, null if not a primitive type
   */
  private validatePrimitiveValue(value: any, typeCode: string, _path: string): { valid: boolean; message?: string } | null {
    // Check if it's a primitive type
    if (!isPrimitiveType(typeCode)) {
      return null;
    }

    // Use the dedicated primitive type validator
    const result = validatePrimitiveType(value, typeCode);
    return result;
  }

  /**
   * Validate FHIRPath constraints
   */
  private async validateConstraints(
    data: any,
    structureDefinition: StructureDefinition,
    context: ValidationContext,
    options: ValidationOptions
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    if (!structureDefinition.snapshot?.element) {
      return issues;
    }

    // Track evaluated constraints to avoid duplicates
    const evaluatedConstraints = new Set<string>();

    // Iterate through all elements and their constraints
    for (const element of structureDefinition.snapshot.element) {
      if (!element.constraint || element.constraint.length === 0) {
        continue;
      }

      // Get the path to evaluate the constraint at
      const elementPath = element.path;
      const pathParts = elementPath.split('.');

      // Determine where to evaluate the constraint
      let contextData = data;
      let contextPath = pathParts[0]; // Start with resourceType

      // Navigate to the element's context (skip the root)
      if (pathParts.length > 1) {
        // For constraints on nested elements, navigate to the parent
        const relativePath = pathParts.slice(1, -1);
        for (const part of relativePath) {
          if (contextData === undefined || contextData === null) {
            break;
          }
          contextData = contextData[part];
          contextPath = `${contextPath}.${part}`;
        }
      }

      // Check if the element exists in the data before evaluating constraints
      // Skip constraints for elements that don't exist
      if (pathParts.length > 1) {
        const elementValue = this.getValueAtPath(data, elementPath, context.path);
        if (elementValue === undefined || elementValue === null) {
          // Element doesn't exist, skip its constraints
          continue;
        }
      }

      // Evaluate each constraint
      for (const constraint of element.constraint) {
        // Skip if no FHIRPath expression
        if (!constraint.expression) {
          continue;
        }

        // Skip if already evaluated (constraints can appear in multiple elements)
        const constraintKey = `${constraint.key}@${elementPath}`;
        if (evaluatedConstraints.has(constraintKey)) {
          continue;
        }
        evaluatedConstraints.add(constraintKey);

        // Skip certain constraints that are not applicable to JSON validation
        // (e.g., ele-1 which checks for @value in XML)
        if (this.shouldSkipConstraint(constraint.key)) {
          continue;
        }

        // Determine if this constraint should be evaluated per-element or on the whole resource
        // Constraints from Extension type (like ext-1) need to be evaluated on each extension instance
        const isExtensionConstraint = constraint.source === 'http://hl7.org/fhir/StructureDefinition/Extension' ||
          (element.type && element.type.some(t => t.code === 'Extension'));

        let constraintPassed = true;
        let constraintError: string | undefined;

        if (isExtensionConstraint && pathParts.length > 1) {
          // Get the actual extension values and evaluate constraint on each
          const elementValue = this.getValueAtPath(data, elementPath, context.path);
          const values = Array.isArray(elementValue) ? elementValue : (elementValue ? [elementValue] : []);

          for (const extValue of values) {
            // Add resourceType hint for fhirpath.js to resolve value[x] correctly
            const extWithType = { ...extValue, resourceType: 'Extension' };
            const result = evaluateConstraint(constraint.expression, extWithType, {
              resource: extWithType,
              rootResource: context.rootResource,
            });
            if (!result.passed) {
              constraintPassed = false;
              constraintError = result.error;
              break;
            }
          }
        } else {
          // Evaluate the constraint on the resource root context
          const result = evaluateConstraint(constraint.expression, data, {
            resource: data,
            rootResource: context.rootResource,
          });
          constraintPassed = result.passed;
          constraintError = result.error;
        }

        if (!constraintPassed) {
          // Determine severity
          const severity: IssueSeverity = constraint.severity === 'warning' ? 'warning' : 'error';

          issues.push(
            this.createIssue(
              severity,
              'invariant',
              `Constraint ${constraint.key} failed: ${constraint.human}${constraintError ? ` (${constraintError})` : ''}`,
              elementPath
            )
          );

          if (options.failFast && severity === 'error') {
            return issues;
          }
        }
      }
    }

    return issues;
  }

  /**
   * Check if a constraint should be skipped
   */
  private shouldSkipConstraint(_key: string): boolean {
    // Currently no constraints are skipped
    // ele-1 applies to JSON too (elements must have value or children)
    return false;
  }

  /**
   * Validate against profiles specified in meta.profile
   */
  private async validateProfiles(
    data: any,
    context: ValidationContext,
    options: ValidationOptions
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    const profiles = data.meta?.profile;
    if (!profiles || !Array.isArray(profiles)) {
      return issues;
    }

    for (const profileUrl of profiles) {
      // Get the profile StructureDefinition
      const profile = this.registry.getProfile(profileUrl);

      if (!profile) {
        issues.push(
          this.createIssue(
            'warning',
            'not-found',
            `Profile '${profileUrl}' not found in registry`,
            'meta.profile'
          )
        );
        continue;
      }

      // Verify the profile applies to this resource type
      if (profile.type !== data.resourceType) {
        issues.push(
          this.createIssue(
            'error',
            'invalid',
            `Profile '${profileUrl}' is for ${profile.type} but resource is ${data.resourceType}`,
            'meta.profile'
          )
        );
        continue;
      }

      // Validate structure against the profile
      const structuralIssues = await this.validateStructure(data, profile, context, options);
      // Tag issues with profile URL
      for (const issue of structuralIssues) {
        issue.diagnostics = `[Profile: ${profile.name || profileUrl}] ${issue.diagnostics}`;
      }
      issues.push(...structuralIssues);

      // Validate constraints from the profile
      const constraintIssues = await this.validateConstraints(data, profile, context, options);
      for (const issue of constraintIssues) {
        issue.diagnostics = `[Profile: ${profile.name || profileUrl}] ${issue.diagnostics}`;
      }
      issues.push(...constraintIssues);

      // Validate terminology bindings from the profile
      const terminologyIssues = await this.validateTerminology(data, profile, context, options);
      for (const issue of terminologyIssues) {
        issue.diagnostics = `[Profile: ${profile.name || profileUrl}] ${issue.diagnostics}`;
      }
      issues.push(...terminologyIssues);
    }

    return issues;
  }

  /**
   * Validate terminology bindings
   */
  private async validateTerminology(
    data: any,
    structureDefinition: StructureDefinition,
    context: ValidationContext,
    options: ValidationOptions
  ): Promise<OperationOutcomeIssue[]> {
    const issues: OperationOutcomeIssue[] = [];

    if (!structureDefinition.snapshot?.element) {
      return issues;
    }

    // Use the instance terminology service (configured in constructor)
    const terminologyService = this.terminologyService;

    // Find elements with bindings
    for (const element of structureDefinition.snapshot.element) {
      if (!element.binding || !element.binding.valueSet) {
        continue;
      }

      // Get the value at this path
      const value = this.getValueAtPath(data, element.path, context.path);
      if (value === undefined || value === null) {
        continue;
      }

      // Determine the type of the element
      const types = element.type || [];
      const typeCode = types[0]?.code;

      // Handle arrays
      const values = Array.isArray(value) ? value : [value];

      for (let i = 0; i < values.length; i++) {
        const v = values[i];
        if (v === null || v === undefined) {
          continue;
        }

        const valuePath = Array.isArray(value) ? `${element.path}[${i}]` : element.path;
        let result;

        // Validate based on type
        if (typeCode === 'CodeableConcept') {
          result = await validateCodeableConceptAgainstBinding(v, element.binding, this.registry, terminologyService);
        } else if (typeCode === 'Coding') {
          result = await validateCodingAgainstBinding(v, element.binding, this.registry, terminologyService);
        } else if (typeCode === 'code' || typeCode === 'string' || typeCode === 'uri') {
          result = await validateCodeAgainstBinding(v, element.binding, this.registry, terminologyService);
        } else {
          // Skip unknown types
          continue;
        }

        if (!result.valid || result.message) {
          const severity = bindingStrengthToSeverity(element.binding.strength || 'example');

          // Only add if severity is included in options
          if (severity === 'error' || (severity === 'warning' && options.includeWarnings)) {
            issues.push(
              this.createIssue(
                severity,
                'code-invalid',
                result.message || `Value does not match binding`,
                valuePath
              )
            );

            if (options.failFast && severity === 'error') {
              return issues;
            }
          }
        }

        // Check for display warnings (always a warning, not an error)
        if (result.displayWarning && options.includeWarnings) {
          issues.push(
            this.createIssue(
              'warning',
              'code-invalid',
              result.displayWarning,
              valuePath
            )
          );
        }
      }
    }

    return issues;
  }

  /**
   * Validate mustSupport elements from profiles
   *
   * Per FHIR spec, mustSupport indicates that:
   * - Producers MUST be capable of providing the element
   * - Consumers MUST be capable of processing the element
   *
   * This validation generates warnings for mustSupport elements that are not present,
   * which is useful for data producers to ensure they include all expected data.
   *
   * @see https://www.hl7.org/fhir/conformance-rules.html#mustSupport
   */
  private validateMustSupport(
    data: any,
    context: ValidationContext
  ): OperationOutcomeIssue[] {
    const issues: OperationOutcomeIssue[] = [];

    const profiles = data.meta?.profile;
    if (!profiles || !Array.isArray(profiles)) {
      return issues;
    }

    for (const profileUrl of profiles) {
      const profile = this.registry.getProfile(profileUrl);

      if (!profile || !profile.snapshot?.element) {
        continue;
      }

      // Verify the profile applies to this resource type
      if (profile.type !== data.resourceType) {
        continue;
      }

      // Get all mustSupport elements from the profile
      const mustSupportElements = this.getMustSupportElements(profile);

      // Check each mustSupport element
      for (const element of mustSupportElements) {
        const value = this.getValueAtPath(data, element.path, context.path);

        // Skip if element is required (min > 0) - cardinality validation will catch this
        if (element.min > 0) {
          continue;
        }

        // Check if the value is missing
        const isMissing = value === undefined || value === null ||
          (Array.isArray(value) && value.length === 0);

        if (isMissing) {
          issues.push(
            this.createIssue(
              'warning',
              'business-rule',
              `[Profile: ${profile.name || profileUrl}] Element '${element.path}' is marked as mustSupport but is not present. ` +
              `MustSupport elements should be included if the data is available.`,
              element.path
            )
          );
        }
      }
    }

    return issues;
  }

  /**
   * Get all mustSupport elements from a StructureDefinition
   * Returns only "leaf" elements that should be validated (not parent elements)
   */
  private getMustSupportElements(
    structureDefinition: StructureDefinition
  ): ElementDefinition[] {
    if (!structureDefinition.snapshot?.element) {
      return [];
    }

    const elements = structureDefinition.snapshot.element;
    const mustSupportElements: ElementDefinition[] = [];

    // Track parent paths to avoid duplicates
    const processedPaths = new Set<string>();

    for (const element of elements) {
      // Skip root element
      if (element.path === structureDefinition.type) {
        continue;
      }

      // Only include elements explicitly marked with mustSupport
      if (!element.mustSupport) {
        continue;
      }

      // Skip slice definitions (they have a sliceName)
      if (element.sliceName) {
        continue;
      }

      // Skip if we've already processed a child of this element
      // (we want to validate the most specific element)
      const isParentOfProcessed = Array.from(processedPaths).some(
        path => path.startsWith(element.path + '.')
      );
      if (isParentOfProcessed) {
        continue;
      }

      // Remove any parent elements that this element is more specific than
      for (const path of processedPaths) {
        if (element.path.startsWith(path + '.')) {
          processedPaths.delete(path);
          // Remove from mustSupportElements array
          const idx = mustSupportElements.findIndex(e => e.path === path);
          if (idx >= 0) {
            mustSupportElements.splice(idx, 1);
          }
        }
      }

      processedPaths.add(element.path);
      mustSupportElements.push(element);
    }

    return mustSupportElements;
  }

  /**
   * Validate fixed[x] and pattern[x] values
   *
   * Per FHIR spec:
   * - fixed[x]: The value must be exactly the specified value (deep equality)
   * - pattern[x]: The value must contain at least the specified value (can have more)
   *
   * @see https://www.hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.fixed_x_
   * @see https://www.hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.pattern_x_
   */
  private validateFixedAndPattern(
    value: any,
    element: ElementDefinition,
    context: ValidationContext
  ): OperationOutcomeIssue[] {
    const issues: OperationOutcomeIssue[] = [];

    // Get fixed value (could be fixed, fixedString, fixedCode, fixedCodeableConcept, etc.)
    const fixedValue = this.getFixedValue(element);
    if (fixedValue !== undefined) {
      const values = Array.isArray(value) ? value : [value];
      for (let i = 0; i < values.length; i++) {
        const v = values[i];
        const valuePath = Array.isArray(value) ? `${element.path}[${i}]` : element.path;

        if (!this.deepEquals(v, fixedValue)) {
          issues.push(
            this.createIssue(
              'error',
              'value',
              `Value at '${valuePath}' must be exactly '${this.formatValue(fixedValue)}' (fixed value constraint)`,
              valuePath,
              context
            )
          );
        }
      }
    }

    // Get pattern value (could be pattern, patternString, patternCodeableConcept, etc.)
    const patternValue = this.getPatternValue(element);
    if (patternValue !== undefined) {
      const values = Array.isArray(value) ? value : [value];
      for (let i = 0; i < values.length; i++) {
        const v = values[i];
        const valuePath = Array.isArray(value) ? `${element.path}[${i}]` : element.path;

        if (!this.matchesPattern(v, patternValue)) {
          issues.push(
            this.createIssue(
              'error',
              'value',
              `Value at '${valuePath}' does not match required pattern: ${this.formatValue(patternValue)}`,
              valuePath,
              context
            )
          );
        }
      }
    }

    return issues;
  }

  /**
   * Get the fixed value from an element definition
   * Handles both generic 'fixed' and typed 'fixed[x]' variants
   */
  private getFixedValue(element: ElementDefinition): any {
    // Check for generic 'fixed' property
    if (element.fixed !== undefined) {
      return element.fixed;
    }

    // Check for typed fixed[x] variants
    for (const key of Object.keys(element)) {
      if (key.startsWith('fixed') && key !== 'fixed') {
        return (element as any)[key];
      }
    }

    return undefined;
  }

  /**
   * Get the pattern value from an element definition
   * Handles both generic 'pattern' and typed 'pattern[x]' variants
   */
  private getPatternValue(element: ElementDefinition): any {
    // Check for generic 'pattern' property
    if (element.pattern !== undefined) {
      return element.pattern;
    }

    // Check for typed pattern[x] variants
    for (const key of Object.keys(element)) {
      if (key.startsWith('pattern') && key !== 'pattern') {
        return (element as any)[key];
      }
    }

    return undefined;
  }

  /**
   * Format a value for display in error messages
   */
  private formatValue(value: any): string {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    try {
      const json = JSON.stringify(value);
      // Truncate long values
      return json.length > 100 ? json.substring(0, 100) + '...' : json;
    } catch {
      return String(value);
    }
  }

  /**
   * Check for unknown elements in the resource
   */
  private checkUnknownElements(
    data: any,
    elements: ElementDefinition[],
    context: ValidationContext
  ): OperationOutcomeIssue[] {
    const issues: OperationOutcomeIssue[] = [];

    // Build a set of allowed element names
    const allowedElements = new Set<string>();
    for (const element of elements) {
      const pathParts = element.path.split('.');
      if (pathParts.length === 2) {
        let fieldName = pathParts[1];
        // Handle choice types
        if (fieldName.endsWith('[x]')) {
          fieldName = fieldName.replace('[x]', '');
        }
        allowedElements.add(fieldName);
      }
    }

    // Check each key in the data
    for (const key of Object.keys(data)) {
      // Skip resourceType, meta, and extension elements
      if (key === 'resourceType' || key === 'meta' || key === 'extension' || key === 'modifierExtension') {
        continue;
      }

      // Check for primitive extensions (_element syntax)
      if (key.startsWith('_')) {
        const baseElement = key.substring(1);
        // Primitive extension is valid if the base element is allowed
        if (allowedElements.has(baseElement)) {
          // Validate the primitive extension structure
          const primitiveExtIssues = this.validatePrimitiveExtension(
            data[key],
            key,
            `${context.path}.${key}`
          );
          issues.push(...primitiveExtIssues);
        } else {
          issues.push(
            this.createIssue(
              'error',
              'structure',
              `Invalid primitive extension '${key}' - base element '${baseElement}' not found`,
              `${context.path}.${key}`
            )
          );
        }
        continue;
      }

      // Check if this is a known element or a choice type variant
      let isKnown = allowedElements.has(key);
      if (!isKnown) {
        // Check if it might be a choice type (e.g., valueString for value[x])
        for (const allowed of allowedElements) {
          if (key.startsWith(allowed) && key.length > allowed.length) {
            isKnown = true;
            break;
          }
        }
      }

      if (!isKnown) {
        issues.push(
          this.createIssue(
            'error',
            'structure',
            `Unknown element '${key}'`,
            `${context.path}.${key}`
          )
        );
      }
    }

    return issues;
  }

  /**
   * Get value at a path relative to the data
   *
   * This function handles arrays in the path. For example, for path "Patient.identifier.type"
   * where identifier is an array, it returns all type values from each identifier element.
   */
  private getValueAtPath(data: any, elementPath: string, _contextPath: string): any {
    const pathParts = elementPath.split('.');

    // Remove the root element (resourceType) from the path
    const relativeParts = pathParts.slice(1);

    return this.navigatePath(data, relativeParts);
  }

  /**
   * Navigate a path, handling arrays along the way
   * Returns the value(s) at the final path segment
   */
  private navigatePath(data: any, pathParts: string[]): any {
    if (data === undefined || data === null) {
      return undefined;
    }

    if (pathParts.length === 0) {
      return data;
    }

    const [currentPart, ...remainingParts] = pathParts;

    // If data is an array, navigate into each element and collect results
    if (Array.isArray(data)) {
      const results: any[] = [];
      for (const item of data) {
        if (item !== null && item !== undefined) {
          const value = this.navigatePath(item, [currentPart, ...remainingParts]);
          if (value !== undefined) {
            if (Array.isArray(value)) {
              results.push(...value);
            } else {
              results.push(value);
            }
          }
        }
      }
      return results.length > 0 ? results : undefined;
    }

    // Handle choice types (e.g., occurrence[x] -> occurrenceDateTime, valueQuantity, etc.)
    // Only do this for the final path segment to avoid incorrect expansion in nested paths
    let nextValue = data[currentPart];
    if (nextValue === undefined && currentPart.endsWith('[x]') && remainingParts.length === 0) {
      const baseName = currentPart.replace('[x]', '');
      // Look for any variant of the choice type
      for (const key of Object.keys(data)) {
        if (key.startsWith(baseName) && key.length > baseName.length) {
          // Check if the character after baseName is uppercase (indicating a type suffix)
          const suffix = key.substring(baseName.length);
          if (suffix[0] === suffix[0].toUpperCase()) {
            nextValue = data[key];
            break;
          }
        }
      }
    }

    if (remainingParts.length === 0) {
      return nextValue;
    }

    return this.navigatePath(nextValue, remainingParts);
  }

  /**
   * Validate a primitive extension (_element syntax)
   *
   * FHIR allows extensions on primitive elements using the _elementName syntax.
   * For example, _city contains extensions for the city string element.
   *
   * The structure should be:
   * - For single values: { id?: string, extension?: Extension[] }
   * - For arrays: Array<{ id?: string, extension?: Extension[] } | null>
   *
   * @see https://www.hl7.org/fhir/json.html#primitive
   */
  private validatePrimitiveExtension(
    value: any,
    elementName: string,
    path: string
  ): OperationOutcomeIssue[] {
    const issues: OperationOutcomeIssue[] = [];

    if (value === null || value === undefined) {
      return issues;
    }

    // Handle array case (when the base element is an array)
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        if (item !== null && item !== undefined) {
          const itemIssues = this.validatePrimitiveExtensionObject(
            item,
            elementName,
            `${path}[${i}]`
          );
          issues.push(...itemIssues);
        }
      }
      return issues;
    }

    // Handle single object case
    if (typeof value === 'object') {
      return this.validatePrimitiveExtensionObject(value, elementName, path);
    }

    // Invalid type
    issues.push(
      this.createIssue(
        'error',
        'structure',
        `Primitive extension '${elementName}' must be an object or array, got ${typeof value}`,
        path
      )
    );

    return issues;
  }

  /**
   * Validate a single primitive extension object
   */
  private validatePrimitiveExtensionObject(
    value: any,
    elementName: string,
    path: string
  ): OperationOutcomeIssue[] {
    const issues: OperationOutcomeIssue[] = [];

    if (typeof value !== 'object' || value === null) {
      issues.push(
        this.createIssue(
          'error',
          'structure',
          `Primitive extension '${elementName}' element must be an object`,
          path
        )
      );
      return issues;
    }

    // Valid keys in a primitive extension object
    const validKeys = new Set(['id', 'extension']);

    for (const key of Object.keys(value)) {
      if (!validKeys.has(key)) {
        issues.push(
          this.createIssue(
            'error',
            'structure',
            `Invalid property '${key}' in primitive extension '${elementName}'. Only 'id' and 'extension' are allowed`,
            `${path}.${key}`
          )
        );
      }
    }

    // Validate id if present
    if (value.id !== undefined && typeof value.id !== 'string') {
      issues.push(
        this.createIssue(
          'error',
          'value',
          `'id' in primitive extension must be a string`,
          `${path}.id`
        )
      );
    }

    // Validate extensions if present
    if (value.extension !== undefined) {
      if (!Array.isArray(value.extension)) {
        issues.push(
          this.createIssue(
            'error',
            'structure',
            `'extension' in primitive extension must be an array`,
            `${path}.extension`
          )
        );
      } else {
        // Validate each extension
        for (let i = 0; i < value.extension.length; i++) {
          const ext = value.extension[i];
          const extIssues = this.validateExtensionStructure(ext, `${path}.extension[${i}]`);
          issues.push(...extIssues);
        }
      }
    }

    return issues;
  }

  /**
   * Validate the basic structure of an extension
   */
  private validateExtensionStructure(
    extension: any,
    path: string
  ): OperationOutcomeIssue[] {
    const issues: OperationOutcomeIssue[] = [];

    if (typeof extension !== 'object' || extension === null) {
      issues.push(
        this.createIssue(
          'error',
          'structure',
          `Extension must be an object`,
          path
        )
      );
      return issues;
    }

    // url is required
    if (!extension.url) {
      issues.push(
        this.createIssue(
          'error',
          'required',
          `Extension must have a 'url' property`,
          path
        )
      );
      return issues;
    } else if (typeof extension.url !== 'string') {
      issues.push(
        this.createIssue(
          'error',
          'value',
          `Extension 'url' must be a string`,
          `${path}.url`
        )
      );
      return issues;
    }

    // Use the full extension validator to check structure against definition
    const extResult = validateExtension(extension, path, this.registry, false);
    issues.push(...extResult.issues);

    return issues;
  }

  /**
   * Get the base profile URL for a resource type
   */
  private getBaseProfileUrl(resourceType: string): string {
    return `http://hl7.org/fhir/StructureDefinition/${resourceType}`;
  }

  /**
   * Create an OperationOutcome from issues
   */
  private createOutcome(issues: OperationOutcomeIssue[]): OperationOutcome {
    return {
      resourceType: 'OperationOutcome',
      issue: issues,
    };
  }

  /**
   * Create an OperationOutcomeIssue
   */
  private createIssue(
    severity: IssueSeverity,
    code: IssueCode,
    message: string,
    path?: string,
    context?: ValidationContext
  ): OperationOutcomeIssue {
    const issue: OperationOutcomeIssue = {
      severity,
      code,
      diagnostics: this.enrichDiagnostics(message, context),
    };

    if (path) {
      issue.expression = [path];
    }

    // Add location if available
    if (context?.location && (context.location.line !== undefined || context.location.column !== undefined)) {
      const line = context.location.line ?? 0;
      const column = context.location.column ?? 0;
      issue.location = [`line ${line}, column ${column}`];
    }

    // Add structured details
    issue.details = {
      text: message,
      coding: [{
        system: 'http://hl7.org/fhir/issue-type',
        code,
      }],
    };

    return issue;
  }

  /**
   * Enrich diagnostics message with additional context
   */
  private enrichDiagnostics(message: string, context?: ValidationContext): string {
    if (!context) {
      return message;
    }

    const parts: string[] = [message];

    // Add parent context
    if (context.parentPath) {
      parts.push(`(in ${context.parentPath})`);
    }

    // Add expected types
    if (context.expectedTypes && context.expectedTypes.length > 0) {
      parts.push(`Expected type(s): ${context.expectedTypes.join(' | ')}`);
    }

    return parts.join(' ');
  }
}

// ============================================================================
// Convenience functions
// ============================================================================

let defaultValidator: FhirValidator | null = null;

/**
 * Get the default FhirValidator instance
 */
export function getDefaultValidator(): FhirValidator {
  if (!defaultValidator) {
    defaultValidator = new FhirValidator();
  }
  return defaultValidator;
}

let defaultValidatorInitialized = false;

/**
 * Validate a resource using the default validator
 */
export async function validate(
  resource: FhirResource,
  options?: ValidationOptions
): Promise<OperationOutcome> {
  const validator = getDefaultValidator();
  if (!defaultValidatorInitialized) {
    await validator.initialize();
    defaultValidatorInitialized = true;
  }
  return validator.validate(resource, options);
}

/**
 * Check if a resource is valid using the default validator
 */
export async function isValid(
  resource: FhirResource,
  options?: ValidationOptions
): Promise<boolean> {
  const validator = getDefaultValidator();
  if (!defaultValidatorInitialized) {
    await validator.initialize();
    defaultValidatorInitialized = true;
  }
  return validator.isValid(resource, options);
}
