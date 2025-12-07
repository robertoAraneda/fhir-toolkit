/**
 * Slicing Validator
 *
 * Validates sliced elements against their discriminators.
 * Supports value, exists, pattern, type, and profile discriminators.
 */

import type {
  ElementDefinition,
  ElementDefinitionSlicing,
  ElementDefinitionSlicingDiscriminator,
  OperationOutcomeIssue,
  IssueSeverity,
} from '../core/types.js';
import { SpecRegistry } from '../core/spec-registry.js';
import { evaluate } from './fhirpath-evaluator.js';

export interface SliceValidationResult {
  /** Whether the slicing validation passed */
  valid: boolean;
  /** Issues found during validation */
  issues: OperationOutcomeIssue[];
}

export interface SliceDefinition {
  /** The slice name */
  name: string;
  /** The element definition for this slice */
  element: ElementDefinition;
  /** Minimum cardinality for this slice */
  min: number;
  /** Maximum cardinality for this slice */
  max: string;
  /** Child elements of this slice (for discriminator matching) */
  childElements?: ElementDefinition[];
}

/**
 * Validate an array of values against slicing rules
 */
export function validateSlicing(
  values: any[],
  slicing: ElementDefinitionSlicing,
  slices: SliceDefinition[],
  basePath: string,
  registry: SpecRegistry
): SliceValidationResult {
  const issues: OperationOutcomeIssue[] = [];
  const sliceMatches = new Map<string, number>();

  // Initialize match counts
  for (const slice of slices) {
    sliceMatches.set(slice.name, 0);
  }

  // Track unmatched values (for closed slicing)
  const unmatchedIndices: number[] = [];

  // Match each value to slices
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    let matched = false;

    for (const slice of slices) {
      if (matchesSlice(value, slice, slicing.discriminator || [], registry)) {
        const count = sliceMatches.get(slice.name) || 0;
        sliceMatches.set(slice.name, count + 1);
        matched = true;
        break; // A value matches at most one slice
      }
    }

    if (!matched) {
      unmatchedIndices.push(i);
    }
  }

  // Check cardinality for each slice
  for (const slice of slices) {
    const count = sliceMatches.get(slice.name) || 0;

    // Check minimum
    if (count < slice.min) {
      issues.push(
        createIssue(
          'error',
          'required',
          `Slice '${slice.name}' requires at least ${slice.min} item(s) but found ${count}`,
          basePath
        )
      );
    }

    // Check maximum
    if (slice.max !== '*') {
      const maxNum = parseInt(slice.max, 10);
      if (count > maxNum) {
        issues.push(
          createIssue(
            'error',
            'value',
            `Slice '${slice.name}' allows at most ${slice.max} item(s) but found ${count}`,
            basePath
          )
        );
      }
    }
  }

  // Check for unmatched values in closed slicing
  if (slicing.rules === 'closed' && unmatchedIndices.length > 0) {
    for (const idx of unmatchedIndices) {
      issues.push(
        createIssue(
          'error',
          'structure',
          `Value at index ${idx} does not match any defined slice (slicing is closed)`,
          `${basePath}[${idx}]`
        )
      );
    }
  }

  return {
    valid: issues.filter((i) => i.severity === 'error').length === 0,
    issues,
  };
}

/**
 * Check if a value matches a slice definition
 */
function matchesSlice(
  value: any,
  slice: SliceDefinition,
  discriminators: ElementDefinitionSlicingDiscriminator[],
  registry: SpecRegistry
): boolean {
  if (discriminators.length === 0) {
    return false;
  }

  // All discriminators must match
  for (const discriminator of discriminators) {
    if (!matchesDiscriminator(value, slice, discriminator, registry)) {
      return false;
    }
  }

  return true;
}

/**
 * Check if a value matches a specific discriminator
 */
function matchesDiscriminator(
  value: any,
  slice: SliceDefinition,
  discriminator: ElementDefinitionSlicingDiscriminator,
  registry: SpecRegistry
): boolean {
  const { type, path } = discriminator;

  // Get the value at the discriminator path
  const discriminatorValue = getValueAtPath(value, path);

  switch (type) {
    case 'value':
      return matchesValueDiscriminator(discriminatorValue, slice, path);

    case 'exists':
      return matchesExistsDiscriminator(discriminatorValue, slice, path);

    case 'pattern':
      return matchesPatternDiscriminator(discriminatorValue, slice, path);

    case 'type':
      return matchesTypeDiscriminator(value, slice, path);

    case 'profile':
      return matchesProfileDiscriminator(discriminatorValue, slice, path, registry);

    default:
      // Unknown discriminator type, can't match
      return false;
  }
}

/**
 * Match value discriminator - the value must exactly match the fixed value in the slice
 */
function matchesValueDiscriminator(
  value: any,
  slice: SliceDefinition,
  path: string
): boolean {
  // Find the fixed value for this path in the slice definition (element + childElements)
  const fixed = getFixedValueForPath(slice, path);

  if (fixed === undefined) {
    return false;
  }

  return deepEquals(value, fixed);
}

/**
 * Match exists discriminator - check if the value exists or not
 */
function matchesExistsDiscriminator(
  value: any,
  slice: SliceDefinition,
  path: string
): boolean {
  // Get the cardinality for this path in the slice
  // If min > 0, the element must exist; if max = "0", it must not exist
  const exists = value !== undefined && value !== null;

  // Look for the element definition for this path
  // For now, assume if it's in the slice definition, it should exist
  return exists;
}

/**
 * Match pattern discriminator - the value must match a pattern
 */
function matchesPatternDiscriminator(
  value: any,
  slice: SliceDefinition,
  path: string
): boolean {
  // Find the pattern for this path in the slice definition (element + childElements)
  const pattern = getPatternForPath(slice, path);

  if (pattern === undefined) {
    return false;
  }

  return matchesPattern(value, pattern);
}

/**
 * Match type discriminator - check the type of the value
 */
function matchesTypeDiscriminator(
  value: any,
  slice: SliceDefinition,
  path: string
): boolean {
  // For type discriminators, check if the value's type matches
  // This is typically used with polymorphic elements

  // Get the expected types from the slice
  const types = slice.element.type || [];
  if (types.length === 0) {
    return false;
  }

  // Check if any type matches
  for (const type of types) {
    if (valueMatchesType(value, type.code)) {
      return true;
    }
  }

  return false;
}

/**
 * Match profile discriminator - check if the value conforms to a profile
 */
function matchesProfileDiscriminator(
  value: any,
  slice: SliceDefinition,
  path: string,
  registry: SpecRegistry
): boolean {
  // Get the profile URLs from the slice's type definition
  const types = slice.element.type || [];

  for (const type of types) {
    if (type.profile && type.profile.length > 0) {
      // Check if the value claims to conform to any of the profiles
      const valueProfiles = value?.meta?.profile || [];

      for (const profileUrl of type.profile) {
        if (valueProfiles.includes(profileUrl)) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * Get a value at a FHIRPath-like path
 */
function getValueAtPath(value: any, path: string): any {
  if (!value || !path) {
    return value;
  }

  // Handle special FHIRPath syntax
  if (path === '$this') {
    return value;
  }

  // Handle resolve() for references
  if (path.includes('resolve()')) {
    // For now, just return the reference without resolving
    return value;
  }

  // Split path and navigate
  const parts = path.split('.');
  let current = value;

  for (const part of parts) {
    if (current === undefined || current === null) {
      return undefined;
    }

    // Handle array indexing (e.g., coding[0])
    const match = part.match(/^(\w+)(?:\[(\d+)\])?$/);
    if (match) {
      current = current[match[1]];
      if (match[2] && Array.isArray(current)) {
        current = current[parseInt(match[2], 10)];
      }
    } else {
      current = current[part];
    }
  }

  return current;
}

/**
 * Get the fixed value for a path from a slice definition
 * This checks the element definition and its child elements for fixed/pattern values
 */
function getFixedValueForPath(slice: SliceDefinition, path: string): any {
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

  // For simple cases, the fixed value is on the element itself
  if (path === '$this' || path === '') {
    // Check for fixed[x] properties
    for (const key of Object.keys(element)) {
      if (key.startsWith('fixed')) {
        return (element as any)[key];
      }
    }
    // Check for pattern[x] properties
    for (const key of Object.keys(element)) {
      if (key.startsWith('pattern')) {
        return (element as any)[key];
      }
    }
    return undefined;
  }

  // For nested paths, look in child elements
  // e.g., path="use" should find "Patient.name:NombreOficial.use" with patternCode="official"
  if (slice.childElements && slice.childElements.length > 0) {
    for (const childElement of slice.childElements) {
      const childPath = childElement.path;
      const childPathParts = childPath.split('.');
      const lastPart = childPathParts[childPathParts.length - 1];

      if (lastPart === path || childPath.endsWith('.' + path)) {
        // Found matching element, get its fixed/pattern value
        for (const key of Object.keys(childElement)) {
          if (key.startsWith('fixed')) {
            return (childElement as any)[key];
          }
        }
        for (const key of Object.keys(childElement)) {
          if (key.startsWith('pattern')) {
            return (childElement as any)[key];
          }
        }
      }
    }
  }

  // Fallback: check if the element has a fixed object and try to access the path
  if (element.fixed && typeof element.fixed === 'object') {
    return getValueAtPath(element.fixed, path);
  }

  return undefined;
}

/**
 * Get the pattern for a path from a slice definition
 * This checks the element definition and its child elements for pattern values
 */
function getPatternForPath(slice: SliceDefinition, path: string): any {
  const element = slice.element;

  if (path === '$this' || path === '') {
    // Check for pattern[x] properties
    for (const key of Object.keys(element)) {
      if (key.startsWith('pattern')) {
        return (element as any)[key];
      }
    }
    return undefined;
  }

  // For nested paths, look in child elements
  if (slice.childElements && slice.childElements.length > 0) {
    for (const childElement of slice.childElements) {
      const childPath = childElement.path;
      const childPathParts = childPath.split('.');
      const lastPart = childPathParts[childPathParts.length - 1];

      if (lastPart === path || childPath.endsWith('.' + path)) {
        // Found matching element, get its pattern value
        for (const key of Object.keys(childElement)) {
          if (key.startsWith('pattern')) {
            return (childElement as any)[key];
          }
        }
      }
    }
  }

  // Fallback: check if the element has a pattern object and try to access the path
  if (element.pattern && typeof element.pattern === 'object') {
    return getValueAtPath(element.pattern, path);
  }

  return undefined;
}

/**
 * Check if a value matches a pattern
 * A pattern match means all properties in the pattern must be present in the value with matching values
 */
function matchesPattern(value: any, pattern: any): boolean {
  if (pattern === undefined || pattern === null) {
    return true;
  }

  if (value === undefined || value === null) {
    return false;
  }

  // Primitive comparison
  if (typeof pattern !== 'object') {
    return value === pattern;
  }

  // Array comparison
  if (Array.isArray(pattern)) {
    if (!Array.isArray(value)) {
      return false;
    }

    // Each element in pattern must have a match in value
    for (const patternItem of pattern) {
      const hasMatch = value.some((valueItem) => matchesPattern(valueItem, patternItem));
      if (!hasMatch) {
        return false;
      }
    }

    return true;
  }

  // Object comparison - all properties in pattern must match
  for (const key of Object.keys(pattern)) {
    if (!matchesPattern(value[key], pattern[key])) {
      return false;
    }
  }

  return true;
}

/**
 * Check if a value matches a FHIR type
 */
function valueMatchesType(value: any, typeCode: string): boolean {
  if (value === undefined || value === null) {
    return false;
  }

  // Check for resource type
  if (typeof value === 'object' && value.resourceType) {
    return value.resourceType === typeCode;
  }

  // Check primitive types
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
      // Complex types - check if it's an object
      return typeof value === 'object';
  }
}

/**
 * Deep equality comparison
 */
function deepEquals(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a !== 'object' || a === null || b === null) {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, i) => deepEquals(item, b[i]));
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  return keysA.every((key) => deepEquals(a[key], b[key]));
}

/**
 * Create an OperationOutcomeIssue
 */
function createIssue(
  severity: IssueSeverity,
  code: 'required' | 'value' | 'structure',
  message: string,
  path: string
): OperationOutcomeIssue {
  return {
    severity,
    code,
    diagnostics: message,
    expression: [path],
  };
}
