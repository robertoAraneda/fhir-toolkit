/**
 * FHIRPath resolve() support
 *
 * Builds an index of resources (contained + Bundle entries) and provides
 * a resolve function that can be wired into fhirpath.js via userInvocationTable.
 *
 * Reference: https://hl7.org/fhir/R4/fhirpath.html#resolve
 */

export interface ResourceIndex {
  /** Bundle entries indexed by fullUrl */
  bundleEntries: Map<string, any>;
  /** Bundle entries indexed by ResourceType/id */
  bundleEntriesByTypeId: Map<string, any>;
  /** Contained resources indexed by id (without #) */
  containedResources: Map<string, any>;
}

/**
 * Build an index of resolvable resources from a FHIR resource.
 * Indexes contained resources and (if Bundle) entry resources.
 */
export function buildResourceIndex(resource: any): ResourceIndex {
  const index: ResourceIndex = {
    bundleEntries: new Map(),
    bundleEntriesByTypeId: new Map(),
    containedResources: new Map(),
  };

  // Index contained resources
  if (Array.isArray(resource.contained)) {
    for (const contained of resource.contained) {
      if (contained?.id) {
        index.containedResources.set(contained.id, contained);
      }
    }
  }

  // Index bundle entries
  if (resource.resourceType === 'Bundle' && Array.isArray(resource.entry)) {
    indexBundleEntries(resource.entry, index);
  }

  return index;
}

function indexBundleEntries(entries: any[], index: ResourceIndex): void {
  for (const entry of entries) {
    if (!entry?.resource) continue;

    if (entry.fullUrl) {
      index.bundleEntries.set(entry.fullUrl, entry.resource);
    }

    if (entry.resource.resourceType && entry.resource.id) {
      index.bundleEntriesByTypeId.set(
        `${entry.resource.resourceType}/${entry.resource.id}`,
        entry.resource
      );
    }
  }
}

/**
 * Resolve a FHIR reference string to a resource using the index.
 *
 * Resolution order:
 * 1. Fragment references (#id) → contained resources
 * 2. URN references (urn:uuid:, urn:oid:) → Bundle entries by fullUrl
 * 3. Relative references (Type/id) → Bundle entries by type/id, then fullUrl suffix
 * 4. Absolute URLs → Bundle entries by fullUrl
 */
export function resolveReference(
  reference: string,
  index: ResourceIndex
): any | undefined {
  if (!reference || typeof reference !== 'string') return undefined;

  // #id → contained resource
  if (reference.startsWith('#')) {
    return index.containedResources.get(reference.slice(1));
  }

  // urn:uuid: or urn:oid: → bundle entry by fullUrl
  if (reference.startsWith('urn:')) {
    return index.bundleEntries.get(reference);
  }

  // Try direct fullUrl match (absolute URL)
  const byFullUrl = index.bundleEntries.get(reference);
  if (byFullUrl) return byFullUrl;

  // Try ResourceType/id match
  const byTypeId = index.bundleEntriesByTypeId.get(reference);
  if (byTypeId) return byTypeId;

  // Try suffix match on fullUrl (e.g., reference "Patient/123" matches fullUrl "http://example.org/fhir/Patient/123")
  for (const [fullUrl, resource] of index.bundleEntries) {
    if (fullUrl.endsWith(`/${reference}`)) {
      return resource;
    }
  }

  return undefined;
}

/**
 * Create a fhirpath.js userInvocationTable entry for resolve().
 *
 * The resolve() function in FHIRPath takes each Reference in the input collection,
 * extracts the .reference field, and resolves it to the target resource.
 */
export function createResolveInvocation(index: ResourceIndex) {
  return {
    fn: (inputs: any[]) => {
      const results: any[] = [];
      for (const input of inputs) {
        // input can be a Reference object or a string
        const ref = typeof input === 'string' ? input : input?.reference;
        if (!ref) continue;
        const resolved = resolveReference(ref, index);
        if (resolved) {
          results.push(resolved);
        }
      }
      return results;
    },
    arity: { 0: [] },
  };
}
