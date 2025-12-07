import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDosage,
  IMedicationKnowledgeAdministrationGuidelinesDosage,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationKnowledgeAdministrationGuidelinesDosage */
const MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_DOSAGE_PROPERTIES = [
  'type',
  'dosage',
] as const;

/**
 * MedicationKnowledgeAdministrationGuidelinesDosage - Dosage for the medication for the specific guidelines
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeadministrationguidelinesdosage.html
 *
 * @example
 * const medicationKnowledgeAdministrationGuidelinesDosage = new MedicationKnowledgeAdministrationGuidelinesDosage({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeAdministrationGuidelinesDosage extends BackboneElement implements IMedicationKnowledgeAdministrationGuidelinesDosage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of dosage */
  type: ICodeableConcept;

  /** Dosage for the medication for the specific guidelines */
  dosage: IDosage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeAdministrationGuidelinesDosage>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_DOSAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeAdministrationGuidelinesDosage from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeAdministrationGuidelinesDosage): MedicationKnowledgeAdministrationGuidelinesDosage {
    return new MedicationKnowledgeAdministrationGuidelinesDosage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeAdministrationGuidelinesDosage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeAdministrationGuidelinesDosage>): MedicationKnowledgeAdministrationGuidelinesDosage {
    return new MedicationKnowledgeAdministrationGuidelinesDosage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeAdministrationGuidelinesDosage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeAdministrationGuidelinesDosage) => Partial<IMedicationKnowledgeAdministrationGuidelinesDosage>): MedicationKnowledgeAdministrationGuidelinesDosage {
    const currentData = this.toJSON();
    return new MedicationKnowledgeAdministrationGuidelinesDosage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeAdministrationGuidelinesDosage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeAdministrationGuidelinesDosage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_ADMINISTRATION_GUIDELINES_DOSAGE_PROPERTIES);
    return result as IMedicationKnowledgeAdministrationGuidelinesDosage;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeAdministrationGuidelinesDosage
   */
  clone(): MedicationKnowledgeAdministrationGuidelinesDosage {
    return new MedicationKnowledgeAdministrationGuidelinesDosage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeAdministrationGuidelinesDosage
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeAdministrationGuidelinesDosage'];
    return parts.join(', ');
  }
}
