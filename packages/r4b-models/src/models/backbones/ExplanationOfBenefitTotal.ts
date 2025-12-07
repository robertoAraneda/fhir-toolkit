import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitTotal,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitTotal */
const EXPLANATION_OF_BENEFIT_TOTAL_PROPERTIES = [
  'category',
  'amount',
] as const;

/**
 * ExplanationOfBenefitTotal - Adjudication totals
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefittotal.html
 *
 * @example
 * const explanationOfBenefitTotal = new ExplanationOfBenefitTotal({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitTotal extends BackboneElement implements IExplanationOfBenefitTotal {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of adjudication information */
  category: ICodeableConcept;

  /** Financial total for the category */
  amount: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitTotal>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_TOTAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitTotal from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitTotal): ExplanationOfBenefitTotal {
    return new ExplanationOfBenefitTotal(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitTotal with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitTotal>): ExplanationOfBenefitTotal {
    return new ExplanationOfBenefitTotal({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitTotal by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitTotal) => Partial<IExplanationOfBenefitTotal>): ExplanationOfBenefitTotal {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitTotal({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitTotal)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitTotal {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_TOTAL_PROPERTIES);
    return result as IExplanationOfBenefitTotal;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitTotal
   */
  clone(): ExplanationOfBenefitTotal {
    return new ExplanationOfBenefitTotal(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitTotal
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitTotal'];
    return parts.join(', ');
  }
}
