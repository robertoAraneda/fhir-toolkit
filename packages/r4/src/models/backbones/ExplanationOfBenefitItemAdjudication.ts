import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ExplanationOfBenefitItemAdjudication */
const EXPLANATION_OF_BENEFIT_ITEM_ADJUDICATION_PROPERTIES = [
  'category',
  'reason',
  'amount',
  'value',
  '_value',
] as const;

/**
 * ExplanationOfBenefitItemAdjudication - Adjudication details
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefititemadjudication.html
 *
 * @example
 * const explanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitItemAdjudication extends BackboneElement implements IExplanationOfBenefitItemAdjudication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of adjudication information */
  category: ICodeableConcept;

  /** Explanation of adjudication outcome */
  reason?: ICodeableConcept;

  /** Monetary amount */
  amount?: IMoney;

  /** Non-monitary value */
  value?: number;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitItemAdjudication>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ITEM_ADJUDICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitItemAdjudication from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitItemAdjudication): ExplanationOfBenefitItemAdjudication {
    return new ExplanationOfBenefitItemAdjudication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitItemAdjudication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitItemAdjudication>): ExplanationOfBenefitItemAdjudication {
    return new ExplanationOfBenefitItemAdjudication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitItemAdjudication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitItemAdjudication) => Partial<IExplanationOfBenefitItemAdjudication>): ExplanationOfBenefitItemAdjudication {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitItemAdjudication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitItemAdjudication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitItemAdjudication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ITEM_ADJUDICATION_PROPERTIES);
    return result as IExplanationOfBenefitItemAdjudication;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitItemAdjudication
   */
  clone(): ExplanationOfBenefitItemAdjudication {
    return new ExplanationOfBenefitItemAdjudication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitItemAdjudication
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitItemAdjudication'];
    return parts.join(', ');
  }
}
