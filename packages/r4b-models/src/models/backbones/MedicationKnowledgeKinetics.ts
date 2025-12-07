import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDuration,
  IMedicationKnowledgeKinetics,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationKnowledgeKinetics */
const MEDICATION_KNOWLEDGE_KINETICS_PROPERTIES = [
  'areaUnderCurve',
  'lethalDose50',
  'halfLifePeriod',
] as const;

/**
 * MedicationKnowledgeKinetics - The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgekinetics.html
 *
 * @example
 * const medicationKnowledgeKinetics = new MedicationKnowledgeKinetics({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeKinetics extends BackboneElement implements IMedicationKnowledgeKinetics {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The drug concentration measured at certain discrete points in time */
  areaUnderCurve?: IQuantity[];

  /** The median lethal dose of a drug */
  lethalDose50?: IQuantity[];

  /** Time required for concentration in the body to decrease by half */
  halfLifePeriod?: IDuration;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeKinetics>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_KINETICS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeKinetics from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeKinetics): MedicationKnowledgeKinetics {
    return new MedicationKnowledgeKinetics(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeKinetics with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeKinetics>): MedicationKnowledgeKinetics {
    return new MedicationKnowledgeKinetics({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeKinetics by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeKinetics) => Partial<IMedicationKnowledgeKinetics>): MedicationKnowledgeKinetics {
    const currentData = this.toJSON();
    return new MedicationKnowledgeKinetics({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeKinetics)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeKinetics {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_KINETICS_PROPERTIES);
    return result as IMedicationKnowledgeKinetics;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeKinetics
   */
  clone(): MedicationKnowledgeKinetics {
    return new MedicationKnowledgeKinetics(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeKinetics
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeKinetics'];
    return parts.join(', ');
  }
}
