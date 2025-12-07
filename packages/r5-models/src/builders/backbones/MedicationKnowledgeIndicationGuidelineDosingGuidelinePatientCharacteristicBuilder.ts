import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic } from '../../models/backbones/MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicBuilder - Fluent builder for MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic = new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristicBuilder extends BackboneElementBuilder<MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic, IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Categorization of specific characteristic that is relevant to the administration guideline
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueQuantity, valueRange)
   * @param type - 'CodeableConcept' | 'Quantity' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Quantity' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic;
    const otherKeys: (keyof IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic);
      otherKeys.push('_valueQuantity' as keyof IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic);
      otherKeys.push('_valueRange' as keyof IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic instance
   */
  build(): MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic {
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic> {
    const medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic = this.build();
    await medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic.validateOrThrow();
    return medicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic;
  }
}
