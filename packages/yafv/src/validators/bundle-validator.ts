/**
 * Bundle Validator
 *
 * Validates FHIR Bundles including:
 * - Bundle type validation (document, message, transaction, etc.)
 * - Entry validation
 * - Cross-entry reference validation
 * - Transaction/batch specific rules
 */

import type {
  OperationOutcomeIssue,
  IssueSeverity,
  FhirResource,
} from '../core/types.js';

export type BundleType =
  | 'document'
  | 'message'
  | 'transaction'
  | 'transaction-response'
  | 'batch'
  | 'batch-response'
  | 'history'
  | 'searchset'
  | 'collection';

export interface BundleEntry {
  fullUrl?: string;
  resource?: FhirResource;
  request?: {
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    ifNoneMatch?: string;
    ifModifiedSince?: string;
    ifMatch?: string;
    ifNoneExist?: string;
  };
  response?: {
    status: string;
    location?: string;
    etag?: string;
    lastModified?: string;
    outcome?: FhirResource;
  };
  search?: {
    mode?: 'match' | 'include' | 'outcome';
    score?: number;
  };
}

export interface Bundle extends FhirResource {
  resourceType: 'Bundle';
  type: BundleType;
  total?: number;
  link?: Array<{
    relation: string;
    url: string;
  }>;
  entry?: BundleEntry[];
  timestamp?: string;
  signature?: any;
}

export interface BundleValidationResult {
  /** Whether the bundle validation passed */
  valid: boolean;
  /** Issues found during validation */
  issues: OperationOutcomeIssue[];
}

export interface BundleValidationOptions {
  /** Validate resources within entries */
  validateEntryResources?: boolean;
  /** Validate references between entries */
  validateReferences?: boolean;
  /** Resource validator function */
  resourceValidator?: (resource: FhirResource) => Promise<OperationOutcomeIssue[]>;
}

/**
 * Validate a Bundle resource
 */
export async function validateBundle(
  bundle: Bundle,
  options: BundleValidationOptions = {}
): Promise<BundleValidationResult> {
  const issues: OperationOutcomeIssue[] = [];

  // Validate bundle type
  if (!bundle.type) {
    issues.push(
      createIssue('error', 'required', 'Bundle must have a type', 'Bundle.type')
    );
    return { valid: false, issues };
  }

  const validTypes: BundleType[] = [
    'document',
    'message',
    'transaction',
    'transaction-response',
    'batch',
    'batch-response',
    'history',
    'searchset',
    'collection',
  ];

  if (!validTypes.includes(bundle.type)) {
    issues.push(
      createIssue(
        'error',
        'code-invalid',
        `Invalid bundle type: ${bundle.type}`,
        'Bundle.type'
      )
    );
  }

  // Validate type-specific rules
  const typeIssues = validateBundleTypeRules(bundle);
  issues.push(...typeIssues);

  // Validate entries
  if (bundle.entry && bundle.entry.length > 0) {
    const entryIssues = await validateBundleEntries(bundle, options);
    issues.push(...entryIssues);
  }

  // Validate references between entries
  if (options.validateReferences !== false && bundle.entry) {
    const refIssues = validateBundleReferences(bundle);
    issues.push(...refIssues);
  }

  return {
    valid: issues.filter((i) => i.severity === 'error').length === 0,
    issues,
  };
}

/**
 * Validate bundle type-specific rules
 */
function validateBundleTypeRules(bundle: Bundle): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  switch (bundle.type) {
    case 'document':
      // First entry must be a Composition
      if (bundle.entry && bundle.entry.length > 0) {
        const firstResource = bundle.entry[0]?.resource;
        if (!firstResource || firstResource.resourceType !== 'Composition') {
          issues.push(
            createIssue(
              'error',
              'structure',
              'Document bundle must have a Composition as the first entry',
              'Bundle.entry[0].resource'
            )
          );
        }
      } else {
        issues.push(
          createIssue(
            'error',
            'required',
            'Document bundle must have at least one entry',
            'Bundle.entry'
          )
        );
      }
      break;

    case 'message':
      // First entry must be a MessageHeader
      if (bundle.entry && bundle.entry.length > 0) {
        const firstResource = bundle.entry[0]?.resource;
        if (!firstResource || firstResource.resourceType !== 'MessageHeader') {
          issues.push(
            createIssue(
              'error',
              'structure',
              'Message bundle must have a MessageHeader as the first entry',
              'Bundle.entry[0].resource'
            )
          );
        }
      } else {
        issues.push(
          createIssue(
            'error',
            'required',
            'Message bundle must have at least one entry',
            'Bundle.entry'
          )
        );
      }
      break;

    case 'transaction':
    case 'batch':
      // All entries must have request
      if (bundle.entry) {
        for (let i = 0; i < bundle.entry.length; i++) {
          const entry = bundle.entry[i];
          if (!entry.request) {
            issues.push(
              createIssue(
                'error',
                'required',
                `${bundle.type} bundle entry must have a request element`,
                `Bundle.entry[${i}].request`
              )
            );
          }
        }
      }
      break;

    case 'transaction-response':
    case 'batch-response':
      // All entries must have response
      if (bundle.entry) {
        for (let i = 0; i < bundle.entry.length; i++) {
          const entry = bundle.entry[i];
          if (!entry.response) {
            issues.push(
              createIssue(
                'error',
                'required',
                `${bundle.type} bundle entry must have a response element`,
                `Bundle.entry[${i}].response`
              )
            );
          }
        }
      }
      break;

    case 'searchset':
      // Should have total if available
      // Entries can have search element
      break;

    case 'history':
    case 'collection':
      // No specific rules
      break;
  }

  return issues;
}

/**
 * Validate bundle entries
 */
async function validateBundleEntries(
  bundle: Bundle,
  options: BundleValidationOptions
): Promise<OperationOutcomeIssue[]> {
  const issues: OperationOutcomeIssue[] = [];

  if (!bundle.entry) {
    return issues;
  }

  for (let i = 0; i < bundle.entry.length; i++) {
    const entry = bundle.entry[i];
    const entryPath = `Bundle.entry[${i}]`;

    // Validate fullUrl format if present
    if (entry.fullUrl) {
      const fullUrlIssues = validateFullUrl(entry.fullUrl, entryPath);
      issues.push(...fullUrlIssues);
    }

    // Validate resource if present
    if (entry.resource) {
      // Check basic resource structure
      if (!entry.resource.resourceType) {
        issues.push(
          createIssue(
            'error',
            'required',
            'Entry resource must have a resourceType',
            `${entryPath}.resource`
          )
        );
      }

      // Optionally validate the resource using external validator
      if (options.validateEntryResources && options.resourceValidator) {
        const resourceIssues = await options.resourceValidator(entry.resource);
        // Adjust paths to include entry index
        for (const issue of resourceIssues) {
          if (issue.expression && issue.expression.length > 0) {
            issue.expression = issue.expression.map(
              (expr) => `${entryPath}.resource.${expr.split('.').slice(1).join('.')}`
            );
          }
        }
        issues.push(...resourceIssues);
      }
    }

    // Validate request if present
    if (entry.request) {
      const requestIssues = validateEntryRequest(entry.request, entryPath);
      issues.push(...requestIssues);
    }

    // Validate response if present
    if (entry.response) {
      const responseIssues = validateEntryResponse(entry.response, entryPath);
      issues.push(...responseIssues);
    }
  }

  return issues;
}

/**
 * Validate fullUrl format
 */
function validateFullUrl(
  fullUrl: string,
  entryPath: string
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  // fullUrl should be a valid URI
  // Common formats: urn:uuid:..., urn:oid:..., http(s)://...
  const validPatterns = [
    /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    /^urn:oid:[0-2](\.[1-9][0-9]*)+$/,
    /^https?:\/\/.+/,
  ];

  const isValid = validPatterns.some((pattern) => pattern.test(fullUrl));

  if (!isValid) {
    issues.push(
      createIssue(
        'warning',
        'value',
        `fullUrl '${fullUrl}' may not be a valid URI format`,
        `${entryPath}.fullUrl`
      )
    );
  }

  return issues;
}

/**
 * Validate entry request
 */
function validateEntryRequest(
  request: BundleEntry['request'],
  entryPath: string
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  if (!request) {
    return issues;
  }

  // Validate method
  const validMethods = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'];
  if (!validMethods.includes(request.method)) {
    issues.push(
      createIssue(
        'error',
        'code-invalid',
        `Invalid request method: ${request.method}`,
        `${entryPath}.request.method`
      )
    );
  }

  // Validate url is present
  if (!request.url) {
    issues.push(
      createIssue(
        'error',
        'required',
        'Request must have a url',
        `${entryPath}.request.url`
      )
    );
  }

  return issues;
}

/**
 * Validate entry response
 */
function validateEntryResponse(
  response: BundleEntry['response'],
  entryPath: string
): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  if (!response) {
    return issues;
  }

  // Validate status is present
  if (!response.status) {
    issues.push(
      createIssue(
        'error',
        'required',
        'Response must have a status',
        `${entryPath}.response.status`
      )
    );
  }

  return issues;
}

/**
 * Validate references between bundle entries
 */
function validateBundleReferences(bundle: Bundle): OperationOutcomeIssue[] {
  const issues: OperationOutcomeIssue[] = [];

  if (!bundle.entry) {
    return issues;
  }

  // Build a map of available resources
  const availableResources = new Map<string, number>();

  for (let i = 0; i < bundle.entry.length; i++) {
    const entry = bundle.entry[i];

    // Index by fullUrl
    if (entry.fullUrl) {
      availableResources.set(entry.fullUrl, i);
    }

    // Index by resource type/id
    if (entry.resource?.resourceType && entry.resource?.id) {
      const ref = `${entry.resource.resourceType}/${entry.resource.id}`;
      availableResources.set(ref, i);
    }
  }

  // Check references in each entry's resource
  for (let i = 0; i < bundle.entry.length; i++) {
    const entry = bundle.entry[i];
    if (!entry.resource) {
      continue;
    }

    const references = extractReferences(entry.resource);
    for (const ref of references) {
      // Check if reference is resolvable within the bundle
      const isResolvable =
        availableResources.has(ref.reference) ||
        // Also check if it's a relative reference that matches a fullUrl
        bundle.entry.some((e) => e.fullUrl?.endsWith(ref.reference));

      // For contained references (starting with #), they should be in contained
      if (ref.reference.startsWith('#')) {
        const containedId = ref.reference.substring(1);
        const hasContained = entry.resource.contained?.some(
          (c: FhirResource) => c.id === containedId
        );
        if (!hasContained) {
          issues.push(
            createIssue(
              'warning',
              'not-found',
              `Contained reference '${ref.reference}' not found in resource`,
              `Bundle.entry[${i}].resource.${ref.path}`
            )
          );
        }
      }
      // For external references, just note if they're not in the bundle
      else if (!isResolvable && !ref.reference.startsWith('http')) {
        // Only warn for relative references that aren't found
        issues.push(
          createIssue(
            'information',
            'not-found',
            `Reference '${ref.reference}' not found in bundle`,
            `Bundle.entry[${i}].resource.${ref.path}`
          )
        );
      }
    }
  }

  return issues;
}

/**
 * Extract all references from a resource
 */
function extractReferences(
  resource: any,
  path: string = ''
): Array<{ reference: string; path: string }> {
  const references: Array<{ reference: string; path: string }> = [];

  if (!resource || typeof resource !== 'object') {
    return references;
  }

  if (Array.isArray(resource)) {
    resource.forEach((item, i) => {
      references.push(...extractReferences(item, `${path}[${i}]`));
    });
    return references;
  }

  // Check if this is a Reference type
  if (resource.reference && typeof resource.reference === 'string') {
    references.push({
      reference: resource.reference,
      path: path ? `${path}.reference` : 'reference',
    });
  }

  // Recurse into child objects
  for (const key of Object.keys(resource)) {
    if (key === 'resourceType' || key === 'id' || key === 'meta') {
      continue;
    }

    const childPath = path ? `${path}.${key}` : key;
    references.push(...extractReferences(resource[key], childPath));
  }

  return references;
}

/**
 * Create an OperationOutcomeIssue
 */
function createIssue(
  severity: IssueSeverity,
  code: 'required' | 'value' | 'structure' | 'code-invalid' | 'not-found' | 'informational',
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
