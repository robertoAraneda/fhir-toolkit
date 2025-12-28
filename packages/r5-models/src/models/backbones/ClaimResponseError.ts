import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseError,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimResponseError */
const CLAIM_RESPONSE_ERROR_PROPERTIES = [
  'itemSequence',
  '_itemSequence',
  'detailSequence',
  '_detailSequence',
  'subDetailSequence',
  '_subDetailSequence',
  'code',
  'expression',
  '_expression',
] as const;

/**
 * ClaimResponseError - Processing errors
 *
 * @see https://hl7.org/fhir/R5/claimresponseerror.html
 *
 * @example
 * const claimResponseError = new ClaimResponseError({
 *   // ... properties
 * });
 */
export class ClaimResponseError extends BackboneElement implements IClaimResponseError {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Item sequence number */
  itemSequence?: number;

  /** Extension for itemSequence */
  _itemSequence?: IElement;

  /** Detail sequence number */
  detailSequence?: number;

  /** Extension for detailSequence */
  _detailSequence?: IElement;

  /** Subdetail sequence number */
  subDetailSequence?: number;

  /** Extension for subDetailSequence */
  _subDetailSequence?: IElement;

  /** Error code detailing processing issues */
  code: ICodeableConcept;

  /** FHIRPath of element(s) related to issue */
  expression?: string[];

  /** Extension for expression */
  _expression?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseError>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ERROR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseError from a JSON object
   */
  static fromJSON(json: IClaimResponseError): ClaimResponseError {
    return new ClaimResponseError(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseError with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseError>): ClaimResponseError {
    return new ClaimResponseError({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseError by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseError) => Partial<IClaimResponseError>): ClaimResponseError {
    const currentData = this.toJSON();
    return new ClaimResponseError({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseError)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseError {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ERROR_PROPERTIES);
    return result as IClaimResponseError;
  }

  /**
   * Create a deep clone of this ClaimResponseError
   */
  clone(): ClaimResponseError {
    return new ClaimResponseError(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseError
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseError'];
    return parts.join(', ');
  }
}
