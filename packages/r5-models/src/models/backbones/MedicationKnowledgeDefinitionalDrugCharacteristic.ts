import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  IMedicationKnowledgeDefinitionalDrugCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeDefinitionalDrugCharacteristic */
const MEDICATION_KNOWLEDGE_DEFINITIONAL_DRUG_CHARACTERISTIC_PROPERTIES = [
  'type',
  'valueCodeableConcept',
  'valueString',
  '_valueString',
  'valueQuantity',
  'valueBase64Binary',
  '_valueBase64Binary',
  'valueAttachment',
] as const;

/**
 * MedicationKnowledgeDefinitionalDrugCharacteristic - Specifies descriptive properties of the medicine
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgedefinitionaldrugcharacteristic.html
 *
 * @example
 * const medicationKnowledgeDefinitionalDrugCharacteristic = new MedicationKnowledgeDefinitionalDrugCharacteristic({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeDefinitionalDrugCharacteristic extends BackboneElement implements IMedicationKnowledgeDefinitionalDrugCharacteristic {

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

  /** Description of the characteristic */
  valueAttachment?: IAttachment;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeDefinitionalDrugCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_DEFINITIONAL_DRUG_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeDefinitionalDrugCharacteristic from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeDefinitionalDrugCharacteristic): MedicationKnowledgeDefinitionalDrugCharacteristic {
    return new MedicationKnowledgeDefinitionalDrugCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeDefinitionalDrugCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeDefinitionalDrugCharacteristic>): MedicationKnowledgeDefinitionalDrugCharacteristic {
    return new MedicationKnowledgeDefinitionalDrugCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeDefinitionalDrugCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeDefinitionalDrugCharacteristic) => Partial<IMedicationKnowledgeDefinitionalDrugCharacteristic>): MedicationKnowledgeDefinitionalDrugCharacteristic {
    const currentData = this.toJSON();
    return new MedicationKnowledgeDefinitionalDrugCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeDefinitionalDrugCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeDefinitionalDrugCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_DEFINITIONAL_DRUG_CHARACTERISTIC_PROPERTIES);
    return result as IMedicationKnowledgeDefinitionalDrugCharacteristic;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeDefinitionalDrugCharacteristic
   */
  clone(): MedicationKnowledgeDefinitionalDrugCharacteristic {
    return new MedicationKnowledgeDefinitionalDrugCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeDefinitionalDrugCharacteristic
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeDefinitionalDrugCharacteristic'];
    return parts.join(', ');
  }
}
