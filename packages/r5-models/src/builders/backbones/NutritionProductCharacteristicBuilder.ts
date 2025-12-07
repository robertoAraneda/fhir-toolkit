import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionProductCharacteristic } from '../../models/backbones/NutritionProductCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  INutritionProductCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionProductCharacteristicBuilder - Fluent builder for NutritionProductCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionProductCharacteristic = new NutritionProductCharacteristicBuilder()
 *   .setType(value)
 *   .build();
 */
export class NutritionProductCharacteristicBuilder extends BackboneElementBuilder<NutritionProductCharacteristic, INutritionProductCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Code specifying the type of characteristic
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueString, valueQuantity, valueBase64Binary, valueAttachment, valueBoolean)
   * @param type - 'CodeableConcept' | 'String' | 'Quantity' | 'Base64Binary' | 'Attachment' | 'Boolean'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'String' | 'Quantity' | 'Base64Binary' | 'Attachment' | 'Boolean'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof INutritionProductCharacteristic;
    const otherKeys: (keyof INutritionProductCharacteristic)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof INutritionProductCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof INutritionProductCharacteristic);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof INutritionProductCharacteristic);
      otherKeys.push('_valueString' as keyof INutritionProductCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof INutritionProductCharacteristic);
      otherKeys.push('_valueQuantity' as keyof INutritionProductCharacteristic);
    }
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof INutritionProductCharacteristic);
      otherKeys.push('_valueBase64Binary' as keyof INutritionProductCharacteristic);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof INutritionProductCharacteristic);
      otherKeys.push('_valueAttachment' as keyof INutritionProductCharacteristic);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof INutritionProductCharacteristic);
      otherKeys.push('_valueBoolean' as keyof INutritionProductCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionProductCharacteristic instance
   */
  build(): NutritionProductCharacteristic {
    return new NutritionProductCharacteristic(this.data);
  }

  /**
   * Build and validate the NutritionProductCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionProductCharacteristic> {
    const nutritionProductCharacteristic = this.build();
    await nutritionProductCharacteristic.validateOrThrow();
    return nutritionProductCharacteristic;
  }
}
