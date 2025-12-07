import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeAdministrationGuidelines,
  IMedicationKnowledgeAdministrationGuidelinesDosage,
  IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicationKnowledgeAdministrationGuidelines */
const MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_PROPERTIES = [
  'dosage',
  'indicationCodeableConcept',
  'indicationReference',
  'patientCharacteristics',
] as const;

/**
 * MedicationKnowledgeAdministrationGuidelines - Guidelines for administration of the medication
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeadministrationguidelines.html
 *
 * @example
 * const medicationKnowledgeAdministrationGuidelines = new MedicationKnowledgeAdministrationGuidelines({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeAdministrationGuidelines extends BackboneElement implements IMedicationKnowledgeAdministrationGuidelines {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Dosage for the medication for the specific guidelines */
  dosage?: IMedicationKnowledgeAdministrationGuidelinesDosage[];

  /** Indication for use that apply to the specific administration guidelines */
  indicationCodeableConcept?: ICodeableConcept;

  /** Indication for use that apply to the specific administration guidelines */
  indicationReference?: IReference;

  /** Characteristics of the patient that are relevant to the administration guidelines */
  patientCharacteristics?: IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeAdministrationGuidelines>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeAdministrationGuidelines from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeAdministrationGuidelines): MedicationKnowledgeAdministrationGuidelines {
    return new MedicationKnowledgeAdministrationGuidelines(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeAdministrationGuidelines with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeAdministrationGuidelines>): MedicationKnowledgeAdministrationGuidelines {
    return new MedicationKnowledgeAdministrationGuidelines({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeAdministrationGuidelines by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeAdministrationGuidelines) => Partial<IMedicationKnowledgeAdministrationGuidelines>): MedicationKnowledgeAdministrationGuidelines {
    const currentData = this.toJSON();
    return new MedicationKnowledgeAdministrationGuidelines({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeAdministrationGuidelines)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeAdministrationGuidelines {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_PROPERTIES);
    return result as IMedicationKnowledgeAdministrationGuidelines;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeAdministrationGuidelines
   */
  clone(): MedicationKnowledgeAdministrationGuidelines {
    return new MedicationKnowledgeAdministrationGuidelines(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeAdministrationGuidelines
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeAdministrationGuidelines'];
    return parts.join(', ');
  }
}
