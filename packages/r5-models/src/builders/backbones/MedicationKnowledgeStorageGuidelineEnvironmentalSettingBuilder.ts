import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeStorageGuidelineEnvironmentalSetting } from '../../models/backbones/MedicationKnowledgeStorageGuidelineEnvironmentalSetting.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeStorageGuidelineEnvironmentalSetting,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeStorageGuidelineEnvironmentalSettingBuilder - Fluent builder for MedicationKnowledgeStorageGuidelineEnvironmentalSetting backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeStorageGuidelineEnvironmentalSetting = new MedicationKnowledgeStorageGuidelineEnvironmentalSettingBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgeStorageGuidelineEnvironmentalSettingBuilder extends BackboneElementBuilder<MedicationKnowledgeStorageGuidelineEnvironmentalSetting, IMedicationKnowledgeStorageGuidelineEnvironmentalSetting> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Categorization of the setting
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueQuantity, valueRange, valueCodeableConcept)
   * @param type - 'Quantity' | 'Range' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'Range' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IMedicationKnowledgeStorageGuidelineEnvironmentalSetting;
    const otherKeys: (keyof IMedicationKnowledgeStorageGuidelineEnvironmentalSetting)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IMedicationKnowledgeStorageGuidelineEnvironmentalSetting);
      otherKeys.push('_valueQuantity' as keyof IMedicationKnowledgeStorageGuidelineEnvironmentalSetting);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IMedicationKnowledgeStorageGuidelineEnvironmentalSetting);
      otherKeys.push('_valueRange' as keyof IMedicationKnowledgeStorageGuidelineEnvironmentalSetting);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IMedicationKnowledgeStorageGuidelineEnvironmentalSetting);
      otherKeys.push('_valueCodeableConcept' as keyof IMedicationKnowledgeStorageGuidelineEnvironmentalSetting);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeStorageGuidelineEnvironmentalSetting instance
   */
  build(): MedicationKnowledgeStorageGuidelineEnvironmentalSetting {
    return new MedicationKnowledgeStorageGuidelineEnvironmentalSetting(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeStorageGuidelineEnvironmentalSetting instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeStorageGuidelineEnvironmentalSetting> {
    const medicationKnowledgeStorageGuidelineEnvironmentalSetting = this.build();
    await medicationKnowledgeStorageGuidelineEnvironmentalSetting.validateOrThrow();
    return medicationKnowledgeStorageGuidelineEnvironmentalSetting;
  }
}
