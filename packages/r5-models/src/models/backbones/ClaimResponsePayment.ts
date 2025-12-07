import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponsePayment,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimResponsePayment */
const CLAIM_RESPONSE_PAYMENT_PROPERTIES = [
  'type',
  'adjustment',
  'adjustmentReason',
  'date',
  '_date',
  'amount',
  'identifier',
] as const;

/**
 * ClaimResponsePayment - Payment Details
 *
 * @see https://hl7.org/fhir/R4/claimresponsepayment.html
 *
 * @example
 * const claimResponsePayment = new ClaimResponsePayment({
 *   // ... properties
 * });
 */
export class ClaimResponsePayment extends BackboneElement implements IClaimResponsePayment {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Partial or complete payment */
  type: ICodeableConcept;

  /** Payment adjustment for non-claim issues */
  adjustment?: IMoney;

  /** Explanation for the adjustment */
  adjustmentReason?: ICodeableConcept;

  /** Expected date of payment */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Payable amount after adjustment */
  amount: IMoney;

  /** Business identifier for the payment */
  identifier?: IIdentifier;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponsePayment>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_PAYMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponsePayment from a JSON object
   */
  static fromJSON(json: IClaimResponsePayment): ClaimResponsePayment {
    return new ClaimResponsePayment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponsePayment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponsePayment>): ClaimResponsePayment {
    return new ClaimResponsePayment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponsePayment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponsePayment) => Partial<IClaimResponsePayment>): ClaimResponsePayment {
    const currentData = this.toJSON();
    return new ClaimResponsePayment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponsePayment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponsePayment {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_PAYMENT_PROPERTIES);
    return result as IClaimResponsePayment;
  }

  /**
   * Create a deep clone of this ClaimResponsePayment
   */
  clone(): ClaimResponsePayment {
    return new ClaimResponsePayment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponsePayment
   */
  toString(): string {
    const parts: string[] = ['ClaimResponsePayment'];
    return parts.join(', ');
  }
}
