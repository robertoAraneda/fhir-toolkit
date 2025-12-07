import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationKnowledgeMonitoringProgram,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicationKnowledgeMonitoringProgram */
const MEDICATION_KNOWLEDGE_MONITORING_PROGRAM_PROPERTIES = [
  'type',
  'name',
  '_name',
] as const;

/**
 * MedicationKnowledgeMonitoringProgram - Program under which a medication is reviewed
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgemonitoringprogram.html
 *
 * @example
 * const medicationKnowledgeMonitoringProgram = new MedicationKnowledgeMonitoringProgram({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeMonitoringProgram extends BackboneElement implements IMedicationKnowledgeMonitoringProgram {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of program under which the medication is monitored */
  type?: ICodeableConcept;

  /** Name of the reviewing program */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeMonitoringProgram>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_MONITORING_PROGRAM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeMonitoringProgram from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeMonitoringProgram): MedicationKnowledgeMonitoringProgram {
    return new MedicationKnowledgeMonitoringProgram(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeMonitoringProgram with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeMonitoringProgram>): MedicationKnowledgeMonitoringProgram {
    return new MedicationKnowledgeMonitoringProgram({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeMonitoringProgram by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeMonitoringProgram) => Partial<IMedicationKnowledgeMonitoringProgram>): MedicationKnowledgeMonitoringProgram {
    const currentData = this.toJSON();
    return new MedicationKnowledgeMonitoringProgram({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeMonitoringProgram)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeMonitoringProgram {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_MONITORING_PROGRAM_PROPERTIES);
    return result as IMedicationKnowledgeMonitoringProgram;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeMonitoringProgram
   */
  clone(): MedicationKnowledgeMonitoringProgram {
    return new MedicationKnowledgeMonitoringProgram(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeMonitoringProgram
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeMonitoringProgram'];
    return parts.join(', ');
  }
}
