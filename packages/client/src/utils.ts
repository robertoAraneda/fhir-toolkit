import type { IBundle, IBundleEntry, IResource } from '@fhir-toolkit/r4-types';
import type { SearchParams, HistoryParams } from './types.js';

/**
 * Normalizes a base URL by removing trailing slashes.
 */
export function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

/**
 * Builds a FHIR REST URL for a specific resource type and optional ID.
 */
export function buildResourceUrl(
  baseUrl: string,
  resourceType: string,
  id?: string,
  versionId?: string,
): string {
  let url = `${normalizeBaseUrl(baseUrl)}/${resourceType}`;
  if (id) {
    url += `/${id}`;
  }
  if (versionId) {
    url += `/_history/${versionId}`;
  }
  return url;
}

/**
 * Encodes search parameters into a URL query string.
 * Array values are repeated as separate parameters (FHIR AND semantics).
 *
 * @example
 * ```
 * encodeSearchParams({ name: 'Smith', _include: ['a', 'b'] })
 * // => "name=Smith&_include=a&_include=b"
 * ```
 */
export function encodeSearchParams(params: SearchParams): string {
  const parts: string[] = [];

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      for (const v of value) {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`);
      }
    } else {
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    }
  }

  return parts.join('&');
}

/**
 * Encodes history parameters into a URL query string.
 */
export function encodeHistoryParams(params: HistoryParams): string {
  const searchParams: SearchParams = {};
  if (params._count !== undefined) searchParams['_count'] = params._count;
  if (params._since !== undefined) searchParams['_since'] = params._since;
  if (params._at !== undefined) searchParams['_at'] = params._at;
  return encodeSearchParams(searchParams);
}

/**
 * Finds a pagination link URL in a Bundle by relation type.
 *
 * @returns The URL string, or null if not found.
 */
export function findBundleLink(bundle: IBundle, relation: string): string | null {
  if (!bundle.link) return null;
  const link = bundle.link.find((l) => l.relation === relation);
  return link?.url ?? null;
}

/**
 * Extracts typed resources from a Bundle's entries.
 *
 * @example
 * ```typescript
 * const bundle = await client.search('Patient', { name: 'Smith' });
 * const patients = extractResources<IPatient>(bundle);
 * ```
 */
export function extractResources<T extends IResource>(bundle: IBundle): T[] {
  if (!bundle.entry) return [];
  return bundle.entry
    .filter((entry: IBundleEntry): entry is IBundleEntry & { resource: IResource } => entry.resource != null)
    .map((entry) => entry.resource as T);
}

/**
 * Parses a Location header to extract resourceType, id, and optional versionId.
 *
 * @example
 * ```
 * parseLocationHeader('https://server.com/fhir/Patient/123/_history/1')
 * // => { resourceType: 'Patient', id: '123', versionId: '1' }
 * ```
 */
export function parseLocationHeader(
  location: string,
): { resourceType: string; id: string; versionId?: string } | null {
  const match = location.match(
    /\/([A-Z][a-zA-Z]+)\/([^/]+?)(?:\/_history\/([^/]+?))?(?:\?.*)?$/,
  );
  if (!match) return null;

  const resourceType = match[1];
  const id = match[2];
  const versionId = match[3];

  if (!resourceType || !id) return null;

  return {
    resourceType,
    id,
    ...(versionId ? { versionId } : {}),
  };
}
