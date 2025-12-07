import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeRelatedMedicationKnowledge,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicationKnowledgeRelatedMedicationKnowledge */
const MEDICATION_KNOWLEDGE_RELATED_MEDICATION_KNOWLEDGE_PROPERTIES = [
  'type',
  'reference',
] as const;

/**
 * MedicationKnowledgeRelatedMedicationKnowledge - Associated or related medication information
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgerelatedmedicationknowledge.html
 *
 * @example
 * const medicationKnowledgeRelatedMedicationKnowledge = new MedicationKnowledgeRelatedMedicationKnowledge({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeRelatedMedicationKnowledge extends BackboneElement implements IMedicationKnowledgeRelatedMedicationKnowledge {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Category of medicationKnowledge */
  type: ICodeableConcept;

  /** Associated documentation about the associated medication knowledge */
  reference: IReference<'MedicationKnowledge'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeRelatedMedicationKnowledge>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_RELATED_MEDICATION_KNOWLEDGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeRelatedMedicationKnowledge from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeRelatedMedicationKnowledge): MedicationKnowledgeRelatedMedicationKnowledge {
    return new MedicationKnowledgeRelatedMedicationKnowledge(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeRelatedMedicationKnowledge with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeRelatedMedicationKnowledge>): MedicationKnowledgeRelatedMedicationKnowledge {
    return new MedicationKnowledgeRelatedMedicationKnowledge({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeRelatedMedicationKnowledge by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeRelatedMedicationKnowledge) => Partial<IMedicationKnowledgeRelatedMedicationKnowledge>): MedicationKnowledgeRelatedMedicationKnowledge {
    const currentData = this.toJSON();
    return new MedicationKnowledgeRelatedMedicationKnowledge({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeRelatedMedicationKnowledge)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeRelatedMedicationKnowledge {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_RELATED_MEDICATION_KNOWLEDGE_PROPERTIES);
    return result as IMedicationKnowledgeRelatedMedicationKnowledge;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeRelatedMedicationKnowledge
   */
  clone(): MedicationKnowledgeRelatedMedicationKnowledge {
    return new MedicationKnowledgeRelatedMedicationKnowledge(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeRelatedMedicationKnowledge
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeRelatedMedicationKnowledge'];
    return parts.join(', ');
  }
}
