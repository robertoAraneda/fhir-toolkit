import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeMedicineClassification,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicationKnowledgeMedicineClassification */
const MEDICATION_KNOWLEDGE_MEDICINE_CLASSIFICATION_PROPERTIES = [
  'type',
  'classification',
] as const;

/**
 * MedicationKnowledgeMedicineClassification - Categorization of the medication within a formulary or classification system
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgemedicineclassification.html
 *
 * @example
 * const medicationKnowledgeMedicineClassification = new MedicationKnowledgeMedicineClassification({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeMedicineClassification extends BackboneElement implements IMedicationKnowledgeMedicineClassification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) */
  type: ICodeableConcept;

  /** Specific category assigned to the medication */
  classification?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeMedicineClassification>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_MEDICINE_CLASSIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeMedicineClassification from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeMedicineClassification): MedicationKnowledgeMedicineClassification {
    return new MedicationKnowledgeMedicineClassification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeMedicineClassification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeMedicineClassification>): MedicationKnowledgeMedicineClassification {
    return new MedicationKnowledgeMedicineClassification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeMedicineClassification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeMedicineClassification) => Partial<IMedicationKnowledgeMedicineClassification>): MedicationKnowledgeMedicineClassification {
    const currentData = this.toJSON();
    return new MedicationKnowledgeMedicineClassification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeMedicineClassification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeMedicineClassification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_MEDICINE_CLASSIFICATION_PROPERTIES);
    return result as IMedicationKnowledgeMedicineClassification;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeMedicineClassification
   */
  clone(): MedicationKnowledgeMedicineClassification {
    return new MedicationKnowledgeMedicineClassification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeMedicineClassification
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeMedicineClassification'];
    return parts.join(', ');
  }
}
