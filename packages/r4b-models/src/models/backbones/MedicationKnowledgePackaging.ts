import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgePackaging,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationKnowledgePackaging */
const MEDICATION_KNOWLEDGE_PACKAGING_PROPERTIES = [
  'type',
  'quantity',
] as const;

/**
 * MedicationKnowledgePackaging - Details about packaged medications
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgepackaging.html
 *
 * @example
 * const medicationKnowledgePackaging = new MedicationKnowledgePackaging({
 *   // ... properties
 * });
 */
export class MedicationKnowledgePackaging extends BackboneElement implements IMedicationKnowledgePackaging {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A code that defines the specific type of packaging that the medication can be found in */
  type?: ICodeableConcept;

  /** The number of product units the package would contain if fully loaded */
  quantity?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgePackaging>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_PACKAGING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgePackaging from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgePackaging): MedicationKnowledgePackaging {
    return new MedicationKnowledgePackaging(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgePackaging with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgePackaging>): MedicationKnowledgePackaging {
    return new MedicationKnowledgePackaging({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgePackaging by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgePackaging) => Partial<IMedicationKnowledgePackaging>): MedicationKnowledgePackaging {
    const currentData = this.toJSON();
    return new MedicationKnowledgePackaging({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgePackaging)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgePackaging {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_PACKAGING_PROPERTIES);
    return result as IMedicationKnowledgePackaging;
  }

  /**
   * Create a deep clone of this MedicationKnowledgePackaging
   */
  clone(): MedicationKnowledgePackaging {
    return new MedicationKnowledgePackaging(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgePackaging
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgePackaging'];
    return parts.join(', ');
  }
}
