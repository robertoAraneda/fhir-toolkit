import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  IDuration,
  IElement,
  IMedicationKnowledgeStorageGuideline,
  IMedicationKnowledgeStorageGuidelineEnvironmentalSetting,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeStorageGuideline */
const MEDICATION_KNOWLEDGE_STORAGE_GUIDELINE_PROPERTIES = [
  'reference',
  '_reference',
  'note',
  'stabilityDuration',
  'environmentalSetting',
] as const;

/**
 * MedicationKnowledgeStorageGuideline - How the medication should be stored
 *
 * @see https://hl7.org/fhir/R5/medicationknowledgestorageguideline.html
 *
 * @example
 * const medicationKnowledgeStorageGuideline = new MedicationKnowledgeStorageGuideline({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeStorageGuideline extends BackboneElement implements IMedicationKnowledgeStorageGuideline {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to additional information */
  reference?: string;

  /** Extension for reference */
  _reference?: IElement;

  /** Additional storage notes */
  note?: IAnnotation[];

  /** Duration remains stable */
  stabilityDuration?: IDuration;

  /** Setting or value of environment for adequate storage */
  environmentalSetting?: IMedicationKnowledgeStorageGuidelineEnvironmentalSetting[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeStorageGuideline>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_STORAGE_GUIDELINE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeStorageGuideline from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeStorageGuideline): MedicationKnowledgeStorageGuideline {
    return new MedicationKnowledgeStorageGuideline(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeStorageGuideline with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeStorageGuideline>): MedicationKnowledgeStorageGuideline {
    return new MedicationKnowledgeStorageGuideline({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeStorageGuideline by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeStorageGuideline) => Partial<IMedicationKnowledgeStorageGuideline>): MedicationKnowledgeStorageGuideline {
    const currentData = this.toJSON();
    return new MedicationKnowledgeStorageGuideline({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeStorageGuideline)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeStorageGuideline {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_STORAGE_GUIDELINE_PROPERTIES);
    return result as IMedicationKnowledgeStorageGuideline;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeStorageGuideline
   */
  clone(): MedicationKnowledgeStorageGuideline {
    return new MedicationKnowledgeStorageGuideline(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeStorageGuideline
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeStorageGuideline'];
    return parts.join(', ');
  }
}
