import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitDiagnosis,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitDiagnosis */
const EXPLANATION_OF_BENEFIT_DIAGNOSIS_PROPERTIES = [
  'sequence',
  '_sequence',
  'diagnosisCodeableConcept',
  'diagnosisReference',
  'type',
  'onAdmission',
] as const;

/**
 * ExplanationOfBenefitDiagnosis - Pertinent diagnosis information
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitdiagnosis.html
 *
 * @example
 * const explanationOfBenefitDiagnosis = new ExplanationOfBenefitDiagnosis({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitDiagnosis extends BackboneElement implements IExplanationOfBenefitDiagnosis {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Diagnosis instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Nature of illness or problem */
  diagnosisCodeableConcept?: ICodeableConcept;

  /** Nature of illness or problem */
  diagnosisReference?: IReference;

  /** Timing or nature of the diagnosis */
  type?: ICodeableConcept[];

  /** Present on admission */
  onAdmission?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitDiagnosis>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_DIAGNOSIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitDiagnosis from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitDiagnosis): ExplanationOfBenefitDiagnosis {
    return new ExplanationOfBenefitDiagnosis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitDiagnosis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitDiagnosis>): ExplanationOfBenefitDiagnosis {
    return new ExplanationOfBenefitDiagnosis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitDiagnosis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitDiagnosis) => Partial<IExplanationOfBenefitDiagnosis>): ExplanationOfBenefitDiagnosis {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitDiagnosis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitDiagnosis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitDiagnosis {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_DIAGNOSIS_PROPERTIES);
    return result as IExplanationOfBenefitDiagnosis;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitDiagnosis
   */
  clone(): ExplanationOfBenefitDiagnosis {
    return new ExplanationOfBenefitDiagnosis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitDiagnosis
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitDiagnosis'];
    return parts.join(', ');
  }
}
