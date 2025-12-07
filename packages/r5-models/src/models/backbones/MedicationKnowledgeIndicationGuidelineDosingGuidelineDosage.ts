import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDosage,
  IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage */
const MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_DOSAGE_PROPERTIES = [
  'type',
  'dosage',
] as const;

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage - Dosage for the medication for the specific guidelines
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeindicationguidelinedosingguidelinedosage.html
 *
 * @example
 * const medicationKnowledgeIndicationGuidelineDosingGuidelineDosage = new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage extends BackboneElement implements IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Category of dosage for a medication */
  type: ICodeableConcept;

  /** Dosage for the medication for the specific guidelines */
  dosage: IDosage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_DOSAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage>): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage) => Partial<IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage>): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {
    const currentData = this.toJSON();
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_DOSING_GUIDELINE_DOSAGE_PROPERTIES);
    return result as IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage
   */
  clone(): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage'];
    return parts.join(', ');
  }
}
