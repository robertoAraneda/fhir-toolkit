import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  IMedicationKnowledgeIndicationGuideline,
  IMedicationKnowledgeIndicationGuidelineDosingGuideline,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeIndicationGuideline */
const MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_PROPERTIES = [
  'indication',
  'dosingGuideline',
] as const;

/**
 * MedicationKnowledgeIndicationGuideline - Guidelines or protocols for administration of the medication for an indication
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeindicationguideline.html
 *
 * @example
 * const medicationKnowledgeIndicationGuideline = new MedicationKnowledgeIndicationGuideline({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeIndicationGuideline extends BackboneElement implements IMedicationKnowledgeIndicationGuideline {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Indication for use that applies to the specific administration guideline */
  indication?: ICodeableReference[];

  /** Guidelines for dosage of the medication */
  dosingGuideline?: IMedicationKnowledgeIndicationGuidelineDosingGuideline[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeIndicationGuideline>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeIndicationGuideline from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeIndicationGuideline): MedicationKnowledgeIndicationGuideline {
    return new MedicationKnowledgeIndicationGuideline(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeIndicationGuideline with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeIndicationGuideline>): MedicationKnowledgeIndicationGuideline {
    return new MedicationKnowledgeIndicationGuideline({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeIndicationGuideline by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeIndicationGuideline) => Partial<IMedicationKnowledgeIndicationGuideline>): MedicationKnowledgeIndicationGuideline {
    const currentData = this.toJSON();
    return new MedicationKnowledgeIndicationGuideline({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeIndicationGuideline)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeIndicationGuideline {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_INDICATION_GUIDELINE_PROPERTIES);
    return result as IMedicationKnowledgeIndicationGuideline;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeIndicationGuideline
   */
  clone(): MedicationKnowledgeIndicationGuideline {
    return new MedicationKnowledgeIndicationGuideline(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeIndicationGuideline
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeIndicationGuideline'];
    return parts.join(', ');
  }
}
