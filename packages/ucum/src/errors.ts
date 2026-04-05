/**
 * Indicates an invalid UCUM code.
 */
export class UcumValidationError extends Error {
  readonly code: string;
  readonly offset: number;

  constructor(code: string, message: string, offset: number = -1) {
    const msg =
      offset >= 0
        ? `invalid UCUM code "${code}" at position ${offset}: ${message}`
        : `invalid UCUM code "${code}": ${message}`;
    super(msg);
    this.name = 'UcumValidationError';
    this.code = code;
    this.offset = offset;
  }
}

/**
 * Indicates a failed unit conversion.
 */
export class UcumConversionError extends Error {
  readonly from: string;
  readonly to: string;

  constructor(from: string, to: string, message: string) {
    super(`cannot convert "${from}" to "${to}": ${message}`);
    this.name = 'UcumConversionError';
    this.from = from;
    this.to = to;
  }
}
