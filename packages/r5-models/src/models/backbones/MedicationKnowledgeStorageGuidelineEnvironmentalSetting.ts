import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeStorageGuidelineEnvironmentalSetting,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeStorageGuidelineEnvironmentalSetting */
const MEDICATION_KNOWLEDGE_STORAGE_GUIDELINE_ENVIRONMENTAL_SETTING_PROPERTIES = [
  'type',
  'valueQuantity',
  'valueRange',
  'valueCodeableConcept',
] as const;

/**
 * MedicationKnowledgeStorageGuidelineEnvironmentalSetting - Setting or value of environment for adequate storage
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgestorageguidelineenvironmentalsetting.html
 *
 * @example
 * const medicationKnowledgeStorageGuidelineEnvironmentalSetting = new MedicationKnowledgeStorageGuidelineEnvironmentalSetting({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeStorageGuidelineEnvironmentalSetting extends BackboneElement implements IMedicationKnowledgeStorageGuidelineEnvironmentalSetting {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Categorization of the setting */
  type: ICodeableConcept;

  /** Value of the setting */
  valueQuantity?: IQuantity;

  /** Value of the setting */
  valueRange?: IRange;

  /** Value of the setting */
  valueCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeStorageGuidelineEnvironmentalSetting>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_STORAGE_GUIDELINE_ENVIRONMENTAL_SETTING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeStorageGuidelineEnvironmentalSetting from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeStorageGuidelineEnvironmentalSetting): MedicationKnowledgeStorageGuidelineEnvironmentalSetting {
    return new MedicationKnowledgeStorageGuidelineEnvironmentalSetting(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeStorageGuidelineEnvironmentalSetting with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeStorageGuidelineEnvironmentalSetting>): MedicationKnowledgeStorageGuidelineEnvironmentalSetting {
    return new MedicationKnowledgeStorageGuidelineEnvironmentalSetting({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeStorageGuidelineEnvironmentalSetting by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeStorageGuidelineEnvironmentalSetting) => Partial<IMedicationKnowledgeStorageGuidelineEnvironmentalSetting>): MedicationKnowledgeStorageGuidelineEnvironmentalSetting {
    const currentData = this.toJSON();
    return new MedicationKnowledgeStorageGuidelineEnvironmentalSetting({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeStorageGuidelineEnvironmentalSetting)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeStorageGuidelineEnvironmentalSetting {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_STORAGE_GUIDELINE_ENVIRONMENTAL_SETTING_PROPERTIES);
    return result as IMedicationKnowledgeStorageGuidelineEnvironmentalSetting;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeStorageGuidelineEnvironmentalSetting
   */
  clone(): MedicationKnowledgeStorageGuidelineEnvironmentalSetting {
    return new MedicationKnowledgeStorageGuidelineEnvironmentalSetting(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeStorageGuidelineEnvironmentalSetting
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeStorageGuidelineEnvironmentalSetting'];
    return parts.join(', ');
  }
}
