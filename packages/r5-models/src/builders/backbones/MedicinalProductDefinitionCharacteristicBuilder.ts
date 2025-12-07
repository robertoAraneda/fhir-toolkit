import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionCharacteristic } from '../../models/backbones/MedicinalProductDefinitionCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IMedicinalProductDefinitionCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * MedicinalProductDefinitionCharacteristicBuilder - Fluent builder for MedicinalProductDefinitionCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionCharacteristic = new MedicinalProductDefinitionCharacteristicBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicinalProductDefinitionCharacteristicBuilder extends BackboneElementBuilder<MedicinalProductDefinitionCharacteristic, IMedicinalProductDefinitionCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * A code expressing the type of characteristic
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueMarkdown, valueQuantity, valueInteger, valueDate, valueBoolean, valueAttachment)
   * @param type - 'CodeableConcept' | 'Markdown' | 'Quantity' | 'Integer' | 'Date' | 'Boolean' | 'Attachment'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Markdown' | 'Quantity' | 'Integer' | 'Date' | 'Boolean' | 'Attachment'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IMedicinalProductDefinitionCharacteristic;
    const otherKeys: (keyof IMedicinalProductDefinitionCharacteristic)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IMedicinalProductDefinitionCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof IMedicinalProductDefinitionCharacteristic);
    }
    if (type !== 'Markdown') {
      otherKeys.push('valueMarkdown' as keyof IMedicinalProductDefinitionCharacteristic);
      otherKeys.push('_valueMarkdown' as keyof IMedicinalProductDefinitionCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IMedicinalProductDefinitionCharacteristic);
      otherKeys.push('_valueQuantity' as keyof IMedicinalProductDefinitionCharacteristic);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IMedicinalProductDefinitionCharacteristic);
      otherKeys.push('_valueInteger' as keyof IMedicinalProductDefinitionCharacteristic);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IMedicinalProductDefinitionCharacteristic);
      otherKeys.push('_valueDate' as keyof IMedicinalProductDefinitionCharacteristic);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IMedicinalProductDefinitionCharacteristic);
      otherKeys.push('_valueBoolean' as keyof IMedicinalProductDefinitionCharacteristic);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IMedicinalProductDefinitionCharacteristic);
      otherKeys.push('_valueAttachment' as keyof IMedicinalProductDefinitionCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductDefinitionCharacteristic instance
   */
  build(): MedicinalProductDefinitionCharacteristic {
    return new MedicinalProductDefinitionCharacteristic(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionCharacteristic> {
    const medicinalProductDefinitionCharacteristic = this.build();
    await medicinalProductDefinitionCharacteristic.validateOrThrow();
    return medicinalProductDefinitionCharacteristic;
  }
}
