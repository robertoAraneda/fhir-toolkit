import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeMonograph,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeMonograph */
const MEDICATION_KNOWLEDGE_MONOGRAPH_PROPERTIES = [
  'type',
  'source',
] as const;

/**
 * MedicationKnowledgeMonograph - Associated documentation about the medication
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgemonograph.html
 *
 * @example
 * const medicationKnowledgeMonograph = new MedicationKnowledgeMonograph({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeMonograph extends BackboneElement implements IMedicationKnowledgeMonograph {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The category of medication document */
  type?: ICodeableConcept;

  /** Associated documentation about the medication */
  source?: IReference<'DocumentReference'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeMonograph>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_MONOGRAPH_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeMonograph from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeMonograph): MedicationKnowledgeMonograph {
    return new MedicationKnowledgeMonograph(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeMonograph with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeMonograph>): MedicationKnowledgeMonograph {
    return new MedicationKnowledgeMonograph({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeMonograph by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeMonograph) => Partial<IMedicationKnowledgeMonograph>): MedicationKnowledgeMonograph {
    const currentData = this.toJSON();
    return new MedicationKnowledgeMonograph({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeMonograph)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeMonograph {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_MONOGRAPH_PROPERTIES);
    return result as IMedicationKnowledgeMonograph;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeMonograph
   */
  clone(): MedicationKnowledgeMonograph {
    return new MedicationKnowledgeMonograph(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeMonograph
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeMonograph'];
    return parts.join(', ');
  }
}
