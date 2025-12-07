import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeDefinitionalDrugCharacteristic } from '../../models/backbones/MedicationKnowledgeDefinitionalDrugCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IMedicationKnowledgeDefinitionalDrugCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeDefinitionalDrugCharacteristicBuilder - Fluent builder for MedicationKnowledgeDefinitionalDrugCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeDefinitionalDrugCharacteristic = new MedicationKnowledgeDefinitionalDrugCharacteristicBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgeDefinitionalDrugCharacteristicBuilder extends BackboneElementBuilder<MedicationKnowledgeDefinitionalDrugCharacteristic, IMedicationKnowledgeDefinitionalDrugCharacteristic> {
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
   * Set value choice type (valueCodeableConcept, valueString, valueQuantity, valueBase64Binary, valueAttachment)
   * @param type - 'CodeableConcept' | 'String' | 'Quantity' | 'Base64Binary' | 'Attachment'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'String' | 'Quantity' | 'Base64Binary' | 'Attachment'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic;
    const otherKeys: (keyof IMedicationKnowledgeDefinitionalDrugCharacteristic)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
      otherKeys.push('_valueString' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
      otherKeys.push('_valueQuantity' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
    }
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
      otherKeys.push('_valueBase64Binary' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
      otherKeys.push('_valueAttachment' as keyof IMedicationKnowledgeDefinitionalDrugCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeDefinitionalDrugCharacteristic instance
   */
  build(): MedicationKnowledgeDefinitionalDrugCharacteristic {
    return new MedicationKnowledgeDefinitionalDrugCharacteristic(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeDefinitionalDrugCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeDefinitionalDrugCharacteristic> {
    const medicationKnowledgeDefinitionalDrugCharacteristic = this.build();
    await medicationKnowledgeDefinitionalDrugCharacteristic.validateOrThrow();
    return medicationKnowledgeDefinitionalDrugCharacteristic;
  }
}
