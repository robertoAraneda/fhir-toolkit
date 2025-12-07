import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InventoryItemCharacteristic } from '../../models/backbones/InventoryItemCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAddress,
  IAnnotation,
  ICodeableConcept,
  IDuration,
  IInventoryItemCharacteristic,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryItemCharacteristicBuilder - Fluent builder for InventoryItemCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryItemCharacteristic = new InventoryItemCharacteristicBuilder()
 *   .setCharacteristicType(value)
 *   .build();
 */
export class InventoryItemCharacteristicBuilder extends BackboneElementBuilder<InventoryItemCharacteristic, IInventoryItemCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set characteristicType
   * The characteristic that is being defined
   */
  setCharacteristicType(characteristicType: ICodeableConcept): this {
    this.data.characteristicType = characteristicType;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueString, valueInteger, valueDecimal, valueBoolean, valueUrl, valueDateTime, valueQuantity, valueRange, valueRatio, valueAnnotation, valueAddress, valueDuration, valueCodeableConcept)
   * @param type - 'String' | 'Integer' | 'Decimal' | 'Boolean' | 'Url' | 'DateTime' | 'Quantity' | 'Range' | 'Ratio' | 'Annotation' | 'Address' | 'Duration' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('String', value)
   */
  setValue<T extends 'String' | 'Integer' | 'Decimal' | 'Boolean' | 'Url' | 'DateTime' | 'Quantity' | 'Range' | 'Ratio' | 'Annotation' | 'Address' | 'Duration' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IInventoryItemCharacteristic;
    const otherKeys: (keyof IInventoryItemCharacteristic)[] = [];
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueString' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueInteger' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueDecimal' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueBoolean' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Url') {
      otherKeys.push('valueUrl' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueUrl' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueDateTime' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueQuantity' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueRange' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueRatio' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Annotation') {
      otherKeys.push('valueAnnotation' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueAnnotation' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Address') {
      otherKeys.push('valueAddress' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueAddress' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueDuration' as keyof IInventoryItemCharacteristic);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IInventoryItemCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof IInventoryItemCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryItemCharacteristic instance
   */
  build(): InventoryItemCharacteristic {
    return new InventoryItemCharacteristic(this.data);
  }

  /**
   * Build and validate the InventoryItemCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryItemCharacteristic> {
    const inventoryItemCharacteristic = this.build();
    await inventoryItemCharacteristic.validateOrThrow();
    return inventoryItemCharacteristic;
  }
}
