import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic */
const MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_PATIENT_CHARACTERISTIC_PROPERTIES = [
  'type',
  'valueCodeableConcept',
  'valueQuantity',
  'valueRange',
] as const;

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic - Characteristics of the patient that are relevant to the administration guidelines
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeindicationguidelinedosingguidelinepatientcharacteristic.html
 *
 * @example
 * const medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic = new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic extends BackboneElement implements IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Categorization of specific characteristic that is relevant to the administration guideline */
  type: ICodeableConcept;

  /** The specific characteristic */
  valueCodeableConcept?: ICodeableConcept;

  /** The specific characteristic */
  valueQuantity?: IQuantity;

  /** The specific characteristic */
  valueRange?: IRange;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_PATIENT_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic>): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic) => Partial<IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic>): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {
    const currentData = this.toJSON();
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_PATIENT_CHARACTERISTIC_PROPERTIES);
    return result as IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic
   */
  clone(): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic'];
    return parts.join(', ');
  }
}
