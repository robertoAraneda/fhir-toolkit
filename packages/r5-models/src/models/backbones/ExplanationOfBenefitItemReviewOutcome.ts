import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitItemReviewOutcome,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitItemReviewOutcome */
const EXPLANATION_OF_BENEFIT_ITEM_REVIEW_OUTCOME_PROPERTIES = [
  'decision',
  'reason',
  'preAuthRef',
  '_preAuthRef',
  'preAuthPeriod',
] as const;

/**
 * ExplanationOfBenefitItemReviewOutcome - Adjudication results
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefititemreviewoutcome.html
 *
 * @example
 * const explanationOfBenefitItemReviewOutcome = new ExplanationOfBenefitItemReviewOutcome({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitItemReviewOutcome extends BackboneElement implements IExplanationOfBenefitItemReviewOutcome {

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

  constructor(data?: Partial<IExplanationOfBenefitItemReviewOutcome>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ITEM_REVIEW_OUTCOME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitItemReviewOutcome from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitItemReviewOutcome): ExplanationOfBenefitItemReviewOutcome {
    return new ExplanationOfBenefitItemReviewOutcome(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitItemReviewOutcome with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitItemReviewOutcome>): ExplanationOfBenefitItemReviewOutcome {
    return new ExplanationOfBenefitItemReviewOutcome({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitItemReviewOutcome by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitItemReviewOutcome) => Partial<IExplanationOfBenefitItemReviewOutcome>): ExplanationOfBenefitItemReviewOutcome {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitItemReviewOutcome({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitItemReviewOutcome)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitItemReviewOutcome {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ITEM_REVIEW_OUTCOME_PROPERTIES);
    return result as IExplanationOfBenefitItemReviewOutcome;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitItemReviewOutcome
   */
  clone(): ExplanationOfBenefitItemReviewOutcome {
    return new ExplanationOfBenefitItemReviewOutcome(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitItemReviewOutcome
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitItemReviewOutcome'];
    return parts.join(', ');
  }
}
