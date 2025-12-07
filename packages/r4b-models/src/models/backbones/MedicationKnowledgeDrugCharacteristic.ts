import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationKnowledgeDrugCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationKnowledgeDrugCharacteristic */
const MEDICATION_KNOWLEDGE_DRUG_CHARACTERISTIC_PROPERTIES = [
  'type',
  'valueCodeableConcept',
  'valueString',
  '_valueString',
  'valueQuantity',
  'valueBase64Binary',
  '_valueBase64Binary',
] as const;

/**
 * MedicationKnowledgeDrugCharacteristic - Specifies descriptive properties of the medicine
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgedrugcharacteristic.html
 *
 * @example
 * const medicationKnowledgeDrugCharacteristic = new MedicationKnowledgeDrugCharacteristic({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeDrugCharacteristic extends BackboneElement implements IMedicationKnowledgeDrugCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code specifying the type of characteristic of medication */
  type?: ICodeableConcept;

  /** Description of the characteristic */
  valueCodeableConcept?: ICodeableConcept;

  /** Description of the characteristic */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Description of the characteristic */
  valueQuantity?: IQuantity;

  /** Description of the characteristic */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeDrugCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_DRUG_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeDrugCharacteristic from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeDrugCharacteristic): MedicationKnowledgeDrugCharacteristic {
    return new MedicationKnowledgeDrugCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeDrugCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeDrugCharacteristic>): MedicationKnowledgeDrugCharacteristic {
    return new MedicationKnowledgeDrugCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeDrugCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeDrugCharacteristic) => Partial<IMedicationKnowledgeDrugCharacteristic>): MedicationKnowledgeDrugCharacteristic {
    const currentData = this.toJSON();
    return new MedicationKnowledgeDrugCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeDrugCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeDrugCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_DRUG_CHARACTERISTIC_PROPERTIES);
    return result as IMedicationKnowledgeDrugCharacteristic;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeDrugCharacteristic
   */
  clone(): MedicationKnowledgeDrugCharacteristic {
    return new MedicationKnowledgeDrugCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeDrugCharacteristic
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeDrugCharacteristic'];
    return parts.join(', ');
  }
}
