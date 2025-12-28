import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics */
const MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_PATIENT_CHARACTERISTICS_PROPERTIES = [
  'characteristicCodeableConcept',
  'characteristicQuantity',
  'value',
  '_value',
] as const;

/**
 * MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics - Characteristics of the patient that are relevant to the administration guidelines
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgeadministrationguidelinespatientcharacteristics.html
 *
 * @example
 * const medicationKnowledgeAdministrationGuidelinesPatientCharacteristics = new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement implements IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Specific characteristic that is relevant to the administration guideline */
  characteristicCodeableConcept?: ICodeableConcept;

  /** Specific characteristic that is relevant to the administration guideline */
  characteristicQuantity?: IQuantity;

  /** The specific characteristic */
  value?: string[];

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_PATIENT_CHARACTERISTICS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    return new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    return new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics) => Partial<IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics>): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    const currentData = this.toJSON();
    return new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_PATIENT_CHARACTERISTICS_PROPERTIES);
    return result as IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
   */
  clone(): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    return new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics'];
    return parts.join(', ');
  }
}
