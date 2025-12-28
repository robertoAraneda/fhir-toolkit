import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitPayment,
  IIdentifier,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitPayment */
const EXPLANATION_OF_BENEFIT_PAYMENT_PROPERTIES = [
  'type',
  'adjustment',
  'adjustmentReason',
  'date',
  '_date',
  'amount',
  'identifier',
] as const;

/**
 * ExplanationOfBenefitPayment - Payment Details
 *
 * @see https://hl7.org/fhir/R4B/explanationofbenefitpayment.html
 *
 * @example
 * const explanationOfBenefitPayment = new ExplanationOfBenefitPayment({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitPayment extends BackboneElement implements IExplanationOfBenefitPayment {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Partial or complete payment */
  type?: ICodeableConcept;

  /** Payment adjustment for non-claim issues */
  adjustment?: IMoney;

  /** Explanation for the variance */
  adjustmentReason?: ICodeableConcept;

  /** Expected date of payment */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Payable amount after adjustment */
  amount?: IMoney;

  /** Business identifier for the payment */
  identifier?: IIdentifier;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitPayment>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_PAYMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitPayment from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitPayment): ExplanationOfBenefitPayment {
    return new ExplanationOfBenefitPayment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitPayment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitPayment>): ExplanationOfBenefitPayment {
    return new ExplanationOfBenefitPayment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitPayment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitPayment) => Partial<IExplanationOfBenefitPayment>): ExplanationOfBenefitPayment {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitPayment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitPayment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitPayment {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_PAYMENT_PROPERTIES);
    return result as IExplanationOfBenefitPayment;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitPayment
   */
  clone(): ExplanationOfBenefitPayment {
    return new ExplanationOfBenefitPayment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitPayment
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitPayment'];
    return parts.join(', ');
  }
}
