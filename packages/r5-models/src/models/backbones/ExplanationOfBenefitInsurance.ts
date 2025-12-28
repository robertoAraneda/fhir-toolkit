import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IExplanationOfBenefitInsurance,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitInsurance */
const EXPLANATION_OF_BENEFIT_INSURANCE_PROPERTIES = [
  'focal',
  '_focal',
  'coverage',
  'preAuthRef',
  '_preAuthRef',
] as const;

/**
 * ExplanationOfBenefitInsurance - Patient insurance information
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitinsurance.html
 *
 * @example
 * const explanationOfBenefitInsurance = new ExplanationOfBenefitInsurance({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitInsurance extends BackboneElement implements IExplanationOfBenefitInsurance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Coverage to be used for adjudication */
  focal: boolean;

  /** Extension for focal */
  _focal?: IElement;

  /** Insurance information */
  coverage: IReference<'Coverage'>;

  /** Prior authorization reference number */
  preAuthRef?: string[];

  /** Extension for preAuthRef */
  _preAuthRef?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitInsurance>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_INSURANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitInsurance from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitInsurance): ExplanationOfBenefitInsurance {
    return new ExplanationOfBenefitInsurance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitInsurance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitInsurance>): ExplanationOfBenefitInsurance {
    return new ExplanationOfBenefitInsurance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitInsurance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitInsurance) => Partial<IExplanationOfBenefitInsurance>): ExplanationOfBenefitInsurance {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitInsurance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitInsurance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitInsurance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_INSURANCE_PROPERTIES);
    return result as IExplanationOfBenefitInsurance;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitInsurance
   */
  clone(): ExplanationOfBenefitInsurance {
    return new ExplanationOfBenefitInsurance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitInsurance
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitInsurance'];
    return parts.join(', ');
  }
}
