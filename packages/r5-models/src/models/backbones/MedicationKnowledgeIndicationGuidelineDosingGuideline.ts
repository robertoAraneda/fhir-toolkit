import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeIndicationGuidelineDosingGuideline,
  IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage,
  IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeIndicationGuidelineDosingGuideline */
const MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_PROPERTIES = [
  'treatmentIntent',
  'dosage',
  'administrationTreatment',
  'patientCharacteristic',
] as const;

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuideline - Guidelines for dosage of the medication
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeindicationguidelinedosingguideline.html
 *
 * @example
 * const medicationKnowledgeIndicationGuidelineDosingGuideline = new MedicationKnowledgeIndicationGuidelineDosingGuideline({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuideline extends BackboneElement implements IMedicationKnowledgeIndicationGuidelineDosingGuideline {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Intention of the treatment */
  treatmentIntent?: ICodeableConcept;

  /** Dosage for the medication for the specific guidelines */
  dosage?: IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage[];

  /** Type of treatment the guideline applies to */
  administrationTreatment?: ICodeableConcept;

  /** Characteristics of the patient that are relevant to the administration guidelines */
  patientCharacteristic?: IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeIndicationGuidelineDosingGuideline>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeIndicationGuidelineDosingGuideline from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeIndicationGuidelineDosingGuideline): MedicationKnowledgeIndicationGuidelineDosingGuideline {
    return new MedicationKnowledgeIndicationGuidelineDosingGuideline(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeIndicationGuidelineDosingGuideline with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeIndicationGuidelineDosingGuideline>): MedicationKnowledgeIndicationGuidelineDosingGuideline {
    return new MedicationKnowledgeIndicationGuidelineDosingGuideline({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeIndicationGuidelineDosingGuideline by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeIndicationGuidelineDosingGuideline) => Partial<IMedicationKnowledgeIndicationGuidelineDosingGuideline>): MedicationKnowledgeIndicationGuidelineDosingGuideline {
    const currentData = this.toJSON();
    return new MedicationKnowledgeIndicationGuidelineDosingGuideline({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeIndicationGuidelineDosingGuideline)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeIndicationGuidelineDosingGuideline {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_PROPERTIES);
    return result as IMedicationKnowledgeIndicationGuidelineDosingGuideline;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeIndicationGuidelineDosingGuideline
   */
  clone(): MedicationKnowledgeIndicationGuidelineDosingGuideline {
    return new MedicationKnowledgeIndicationGuidelineDosingGuideline(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeIndicationGuidelineDosingGuideline
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeIndicationGuidelineDosingGuideline'];
    return parts.join(', ');
  }
}
