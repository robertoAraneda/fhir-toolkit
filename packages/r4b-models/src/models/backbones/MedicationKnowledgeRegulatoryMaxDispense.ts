import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDuration,
  IMedicationKnowledgeRegulatoryMaxDispense,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationKnowledgeRegulatoryMaxDispense */
const MEDICATION_KNOWLEDGE_REGULATORY_MAX_DISPENSE_PROPERTIES = [
  'quantity',
  'period',
] as const;

/**
 * MedicationKnowledgeRegulatoryMaxDispense - The maximum number of units of the medication that can be dispensed in a period
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeregulatorymaxdispense.html
 *
 * @example
 * const medicationKnowledgeRegulatoryMaxDispense = new MedicationKnowledgeRegulatoryMaxDispense({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement implements IMedicationKnowledgeRegulatoryMaxDispense {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The maximum number of units of the medication that can be dispensed */
  quantity: IQuantity;

  /** The period that applies to the maximum number of units */
  period?: IDuration;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeRegulatoryMaxDispense>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_REGULATORY_MAX_DISPENSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeRegulatoryMaxDispense from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeRegulatoryMaxDispense): MedicationKnowledgeRegulatoryMaxDispense {
    return new MedicationKnowledgeRegulatoryMaxDispense(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeRegulatoryMaxDispense with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeRegulatoryMaxDispense>): MedicationKnowledgeRegulatoryMaxDispense {
    return new MedicationKnowledgeRegulatoryMaxDispense({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeRegulatoryMaxDispense by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeRegulatoryMaxDispense) => Partial<IMedicationKnowledgeRegulatoryMaxDispense>): MedicationKnowledgeRegulatoryMaxDispense {
    const currentData = this.toJSON();
    return new MedicationKnowledgeRegulatoryMaxDispense({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeRegulatoryMaxDispense)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeRegulatoryMaxDispense {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_REGULATORY_MAX_DISPENSE_PROPERTIES);
    return result as IMedicationKnowledgeRegulatoryMaxDispense;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeRegulatoryMaxDispense
   */
  clone(): MedicationKnowledgeRegulatoryMaxDispense {
    return new MedicationKnowledgeRegulatoryMaxDispense(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeRegulatoryMaxDispense
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeRegulatoryMaxDispense'];
    return parts.join(', ');
  }
}
