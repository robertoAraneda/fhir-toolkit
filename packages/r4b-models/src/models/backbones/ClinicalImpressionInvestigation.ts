import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalImpressionInvestigation,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClinicalImpressionInvestigation */
const CLINICAL_IMPRESSION_INVESTIGATION_PROPERTIES = [
  'code',
  'item',
] as const;

/**
 * ClinicalImpressionInvestigation - One or more sets of investigations (signs, symptoms, etc.)
 *
 * @see https://hl7.org/fhir/R4B/clinicalimpressioninvestigation.html
 *
 * @example
 * const clinicalImpressionInvestigation = new ClinicalImpressionInvestigation({
 *   // ... properties
 * });
 */
export class ClinicalImpressionInvestigation extends BackboneElement implements IClinicalImpressionInvestigation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A name/code for the set */
  code: ICodeableConcept;

  /** Record of a specific investigation */
  item?: IReference<'Observation' | 'QuestionnaireResponse' | 'FamilyMemberHistory' | 'DiagnosticReport' | 'RiskAssessment' | 'ImagingStudy' | 'Media'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalImpressionInvestigation>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_IMPRESSION_INVESTIGATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalImpressionInvestigation from a JSON object
   */
  static fromJSON(json: IClinicalImpressionInvestigation): ClinicalImpressionInvestigation {
    return new ClinicalImpressionInvestigation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalImpressionInvestigation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalImpressionInvestigation>): ClinicalImpressionInvestigation {
    return new ClinicalImpressionInvestigation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalImpressionInvestigation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalImpressionInvestigation) => Partial<IClinicalImpressionInvestigation>): ClinicalImpressionInvestigation {
    const currentData = this.toJSON();
    return new ClinicalImpressionInvestigation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalImpressionInvestigation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalImpressionInvestigation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_IMPRESSION_INVESTIGATION_PROPERTIES);
    return result as IClinicalImpressionInvestigation;
  }

  /**
   * Create a deep clone of this ClinicalImpressionInvestigation
   */
  clone(): ClinicalImpressionInvestigation {
    return new ClinicalImpressionInvestigation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalImpressionInvestigation
   */
  toString(): string {
    const parts: string[] = ['ClinicalImpressionInvestigation'];
    return parts.join(', ');
  }
}
