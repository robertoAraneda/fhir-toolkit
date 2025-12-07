/**
 * Primitive Type Validators
 *
 * Validates FHIR primitive types according to the official specification.
 * Reference: https://hl7.org/fhir/R4/datatypes.html
 */

export interface PrimitiveValidationResult {
  valid: boolean;
  message?: string;
}

// Regex patterns for FHIR primitive types
const PATTERNS = {
  // id: Any combination of upper- or lower-case ASCII letters, numerals, '-' and '.', max 64 chars
  id: /^[A-Za-z0-9\-.]{1,64}$/,

  // instant: YYYY-MM-DDThh:mm:ss.sss+zz:zz (required timezone)
  instant: /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/,

  // date: YYYY, YYYY-MM, or YYYY-MM-DD
  date: /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/,

  // dateTime: YYYY, YYYY-MM, YYYY-MM-DD, or YYYY-MM-DDThh:mm:ss+zz:zz
  dateTime: /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/,

  // time: hh:mm:ss (can have fractional seconds)
  time: /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/,

  // code: no leading/trailing whitespace, no internal sequences of whitespace
  code: /^[^\s]+(\s[^\s]+)*$/,

  // oid: urn:oid: followed by OID pattern
  oid: /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/,

  // uuid: urn:uuid: followed by UUID pattern
  uuid: /^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,

  // uri: RFC 3986 - simplified pattern
  uri: /^\S*$/,

  // url: must be absolute URL
  url: /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^\s]+$/,

  // canonical: URL optionally followed by |version
  canonical: /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^\s|]+(\|[^\s]+)?$/,

  // base64Binary: valid base64
  base64Binary: /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,

  // markdown: string, no specific pattern
  markdown: /.*/,

  // xhtml: must start with <div and be valid XHTML (simplified check)
  xhtml: /^<div[^>]*>[\s\S]*<\/div>$/,
};

/**
 * Validate a value against a FHIR primitive type
 */
export function validatePrimitiveType(
  value: any,
  typeCode: string
): PrimitiveValidationResult {
  switch (typeCode) {
    case 'boolean':
      return validateBoolean(value);

    case 'integer':
      return validateInteger(value);

    case 'positiveInt':
      return validatePositiveInt(value);

    case 'unsignedInt':
      return validateUnsignedInt(value);

    case 'decimal':
      return validateDecimal(value);

    case 'string':
      return validateString(value);

    case 'markdown':
      return validateMarkdown(value);

    case 'id':
      return validateId(value);

    case 'code':
      return validateCode(value);

    case 'uri':
      return validateUri(value);

    case 'url':
      return validateUrl(value);

    case 'canonical':
      return validateCanonical(value);

    case 'oid':
      return validateOid(value);

    case 'uuid':
      return validateUuid(value);

    case 'date':
      return validateDate(value);

    case 'dateTime':
      return validateDateTime(value);

    case 'time':
      return validateTime(value);

    case 'instant':
      return validateInstant(value);

    case 'base64Binary':
      return validateBase64Binary(value);

    case 'xhtml':
      return validateXhtml(value);

    default:
      // Unknown primitive type - could be a complex type or FHIRPath type
      return { valid: true };
  }
}

/**
 * Check if a type code is a primitive type
 */
export function isPrimitiveType(typeCode: string): boolean {
  const primitiveTypes = [
    'boolean',
    'integer',
    'positiveInt',
    'unsignedInt',
    'decimal',
    'string',
    'markdown',
    'id',
    'code',
    'uri',
    'url',
    'canonical',
    'oid',
    'uuid',
    'date',
    'dateTime',
    'time',
    'instant',
    'base64Binary',
    'xhtml',
  ];
  return primitiveTypes.includes(typeCode);
}

// Individual validators

function validateBoolean(value: any): PrimitiveValidationResult {
  if (typeof value !== 'boolean') {
    return {
      valid: false,
      message: `Expected boolean, got ${typeof value}`,
    };
  }
  return { valid: true };
}

function validateInteger(value: any): PrimitiveValidationResult {
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    return {
      valid: false,
      message: `Expected integer, got ${typeof value}`,
    };
  }
  // FHIR integer range: -2147483648 to 2147483647
  if (value < -2147483648 || value > 2147483647) {
    return {
      valid: false,
      message: `Integer out of range: ${value}`,
    };
  }
  return { valid: true };
}

function validatePositiveInt(value: any): PrimitiveValidationResult {
  const intResult = validateInteger(value);
  if (!intResult.valid) {
    return intResult;
  }
  if (value <= 0) {
    return {
      valid: false,
      message: `Expected positive integer (> 0), got ${value}`,
    };
  }
  return { valid: true };
}

function validateUnsignedInt(value: any): PrimitiveValidationResult {
  const intResult = validateInteger(value);
  if (!intResult.valid) {
    return intResult;
  }
  if (value < 0) {
    return {
      valid: false,
      message: `Expected unsigned integer (>= 0), got ${value}`,
    };
  }
  return { valid: true };
}

function validateDecimal(value: any): PrimitiveValidationResult {
  if (typeof value !== 'number') {
    return {
      valid: false,
      message: `Expected number, got ${typeof value}`,
    };
  }
  if (!Number.isFinite(value)) {
    return {
      valid: false,
      message: `Decimal must be finite, got ${value}`,
    };
  }
  return { valid: true };
}

function validateString(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string, got ${typeof value}`,
    };
  }
  // FHIR requires that if an element is present, it must have content
  // An empty string is not valid content
  if (value.length === 0) {
    return {
      valid: false,
      message: 'String cannot be empty. In FHIR, elements must have content if present.',
    };
  }
  return { valid: true };
}

function validateMarkdown(value: any): PrimitiveValidationResult {
  return validateString(value);
}

function validateId(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for id, got ${typeof value}`,
    };
  }
  if (!PATTERNS.id.test(value)) {
    return {
      valid: false,
      message: `Invalid id format: "${value}". Must match [A-Za-z0-9\\-.]{1,64}`,
    };
  }
  return { valid: true };
}

function validateCode(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for code, got ${typeof value}`,
    };
  }
  if (value.length === 0) {
    return {
      valid: false,
      message: 'Code cannot be empty. In FHIR, elements must have content if present.',
    };
  }
  if (!PATTERNS.code.test(value)) {
    return {
      valid: false,
      message: `Invalid code format: "${value}". Cannot have leading/trailing whitespace`,
    };
  }
  return { valid: true };
}

function validateUri(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for uri, got ${typeof value}`,
    };
  }
  if (value.length === 0) {
    return {
      valid: false,
      message: 'URI cannot be empty',
    };
  }
  if (!PATTERNS.uri.test(value)) {
    return {
      valid: false,
      message: `Invalid uri format: "${value}"`,
    };
  }
  return { valid: true };
}

function validateUrl(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for url, got ${typeof value}`,
    };
  }
  // URL is a URI that must be absolute
  if (!PATTERNS.url.test(value)) {
    return {
      valid: false,
      message: `Invalid url format: "${value}". Must be an absolute URL`,
    };
  }
  return { valid: true };
}

function validateCanonical(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for canonical, got ${typeof value}`,
    };
  }
  // Canonical is a URL that may include |version
  // For now, just check it's a valid URI
  if (value.length === 0) {
    return {
      valid: false,
      message: 'Canonical cannot be empty',
    };
  }
  return { valid: true };
}

function validateOid(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for oid, got ${typeof value}`,
    };
  }
  if (!PATTERNS.oid.test(value)) {
    return {
      valid: false,
      message: `Invalid oid format: "${value}". Must match urn:oid:[0-2](\\.(0|[1-9][0-9]*))+`,
    };
  }
  return { valid: true };
}

function validateUuid(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for uuid, got ${typeof value}`,
    };
  }
  if (!PATTERNS.uuid.test(value)) {
    return {
      valid: false,
      message: `Invalid uuid format: "${value}". Must match urn:uuid:[0-9a-fA-F-]{36}`,
    };
  }
  return { valid: true };
}

function validateDate(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for date, got ${typeof value}`,
    };
  }
  if (!PATTERNS.date.test(value)) {
    return {
      valid: false,
      message: `Invalid date format: "${value}". Must be YYYY, YYYY-MM, or YYYY-MM-DD`,
    };
  }
  return { valid: true };
}

function validateDateTime(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for dateTime, got ${typeof value}`,
    };
  }
  if (!PATTERNS.dateTime.test(value)) {
    return {
      valid: false,
      message: `Invalid dateTime format: "${value}"`,
    };
  }
  return { valid: true };
}

function validateTime(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for time, got ${typeof value}`,
    };
  }
  if (!PATTERNS.time.test(value)) {
    return {
      valid: false,
      message: `Invalid time format: "${value}". Must be hh:mm:ss[.sss]`,
    };
  }
  return { valid: true };
}

function validateInstant(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for instant, got ${typeof value}`,
    };
  }
  if (!PATTERNS.instant.test(value)) {
    return {
      valid: false,
      message: `Invalid instant format: "${value}". Must be YYYY-MM-DDThh:mm:ss[.sss]Z or with timezone`,
    };
  }
  return { valid: true };
}

function validateBase64Binary(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for base64Binary, got ${typeof value}`,
    };
  }
  // Remove whitespace before checking (base64 can have whitespace)
  const cleaned = value.replace(/\s/g, '');
  if (cleaned.length > 0 && !PATTERNS.base64Binary.test(cleaned)) {
    return {
      valid: false,
      message: `Invalid base64Binary format`,
    };
  }
  return { valid: true };
}

function validateXhtml(value: any): PrimitiveValidationResult {
  if (typeof value !== 'string') {
    return {
      valid: false,
      message: `Expected string for xhtml, got ${typeof value}`,
    };
  }
  if (!PATTERNS.xhtml.test(value)) {
    return {
      valid: false,
      message: `Invalid xhtml format. Must be wrapped in <div> element`,
    };
  }
  return { valid: true };
}
