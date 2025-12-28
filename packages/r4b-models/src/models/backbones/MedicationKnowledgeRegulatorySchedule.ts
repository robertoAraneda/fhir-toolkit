import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeRegulatorySchedule,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationKnowledgeRegulatorySchedule */
const MEDICATION_KNOWLEDGE_REGULATORY_SCHEDULE_PROPERTIES = [
  'schedule',
] as const;

/**
 * MedicationKnowledgeRegulatorySchedule - Specifies the schedule of a medication in jurisdiction
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgeregulatoryschedule.html
 *
 * @example
 * const medicationKnowledgeRegulatorySchedule = new MedicationKnowledgeRegulatorySchedule({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeRegulatorySchedule extends BackboneElement implements IMedicationKnowledgeRegulatorySchedule {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Specifies the specific drug schedule */
  schedule: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeRegulatorySchedule>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_REGULATORY_SCHEDULE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeRegulatorySchedule from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeRegulatorySchedule): MedicationKnowledgeRegulatorySchedule {
    return new MedicationKnowledgeRegulatorySchedule(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeRegulatorySchedule with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeRegulatorySchedule>): MedicationKnowledgeRegulatorySchedule {
    return new MedicationKnowledgeRegulatorySchedule({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeRegulatorySchedule by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeRegulatorySchedule) => Partial<IMedicationKnowledgeRegulatorySchedule>): MedicationKnowledgeRegulatorySchedule {
    const currentData = this.toJSON();
    return new MedicationKnowledgeRegulatorySchedule({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeRegulatorySchedule)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeRegulatorySchedule {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_REGULATORY_SCHEDULE_PROPERTIES);
    return result as IMedicationKnowledgeRegulatorySchedule;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeRegulatorySchedule
   */
  clone(): MedicationKnowledgeRegulatorySchedule {
    return new MedicationKnowledgeRegulatorySchedule(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeRegulatorySchedule
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeRegulatorySchedule'];
    return parts.join(', ');
  }
}
