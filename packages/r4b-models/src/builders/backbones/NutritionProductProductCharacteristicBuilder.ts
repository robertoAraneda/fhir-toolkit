import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionProductProductCharacteristic } from '../../models/backbones/NutritionProductProductCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  INutritionProductProductCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * NutritionProductProductCharacteristicBuilder - Fluent builder for NutritionProductProductCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionProductProductCharacteristic = new NutritionProductProductCharacteristicBuilder()
 *   .setType(value)
 *   .build();
 */
export class NutritionProductProductCharacteristicBuilder extends BackboneElementBuilder<NutritionProductProductCharacteristic, INutritionProductProductCharacteristic> {
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
   * Set value choice type
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
    const key = `value${type}` as keyof INutritionProductProductCharacteristic;
    const otherKeys: (keyof INutritionProductProductCharacteristic)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof INutritionProductProductCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof INutritionProductProductCharacteristic);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof INutritionProductProductCharacteristic);
      otherKeys.push('_valueString' as keyof INutritionProductProductCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof INutritionProductProductCharacteristic);
      otherKeys.push('_valueQuantity' as keyof INutritionProductProductCharacteristic);
    }
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof INutritionProductProductCharacteristic);
      otherKeys.push('_valueBase64Binary' as keyof INutritionProductProductCharacteristic);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof INutritionProductProductCharacteristic);
      otherKeys.push('_valueAttachment' as keyof INutritionProductProductCharacteristic);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof INutritionProductProductCharacteristic);
      otherKeys.push('_valueBoolean' as keyof INutritionProductProductCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionProductProductCharacteristic instance
   */
  build(): NutritionProductProductCharacteristic {
    return new NutritionProductProductCharacteristic(this.data);
  }

  /**
   * Build and validate the NutritionProductProductCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionProductProductCharacteristic> {
    const nutritionProductProductCharacteristic = this.build();
    await nutritionProductProductCharacteristic.validateOrThrow();
    return nutritionProductProductCharacteristic;
  }
}
