/**
 * JSON Location Mapper
 *
 * Parses JSON source text and builds a map from FHIRPath-style paths
 * to {line, column} positions in the source. Used to enrich validation
 * issues with source location information.
 */

export interface SourceLocation {
  line: number;
  column: number;
}

/**
 * Build a map of JSON paths to source locations by parsing the raw JSON string.
 *
 * Returns a Map where keys are dot/bracket-notation paths (e.g., "Patient.name[0].family")
 * and values are {line, column} (1-based).
 */
export function buildLocationMap(jsonString: string): Map<string, SourceLocation> {
  const map = new Map<string, SourceLocation>();
  const len = jsonString.length;
  let pos = 0;
  let line = 1;
  let col = 1;

  function advance(): string {
    const ch = jsonString[pos];
    pos++;
    if (ch === '\n') {
      line++;
      col = 1;
    } else {
      col++;
    }
    return ch;
  }

  function peek(): string {
    return jsonString[pos];
  }

  function skipWhitespace(): void {
    while (pos < len) {
      const ch = jsonString[pos];
      if (ch === ' ' || ch === '\t' || ch === '\r' || ch === '\n') {
        advance();
      } else {
        break;
      }
    }
  }

  function readString(): string {
    // Assumes current char is '"'
    advance(); // skip opening quote
    let result = '';
    while (pos < len) {
      const ch = advance();
      if (ch === '"') return result;
      if (ch === '\\') {
        const escaped = advance();
        switch (escaped) {
          case '"': result += '"'; break;
          case '\\': result += '\\'; break;
          case '/': result += '/'; break;
          case 'b': result += '\b'; break;
          case 'f': result += '\f'; break;
          case 'n': result += '\n'; break;
          case 'r': result += '\r'; break;
          case 't': result += '\t'; break;
          case 'u': {
            let hex = '';
            for (let i = 0; i < 4 && pos < len; i++) hex += advance();
            result += String.fromCharCode(parseInt(hex, 16));
            break;
          }
          default: result += escaped;
        }
      } else {
        result += ch;
      }
    }
    return result;
  }

  function skipValue(): void {
    skipWhitespace();
    if (pos >= len) return;
    const ch = peek();
    if (ch === '"') {
      readString();
    } else if (ch === '{') {
      parseObject([]);
    } else if (ch === '[') {
      parseArray([]);
    } else {
      // number, true, false, null
      while (pos < len && !/[\s,\]\}]/.test(jsonString[pos])) {
        advance();
      }
    }
  }

  function pathKey(pathParts: string[]): string {
    return pathParts.join('.');
  }

  function parseObject(path: string[]): void {
    advance(); // skip '{'
    skipWhitespace();
    if (pos < len && peek() === '}') {
      advance();
      return;
    }

    while (pos < len) {
      skipWhitespace();
      if (pos >= len || peek() !== '"') break;

      // Record position of the key
      const keyLine = line;
      const keyCol = col;
      const key = readString();

      const childPath = [...path, key];
      const fullPath = pathKey(childPath);
      map.set(fullPath, { line: keyLine, column: keyCol });

      skipWhitespace();
      if (pos < len && peek() === ':') advance(); // skip ':'
      skipWhitespace();

      // Parse value
      if (pos < len) {
        const ch = peek();
        if (ch === '{') {
          parseObject(childPath);
        } else if (ch === '[') {
          parseArray(childPath);
        } else {
          skipValue();
        }
      }

      skipWhitespace();
      if (pos < len && peek() === ',') {
        advance();
      } else {
        break;
      }
    }

    skipWhitespace();
    if (pos < len && peek() === '}') advance();
  }

  function parseArray(path: string[]): void {
    advance(); // skip '['
    skipWhitespace();
    if (pos < len && peek() === ']') {
      advance();
      return;
    }

    let index = 0;
    while (pos < len) {
      skipWhitespace();

      const elemLine = line;
      const elemCol = col;
      const indexedPath = [...path];
      // Replace the last segment with indexed version: "name" -> "name[0]"
      const lastSeg = indexedPath[indexedPath.length - 1];
      indexedPath[indexedPath.length - 1] = `${lastSeg}[${index}]`;
      const fullPath = pathKey(indexedPath);
      map.set(fullPath, { line: elemLine, column: elemCol });

      if (pos < len) {
        const ch = peek();
        if (ch === '{') {
          parseObject(indexedPath);
        } else if (ch === '[') {
          parseArray(indexedPath);
        } else {
          skipValue();
        }
      }

      skipWhitespace();
      if (pos < len && peek() === ',') {
        advance();
        index++;
      } else {
        break;
      }
    }

    skipWhitespace();
    if (pos < len && peek() === ']') advance();
  }

  // Start parsing
  skipWhitespace();
  if (pos < len && peek() === '{') {
    // Record root object position
    map.set('', { line, column: col });
    parseObject([]);
  }

  return map;
}

/**
 * Look up the source location for a FHIRPath expression.
 *
 * Tries exact match first, then progressively strips array indices
 * and path segments to find the closest ancestor.
 */
export function findLocation(
  locationMap: Map<string, SourceLocation>,
  fhirPath: string
): SourceLocation | undefined {
  // Try exact match
  if (locationMap.has(fhirPath)) {
    return locationMap.get(fhirPath);
  }

  // FHIRPath expressions start with resourceType (e.g., "Patient.birthDate")
  // but JSON map keys are relative to the root object (e.g., "birthDate").
  // Try stripping the first segment (resourceType).
  const parts = fhirPath.split('.');
  if (parts.length > 1) {
    const withoutResourceType = parts.slice(1).join('.');
    if (locationMap.has(withoutResourceType)) {
      return locationMap.get(withoutResourceType);
    }

    // Try progressively shorter paths (without resourceType prefix)
    const subParts = parts.slice(1);
    for (let i = subParts.length - 1; i >= 1; i--) {
      const partial = subParts.slice(0, i).join('.');
      if (locationMap.has(partial)) {
        return locationMap.get(partial);
      }
    }
  }

  // Try progressively shorter paths (with resourceType prefix)
  for (let i = parts.length - 1; i >= 1; i--) {
    const partial = parts.slice(0, i).join('.');
    if (locationMap.has(partial)) {
      return locationMap.get(partial);
    }
  }

  return undefined;
}

/**
 * Enrich validation issues with source location information.
 *
 * Modifies issues in-place, adding location data to the `diagnostics` field
 * and setting the `location` property (FHIR extension point).
 */
export function enrichIssuesWithLocation(
  issues: Array<{ expression?: string[]; diagnostics?: string; location?: string[] }>,
  locationMap: Map<string, SourceLocation>
): void {
  for (const issue of issues) {
    if (!issue.expression || issue.expression.length === 0) continue;

    const expr = issue.expression[0];
    const loc = findLocation(locationMap, expr);
    if (loc) {
      // Add location as "Line X, Col Y" in the location array
      if (!issue.location) {
        issue.location = [];
      }
      issue.location.push(`Line ${loc.line}, Col ${loc.column}`);
    }
  }
}
