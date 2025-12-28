import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimDiagnosis,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimDiagnosis */
const CLAIM_DIAGNOSIS_PROPERTIES = [
  'sequence',
  '_sequence',
  'diagnosisCodeableConcept',
  'diagnosisReference',
  'type',
  'onAdmission',
  'packageCode',
] as const;

/**
 * ClaimDiagnosis - Pertinent diagnosis information
 *
 * @see https://hl7.org/fhir/R4B/claimdiagnosis.html
 *
 * @example
 * const claimDiagnosis = new ClaimDiagnosis({
 *   // ... properties
 * });
 */
export class ClaimDiagnosis extends BackboneElement implements IClaimDiagnosis {

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

  /** Package billing code */
  packageCode?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimDiagnosis>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_DIAGNOSIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimDiagnosis from a JSON object
   */
  static fromJSON(json: IClaimDiagnosis): ClaimDiagnosis {
    return new ClaimDiagnosis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimDiagnosis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimDiagnosis>): ClaimDiagnosis {
    return new ClaimDiagnosis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimDiagnosis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimDiagnosis) => Partial<IClaimDiagnosis>): ClaimDiagnosis {
    const currentData = this.toJSON();
    return new ClaimDiagnosis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimDiagnosis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimDiagnosis {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_DIAGNOSIS_PROPERTIES);
    return result as IClaimDiagnosis;
  }

  /**
   * Create a deep clone of this ClaimDiagnosis
   */
  clone(): ClaimDiagnosis {
    return new ClaimDiagnosis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimDiagnosis
   */
  toString(): string {
    const parts: string[] = ['ClaimDiagnosis'];
    return parts.join(', ');
  }
}
