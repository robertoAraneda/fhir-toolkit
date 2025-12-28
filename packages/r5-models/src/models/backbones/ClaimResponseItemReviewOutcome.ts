import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseItemReviewOutcome,
  ICodeableConcept,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimResponseItemReviewOutcome */
const CLAIM_RESPONSE_ITEM_REVIEW_OUTCOME_PROPERTIES = [
  'decision',
  'reason',
  'preAuthRef',
  '_preAuthRef',
  'preAuthPeriod',
] as const;

/**
 * ClaimResponseItemReviewOutcome - Adjudication results
 *
 * @see https://hl7.org/fhir/R5/claimresponseitemreviewoutcome.html
 *
 * @example
 * const claimResponseItemReviewOutcome = new ClaimResponseItemReviewOutcome({
 *   // ... properties
 * });
 */
export class ClaimResponseItemReviewOutcome extends BackboneElement implements IClaimResponseItemReviewOutcome {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Result of the adjudication */
  decision?: ICodeableConcept;

  /** Reason for result of the adjudication */
  reason?: ICodeableConcept[];

  /** Preauthorization reference */
  preAuthRef?: string;

  /** Extension for preAuthRef */
  _preAuthRef?: IElement;

  /** Preauthorization reference effective period */
  preAuthPeriod?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseItemReviewOutcome>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ITEM_REVIEW_OUTCOME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseItemReviewOutcome from a JSON object
   */
  static fromJSON(json: IClaimResponseItemReviewOutcome): ClaimResponseItemReviewOutcome {
    return new ClaimResponseItemReviewOutcome(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseItemReviewOutcome with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseItemReviewOutcome>): ClaimResponseItemReviewOutcome {
    return new ClaimResponseItemReviewOutcome({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseItemReviewOutcome by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseItemReviewOutcome) => Partial<IClaimResponseItemReviewOutcome>): ClaimResponseItemReviewOutcome {
    const currentData = this.toJSON();
    return new ClaimResponseItemReviewOutcome({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseItemReviewOutcome)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseItemReviewOutcome {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ITEM_REVIEW_OUTCOME_PROPERTIES);
    return result as IClaimResponseItemReviewOutcome;
  }

  /**
   * Create a deep clone of this ClaimResponseItemReviewOutcome
   */
  clone(): ClaimResponseItemReviewOutcome {
    return new ClaimResponseItemReviewOutcome(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseItemReviewOutcome
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseItemReviewOutcome'];
    return parts.join(', ');
  }
}
