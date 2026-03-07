import type { SmartConfiguration } from './types.js';
import { SmartAuthError } from './errors.js';

const OAUTH_URIS_URL =
  'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris';

/**
 * Discovers SMART configuration from a FHIR server.
 *
 * 1. Tries `GET {baseUrl}/.well-known/smart-configuration`
 * 2. Falls back to parsing `GET {baseUrl}/metadata` (CapabilityStatement)
 *
 * @param fhirBaseUrl - The FHIR server base URL
 * @param fetchFn - Optional fetch function for testability
 */
export async function discoverSmartConfiguration(
  fhirBaseUrl: string,
  fetchFn: typeof fetch = globalThis.fetch,
): Promise<SmartConfiguration> {
  const baseUrl = fhirBaseUrl.replace(/\/+$/, '');

  // Try .well-known first
  try {
    const response = await fetchFn(`${baseUrl}/.well-known/smart-configuration`, {
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      const config = (await response.json()) as SmartConfiguration;
      if (config.authorization_endpoint && config.token_endpoint) {
        return config;
      }
    }
  } catch {
    // Fall through to metadata
  }

  // Fallback: parse CapabilityStatement
  try {
    const response = await fetchFn(`${baseUrl}/metadata`, {
      headers: { Accept: 'application/fhir+json' },
    });
    if (response.ok) {
      const cs = await response.json();
      const config = parseCapabilityStatement(cs);
      if (config) return config;
    }
  } catch {
    // Both failed
  }

  throw new SmartAuthError(
    'discovery_failed',
    `Failed to discover SMART configuration from ${baseUrl}`,
  );
}

interface Extension {
  url: string;
  valueUri?: string;
  extension?: Extension[];
}

function parseCapabilityStatement(cs: unknown): SmartConfiguration | null {
  if (!cs || typeof cs !== 'object') return null;

  const rest = (cs as Record<string, unknown>).rest;
  if (!Array.isArray(rest) || rest.length === 0) return null;

  const security = rest[0]?.security;
  if (!security || typeof security !== 'object') return null;

  const extensions = (security as Record<string, unknown>).extension;
  if (!Array.isArray(extensions)) return null;

  const oauthExt = extensions.find(
    (ext: Extension) => ext.url === OAUTH_URIS_URL,
  ) as Extension | undefined;

  if (!oauthExt?.extension) return null;

  let authorizationEndpoint: string | undefined;
  let tokenEndpoint: string | undefined;

  for (const sub of oauthExt.extension) {
    if (sub.url === 'authorize' && sub.valueUri) {
      authorizationEndpoint = sub.valueUri;
    } else if (sub.url === 'token' && sub.valueUri) {
      tokenEndpoint = sub.valueUri;
    }
  }

  if (!authorizationEndpoint || !tokenEndpoint) return null;

  return {
    authorization_endpoint: authorizationEndpoint,
    token_endpoint: tokenEndpoint,
  };
}
