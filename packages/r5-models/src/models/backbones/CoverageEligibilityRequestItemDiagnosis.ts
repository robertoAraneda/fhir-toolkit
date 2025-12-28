import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityRequestItemDiagnosis,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageEligibilityRequestItemDiagnosis */
const COVERAGE_ELIGIBILITY_REQUEST_ITEM_DIAGNOSIS_PROPERTIES = [
  'diagnosisCodeableConcept',
  'diagnosisReference',
] as const;

/**
 * CoverageEligibilityRequestItemDiagnosis - Applicable diagnosis
 *
 * @see https://hl7.org/fhir/R5/coverageeligibilityrequestitemdiagnosis.html
 *
 * @example
 * const coverageEligibilityRequestItemDiagnosis = new CoverageEligibilityRequestItemDiagnosis({
 *   // ... properties
 * });
 */
export class CoverageEligibilityRequestItemDiagnosis extends BackboneElement implements ICoverageEligibilityRequestItemDiagnosis {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Nature of illness or problem */
  diagnosisCodeableConcept?: ICodeableConcept;

  /** Nature of illness or problem */
  diagnosisReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityRequestItemDiagnosis>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_REQUEST_ITEM_DIAGNOSIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityRequestItemDiagnosis from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityRequestItemDiagnosis): CoverageEligibilityRequestItemDiagnosis {
    return new CoverageEligibilityRequestItemDiagnosis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityRequestItemDiagnosis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityRequestItemDiagnosis>): CoverageEligibilityRequestItemDiagnosis {
    return new CoverageEligibilityRequestItemDiagnosis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityRequestItemDiagnosis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityRequestItemDiagnosis) => Partial<ICoverageEligibilityRequestItemDiagnosis>): CoverageEligibilityRequestItemDiagnosis {
    const currentData = this.toJSON();
    return new CoverageEligibilityRequestItemDiagnosis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityRequestItemDiagnosis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityRequestItemDiagnosis {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_REQUEST_ITEM_DIAGNOSIS_PROPERTIES);
    return result as ICoverageEligibilityRequestItemDiagnosis;
  }

  /**
   * Create a deep clone of this CoverageEligibilityRequestItemDiagnosis
   */
  clone(): CoverageEligibilityRequestItemDiagnosis {
    return new CoverageEligibilityRequestItemDiagnosis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityRequestItemDiagnosis
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityRequestItemDiagnosis'];
    return parts.join(', ');
  }
}
