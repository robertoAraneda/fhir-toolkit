import type { ParsedScope } from './types.js';

/**
 * Parses a single SMART scope string into structured form.
 * Supports both SMART v1 (`patient/Patient.read`) and v2 (`patient/Patient.rs`).
 *
 * Returns null for non-resource scopes (e.g., `openid`, `launch`, `offline_access`).
 */
export function parseScope(scope: string): ParsedScope | null {
  const match = scope.match(/^(patient|user|system)\/([A-Za-z]+)\.(.+)$/);
  if (!match || !match[1] || !match[2] || !match[3]) return null;

  return {
    context: match[1] as ParsedScope['context'],
    resourceType: match[2],
    permissions: match[3],
  };
}

/**
 * Formats a ParsedScope back into a SMART scope string.
 */
export function formatScope(parsed: ParsedScope): string {
  return `${parsed.context}/${parsed.resourceType}.${parsed.permissions}`;
}

/**
 * Parses a space-separated scope string into an array of ParsedScope.
 * Non-resource scopes (openid, launch, etc.) are filtered out.
 */
export function parseScopes(scopeString: string): ParsedScope[] {
  return scopeString
    .split(/\s+/)
    .filter(Boolean)
    .map(parseScope)
    .filter((s): s is ParsedScope => s !== null);
}

/**
 * Checks if a scope string contains a scope matching the given criteria.
 */
export function hasScope(
  scopeString: string,
  check: Partial<ParsedScope>,
): boolean {
  const scopes = parseScopes(scopeString);
  return scopes.some((s) => {
    if (check.context && s.context !== check.context) return false;
    if (check.resourceType && s.resourceType !== check.resourceType) return false;
    if (check.permissions && s.permissions !== check.permissions) return false;
    return true;
  });
}
