import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeDrugCharacteristic } from '../../models/backbones/MedicationKnowledgeDrugCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeDrugCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationKnowledgeDrugCharacteristicBuilder - Fluent builder for MedicationKnowledgeDrugCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeDrugCharacteristic = new MedicationKnowledgeDrugCharacteristicBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgeDrugCharacteristicBuilder extends BackboneElementBuilder<MedicationKnowledgeDrugCharacteristic, IMedicationKnowledgeDrugCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Code specifying the type of characteristic of medication
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueString, valueQuantity, valueBase64Binary)
   * @param type - 'CodeableConcept' | 'String' | 'Quantity' | 'Base64Binary'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'String' | 'Quantity' | 'Base64Binary'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IMedicationKnowledgeDrugCharacteristic;
    const otherKeys: (keyof IMedicationKnowledgeDrugCharacteristic)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IMedicationKnowledgeDrugCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof IMedicationKnowledgeDrugCharacteristic);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IMedicationKnowledgeDrugCharacteristic);
      otherKeys.push('_valueString' as keyof IMedicationKnowledgeDrugCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IMedicationKnowledgeDrugCharacteristic);
      otherKeys.push('_valueQuantity' as keyof IMedicationKnowledgeDrugCharacteristic);
    }
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof IMedicationKnowledgeDrugCharacteristic);
      otherKeys.push('_valueBase64Binary' as keyof IMedicationKnowledgeDrugCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeDrugCharacteristic instance
   */
  build(): MedicationKnowledgeDrugCharacteristic {
    return new MedicationKnowledgeDrugCharacteristic(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeDrugCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeDrugCharacteristic> {
    const medicationKnowledgeDrugCharacteristic = this.build();
    await medicationKnowledgeDrugCharacteristic.validateOrThrow();
    return medicationKnowledgeDrugCharacteristic;
  }
}
