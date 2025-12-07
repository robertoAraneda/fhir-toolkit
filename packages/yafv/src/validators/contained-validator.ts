/**
 * Contained Resource Validator
 *
 * Validates contained resources within a FHIR resource.
 * Ensures contained resources:
 * - Have only relative references
 * - Are referenced from the container
 * - Don't have nested contained resources
 */

import type {
  OperationOutcomeIssue,
  IssueSeverity,
  FhirResource,
} from '../core/types.js';

export interface ContainedValidationResult {
  /** Whether the contained validation passed */
  valid: boolean;
  /** Issues found during validation */
  issues: OperationOutcomeIssue[];
}

export interface ContainedValidationOptions {
  /** Validate that contained resources are referenced */
  checkUnreferenced?: boolean;
  /** Resource validator function */
  resourceValidator?: (resource: FhirResource) => Promise<OperationOutcomeIssue[]>;
}

/**
 * Validate contained resources within a resource
 */
export async function validateContainedResources(
  resource: FhirResource,
  options: ContainedValidationOptions = {}
): Promise<ContainedValidationResult> {
  const issues: OperationOutcomeIssue[] = [];

  if (!resource.contained || !Array.isArray(resource.contained)) {
    return { valid: true, issues };
  }

  const containedIds = new Set<string>();

  // Validate each contained resource
  for (let i = 0; i < resource.contained.length; i++) {
    const contained = resource.contained[i] as FhirResource;
    const path = `${resource.resourceType}.contained[${i}]`;

    // Check that it's a valid resource
    if (!contained || typeof contained !== 'object') {
      issues.push(
        createIssue(
          'error',
          'invalid',
          'Contained element must be a valid resource object',
          path
        )
      );
      continue;
    }

    // Check resourceType
    if (!contained.resourceType) {
      issues.push(
        createIssue(
          'error',
          'required',
          'Contained resource must have a resourceType',
          path
        )
      );
      continue;
    }

    // Check id (required for contained resources)
    if (!contained.id) {
      issues.push(
        createIssue(
          'error',
          'required',
          'Contained resource must have an id',
          `${path}.id`
        )
      );
    } else {
      // Check for duplicate ids
      if (containedIds.has(contained.id)) {
        issues.push(
          createIssue(
            'error',
            'duplicate',
            `Duplicate contained resource id: ${contained.id}`,
            `${path}.id`
          )
        );
      }
      containedIds.add(contained.id);
    }

    // Check that contained resource doesn't have nested contained
    if (contained.contained && Array.isArray(contained.contained) && contained.contained.length > 0) {
      issues.push(
        createIssue(
          'error',
          'structure',
          'Contained resources cannot have nested contained resources',
          `${path}.contained`
        )
      );
    }

    // Check that contained resource only has internal references
    const externalRefs = findExternalReferences(contained);
    for (const ref of externalRefs) {
      issues.push(
        createIssue(
          'warning',
          'value',
          `Contained resource has external reference: ${ref.reference}`,
          `${path}.${ref.path}`
        )
      );
    }

    // Optionally validate the contained resource
    if (options.resourceValidator) {
      const resourceIssues = await options.resourceValidator(contained);
      // Adjust paths to include contained index
      for (const issue of resourceIssues) {
        if (issue.expression && issue.expression.length > 0) {
          issue.expression = issue.expression.map(
            (expr) => `${path}.${expr.split('.').slice(1).join('.')}`
          );
        }
      }
      issues.push(...resourceIssues);
    }
  }

  // Check that all contained resources are referenced
  if (options.checkUnreferenced !== false) {
    const referencedIds = findContainedReferences(resource);

    for (const id of containedIds) {
      if (!referencedIds.has(id)) {
        issues.push(
          createIssue(
            'warning',
            'informational',
            `Contained resource with id '${id}' is not referenced`,
            `${resource.resourceType}.contained`
          )
        );
      }
    }
  }

  return {
    valid: issues.filter((i) => i.severity === 'error').length === 0,
    issues,
  };
}

/**
 * Find external references in a contained resource
 * External references are those not starting with # or that are absolute URLs
 */
function findExternalReferences(
  resource: any,
  path: string = ''
): Array<{ reference: string; path: string }> {
  const references: Array<{ reference: string; path: string }> = [];

  if (!resource || typeof resource !== 'object') {
    return references;
  }

  if (Array.isArray(resource)) {
    resource.forEach((item, i) => {
      references.push(...findExternalReferences(item, `${path}[${i}]`));
    });
    return references;
  }

  // Check if this is a Reference type
  if (resource.reference && typeof resource.reference === 'string') {
    const ref = resource.reference;

    // External references are those that:
    // - Don't start with # (local reference)
    // - Are absolute URLs
    // - Are relative resource references (Type/id)
    if (!ref.startsWith('#')) {
      references.push({
        reference: ref,
        path: path ? `${path}.reference` : 'reference',
      });
    }
  }

  // Recurse into child objects
  for (const key of Object.keys(resource)) {
    if (key === 'resourceType' || key === 'id' || key === 'meta' || key === 'contained') {
      continue;
    }

    const childPath = path ? `${path}.${key}` : key;
    references.push(...findExternalReferences(resource[key], childPath));
  }

  return references;
}

/**
 * Find all contained references (references starting with #) in a resource
 */
function findContainedReferences(resource: any): Set<string> {
  const ids = new Set<string>();

  function traverse(obj: any) {
    if (!obj || typeof obj !== 'object') {
      return;
    }

    if (Array.isArray(obj)) {
      obj.forEach(traverse);
      return;
    }

    // Check if this is a Reference with a contained reference
    if (obj.reference && typeof obj.reference === 'string' && obj.reference.startsWith('#')) {
      ids.add(obj.reference.substring(1));
    }

    // Recurse into child objects (skip contained to avoid finding self-references)
    for (const key of Object.keys(obj)) {
      if (key !== 'contained') {
        traverse(obj[key]);
      }
    }
  }

  traverse(resource);
  return ids;
}

/**
 * Resolve a contained reference to the actual resource
 */
export function resolveContainedReference(
  reference: string,
  container: FhirResource
): FhirResource | undefined {
  if (!reference.startsWith('#')) {
    return undefined;
  }

  const id = reference.substring(1);

  if (!container.contained || !Array.isArray(container.contained)) {
    return undefined;
  }

  return container.contained.find((c: FhirResource) => c.id === id);
}

/**
 * Create an OperationOutcomeIssue
 */
function createIssue(
  severity: IssueSeverity,
  code: 'required' | 'value' | 'structure' | 'invalid' | 'duplicate' | 'informational',
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
