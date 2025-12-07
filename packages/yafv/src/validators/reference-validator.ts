/**
 * Reference Validator
 *
 * Validates FHIR references including:
 * - Reference format validation
 * - Target type validation
 * - Identifier references
 */

import type {
  OperationOutcomeIssue,
  IssueSeverity,
  ElementDefinitionType,
} from '../core/types.js';

export interface Reference {
  reference?: string;
  type?: string;
  identifier?: {
    system?: string;
    value?: string;
  };
  display?: string;
}

export interface ReferenceValidationResult {
  /** Whether the reference validation passed */
  valid: boolean;
  /** Issues found during validation */
  issues: OperationOutcomeIssue[];
}

/**
 * Validate a FHIR Reference
 */
export function validateReference(
  reference: Reference,
  path: string,
  allowedTypes?: ElementDefinitionType[]
): ReferenceValidationResult {
  const issues: OperationOutcomeIssue[] = [];

  // Reference must have either reference, identifier, or display
  if (!reference.reference && !reference.identifier && !reference.display) {
    issues.push(
      createIssue(
        'error',
        'required',
        'Reference must have at least one of: reference, identifier, or display',
        path
      )
    );
    return { valid: false, issues };
  }

  // Validate reference string format
  if (reference.reference) {
    const refIssues = validateReferenceString(reference.reference, `${path}.reference`);
    issues.push(...refIssues);

    // Check target type if allowed types are specified
    if (allowedTypes && allowedTypes.length > 0) {
      const typeIssues = validateReferenceType(reference, path, allowedTypes);
      issues.push(...typeIssues);
    }
  }

  // Validate type if present
  if (reference.type) {
    const typeIssues = validateReferenceTypeField(reference.type, `${path}.type`);
    issues.push(...typeIssues);
  }

  // Validate identifier if present
  if (reference.identifier) {
    const idIssues = validateReferenceIdentifier(reference.identifier, `${path}.identifier`);
    issues.push(...idIssues);
  }

  return {
    valid: issues.filter((i) => i.severity === 'error').length === 0,
    issues,
  };
}

/**
 * Validate reference string format
 */
function validateReferenceString(
  reference: string,
  path: string
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  // Valid formats:
  // - Contained: #id
  // - Relative: ResourceType/id
  // - Absolute: http(s)://...
  // - URN: urn:uuid:... or urn:oid:...

  const containedPattern = /^#[\w.-]+$/;
  const relativePattern = /^[A-Z][a-zA-Z]+\/[\w.-]+$/;
  const absolutePattern = /^https?:\/\/.+/;
  const urnUuidPattern = /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const urnOidPattern = /^urn:oid:[0-2](\.[1-9][0-9]*)+$/;

  const isValid =
    containedPattern.test(reference) ||
    relativePattern.test(reference) ||
    absolutePattern.test(reference) ||
    urnUuidPattern.test(reference) ||
    urnOidPattern.test(reference);

  if (!isValid) {
    issues.push(
      createIssue(
        'warning',
        'value',
        `Reference '${reference}' may not be a valid reference format`,
        path
      )
    );
  }

  return issues;
}

/**
 * Validate reference target type against allowed types
 */
function validateReferenceType(
  reference: Reference,
  path: string,
  allowedTypes: ElementDefinitionType[]
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  // Extract target type from reference
  let targetType: string | undefined;

  if (reference.reference) {
    // For relative references (ResourceType/id)
    const match = reference.reference.match(/^([A-Z][a-zA-Z]+)\/[\w.-]+$/);
    if (match) {
      targetType = match[1];
    }

    // For absolute URLs, try to extract type
    const urlMatch = reference.reference.match(/\/([A-Z][a-zA-Z]+)\/[\w.-]+$/);
    if (urlMatch) {
      targetType = urlMatch[1];
    }
  }

  // Use explicit type field if present
  if (reference.type) {
    targetType = reference.type;
  }

  if (!targetType) {
    // Can't determine type, skip validation
    return issues;
  }

  // Check if type is allowed
  const allowedTypeNames: string[] = [];

  for (const type of allowedTypes) {
    // Get target profiles
    if (type.targetProfile && type.targetProfile.length > 0) {
      for (const profile of type.targetProfile) {
        // Extract type from profile URL
        const profileMatch = profile.match(/\/([A-Z][a-zA-Z]+)$/);
        if (profileMatch) {
          allowedTypeNames.push(profileMatch[1]);
        }
      }
    } else if (type.code === 'Reference') {
      // If no targetProfile, any reference is allowed
      return issues;
    }
  }

  if (allowedTypeNames.length > 0 && !allowedTypeNames.includes(targetType)) {
    issues.push(
      createIssue(
        'error',
        'value',
        `Reference target type '${targetType}' is not allowed. Expected: ${allowedTypeNames.join(', ')}`,
        path
      )
    );
  }

  return issues;
}

/**
 * Validate reference type field
 */
function validateReferenceTypeField(
  type: string,
  path: string
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  // Type should be a valid resource type name
  const resourceTypePattern = /^[A-Z][a-zA-Z]+$/;

  if (!resourceTypePattern.test(type)) {
    issues.push(
      createIssue(
        'warning',
        'value',
        `Reference type '${type}' is not a valid resource type name`,
        path
      )
    );
  }

  return issues;
}

/**
 * Validate reference identifier
 */
function validateReferenceIdentifier(
  identifier: Reference['identifier'],
  path: string
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  if (!identifier) {
    return issues;
  }

  // Identifier should have value
  if (!identifier.value) {
    issues.push(
      createIssue(
        'warning',
        'value',
        'Reference identifier should have a value',
        `${path}.value`
      )
    );
  }

  return issues;
}

/**
 * Parse a reference string into its components
 */
export function parseReference(reference: string): {
  isContained: boolean;
  isAbsolute: boolean;
  isUrn: boolean;
  resourceType?: string;
  id?: string;
  baseUrl?: string;
} {
  // Contained reference
  if (reference.startsWith('#')) {
    return {
      isContained: true,
      isAbsolute: false,
      isUrn: false,
      id: reference.substring(1),
    };
  }

  // URN reference
  if (reference.startsWith('urn:')) {
    return {
      isContained: false,
      isAbsolute: false,
      isUrn: true,
      id: reference,
    };
  }

  // Absolute URL
  if (reference.startsWith('http://') || reference.startsWith('https://')) {
    const match = reference.match(/^(https?:\/\/.+)\/([A-Z][a-zA-Z]+)\/([^/]+)$/);
    if (match) {
      return {
        isContained: false,
        isAbsolute: true,
        isUrn: false,
        baseUrl: match[1],
        resourceType: match[2],
        id: match[3],
      };
    }
    return {
      isContained: false,
      isAbsolute: true,
      isUrn: false,
    };
  }

  // Relative reference
  const match = reference.match(/^([A-Z][a-zA-Z]+)\/(.+)$/);
  if (match) {
    return {
      isContained: false,
      isAbsolute: false,
      isUrn: false,
      resourceType: match[1],
      id: match[2],
    };
  }

  // Unknown format
  return {
    isContained: false,
    isAbsolute: false,
    isUrn: false,
  };
}

/**
 * Check if two references point to the same resource
 */
export function referencesMatch(ref1: string, ref2: string): boolean {
  const parsed1 = parseReference(ref1);
  const parsed2 = parseReference(ref2);

  // Exact match
  if (ref1 === ref2) {
    return true;
  }

  // Both are relative with same type and id
  if (
    !parsed1.isAbsolute &&
    !parsed2.isAbsolute &&
    parsed1.resourceType &&
    parsed2.resourceType &&
    parsed1.resourceType === parsed2.resourceType &&
    parsed1.id === parsed2.id
  ) {
    return true;
  }

  // One absolute, one relative - check type and id match
  if (
    parsed1.resourceType === parsed2.resourceType &&
    parsed1.id === parsed2.id
  ) {
    return true;
  }

  return false;
}

/**
 * Create an OperationOutcomeIssue
 */
function createIssue(
  severity: IssueSeverity,
  code: 'required' | 'value',
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
