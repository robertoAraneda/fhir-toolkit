/**
 * Invariant Validator
 *
 * Validates universal FHIR invariants that apply to all elements,
 * independent of StructureDefinition constraints.
 *
 * These invariants are defined in the FHIR specification and must be
 * validated across ALL elements in a resource, regardless of profile.
 *
 * Design principles:
 * - Data-driven traversal (visits actual data, not schema)
 * - Extensible registry of global invariants
 * - Returns precise paths for error reporting
 *
 * Note: We implement ele-1 directly rather than using FHIRPath because
 * fhirpath.js's children() function requires type metadata (resourceType)
 * to work correctly on nested elements. Direct implementation is more
 * reliable and performant for this universal constraint.
 *
 * @see https://hl7.org/fhir/R4/elementdefinition.html#constraints
 */

import type { OperationOutcomeIssue, IssueSeverity } from '../core/types.js';

/**
 * Definition of a global FHIR invariant
 */
export interface GlobalInvariant {
  /** Unique constraint key (e.g., 'ele-1') */
  key: string;
  /** Human-readable description of the constraint */
  human: string;
  /** FHIRPath expression to evaluate */
  expression: string;
  /** Severity level when constraint fails */
  severity: IssueSeverity;
  /** Source URL of the constraint definition */
  source: string;
}

/**
 * Options for invariant validation
 */
export interface InvariantValidationOptions {
  /** Skip specific invariants by key */
  skip?: string[];
  /** Only run specific invariants (if provided, only these will run) */
  only?: string[];
}

/**
 * Registry of global FHIR invariants that apply to all elements
 *
 * These are defined in the base Element type and inherited by all FHIR elements.
 * @see https://hl7.org/fhir/R4/element.html#constraints
 */
const GLOBAL_INVARIANTS: GlobalInvariant[] = [
  {
    key: 'ele-1',
    human: 'All FHIR elements must have a @value or children',
    expression: 'hasValue() or (children().count() > id.count())',
    severity: 'error',
    source: 'http://hl7.org/fhir/StructureDefinition/Element',
  },
];

/**
 * Validate global FHIR invariants across all elements in a resource
 *
 * This function traverses the entire resource data structure and validates
 * each element against universal FHIR invariants like ele-1.
 *
 * @param data - The resource or element data to validate
 * @param basePath - The FHIRPath expression representing the current location
 * @param options - Optional configuration for which invariants to run
 * @returns Array of OperationOutcomeIssue for any violations found
 *
 * @example
 * ```typescript
 * const issues = validateGlobalInvariants(patient, 'Patient');
 * // Will detect empty objects like { valueIdentifier: {} }
 * ```
 */
export function validateGlobalInvariants(
  data: unknown,
  basePath: string,
  options?: InvariantValidationOptions
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];
  const invariantsToRun = getInvariantsToRun(options);

  traverseAndValidate(data, basePath, invariantsToRun, issues, true);

  return issues;
}

/**
 * Get the list of invariants to run based on options
 */
function getInvariantsToRun(options?: InvariantValidationOptions): GlobalInvariant[] {
  let invariants = [...GLOBAL_INVARIANTS];

  if (options?.only && options.only.length > 0) {
    invariants = invariants.filter((inv) => options.only!.includes(inv.key));
  }

  if (options?.skip && options.skip.length > 0) {
    invariants = invariants.filter((inv) => !options.skip!.includes(inv.key));
  }

  return invariants;
}

/**
 * Recursively traverse data and validate each element against invariants
 *
 * @param data - Current data element being validated
 * @param path - Current FHIRPath location
 * @param invariants - List of invariants to check
 * @param issues - Accumulator for found issues
 * @param isRoot - Whether this is the root resource level
 */
function traverseAndValidate(
  data: unknown,
  path: string,
  invariants: GlobalInvariant[],
  issues: OperationOutcomeIssue[],
  isRoot: boolean = false
): void {
  // Skip null/undefined values
  if (data === null || data === undefined) {
    return;
  }

  // Handle arrays - validate each element
  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      traverseAndValidate(item, `${path}[${index}]`, invariants, issues, false);
    });
    return;
  }

  // Handle objects (FHIR elements)
  if (typeof data === 'object') {
    // Skip invariant validation at the root resource level
    // Resources themselves don't need ele-1 check (they always have resourceType)
    if (!isRoot) {
      validateElementInvariants(data as Record<string, unknown>, path, invariants, issues);
    }

    // Recurse into child elements
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      // Skip FHIR metadata and internal fields
      if (isMetadataField(key)) {
        continue;
      }

      const childPath = `${path}.${key}`;
      traverseAndValidate(value, childPath, invariants, issues, false);
    }
    return;
  }

  // Handle primitives - validate they have actual values
  // In FHIR, empty strings '' are not valid values (violate ele-1)
  if (typeof data === 'string' && data === '') {
    const ele1Invariant = invariants.find((inv) => inv.key === 'ele-1');
    if (ele1Invariant) {
      issues.push(createInvariantIssue(ele1Invariant, path));
    }
  }
  // Note: numbers and booleans always have values (0 and false are valid)
}

/**
 * Check if a field is FHIR metadata that shouldn't be traversed for invariants
 */
function isMetadataField(key: string): boolean {
  return key === 'resourceType' || key === 'fhir_comments';
}

/**
 * Validate a single element against all applicable invariants
 */
function validateElementInvariants(
  element: Record<string, unknown>,
  path: string,
  invariants: GlobalInvariant[],
  issues: OperationOutcomeIssue[]
): void {
  for (const invariant of invariants) {
    let passed: boolean;

    // Use specialized validators for known invariants
    // This avoids fhirpath.js limitations with children() on untyped elements
    switch (invariant.key) {
      case 'ele-1':
        passed = validateEle1(element);
        break;
      default:
        // For unknown invariants, skip (could add FHIRPath fallback in future)
        continue;
    }

    if (!passed) {
      issues.push(createInvariantIssue(invariant, path));
    }
  }
}

/**
 * Validate ele-1: All FHIR elements must have a @value or children
 *
 * An element satisfies ele-1 if:
 * - It has a primitive value (handled at traversal level - primitives aren't validated)
 * - It has child properties beyond just 'id'
 *
 * An empty object {} violates this constraint.
 *
 * @see https://hl7.org/fhir/R4/element.html#ele-1
 */
function validateEle1(element: Record<string, unknown>): boolean {
  const keys = Object.keys(element);

  // Count meaningful children (excluding 'id' which doesn't count per the constraint)
  const meaningfulChildren = keys.filter((key) => key !== 'id');

  // Element must have at least one meaningful child
  return meaningfulChildren.length > 0;
}

/**
 * Create an OperationOutcomeIssue for an invariant violation
 */
function createInvariantIssue(
  invariant: GlobalInvariant,
  path: string
): OperationOutcomeIssue {
  return {
    severity: invariant.severity,
    code: 'invariant',
    diagnostics: `Constraint ${invariant.key} failed: ${invariant.human}`,
    expression: [path],
  };
}

/**
 * Get the list of all registered global invariants
 * Useful for documentation and testing
 */
export function getGlobalInvariants(): readonly GlobalInvariant[] {
  return GLOBAL_INVARIANTS;
}

/**
 * Check if a specific invariant key is registered
 */
export function hasInvariant(key: string): boolean {
  return GLOBAL_INVARIANTS.some((inv) => inv.key === key);
}
