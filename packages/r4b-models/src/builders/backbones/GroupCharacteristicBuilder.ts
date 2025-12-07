import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GroupCharacteristic } from '../../models/backbones/GroupCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IGroupCharacteristic,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * GroupCharacteristicBuilder - Fluent builder for GroupCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const groupCharacteristic = new GroupCharacteristicBuilder()
 *   .setCode(value)
 *   .build();
 */
export class GroupCharacteristicBuilder extends BackboneElementBuilder<GroupCharacteristic, IGroupCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Kind of characteristic
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set exclude
   * Group includes or excludes
   */
  setExclude(exclude: boolean): this {
    this.data.exclude = exclude;
    return this;
  }

  /**
   * Set period
   * Period over which characteristic is tested
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IGroupCharacteristic;
    const otherKeys: (keyof IGroupCharacteristic)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IGroupCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof IGroupCharacteristic);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IGroupCharacteristic);
      otherKeys.push('_valueBoolean' as keyof IGroupCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IGroupCharacteristic);
      otherKeys.push('_valueQuantity' as keyof IGroupCharacteristic);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IGroupCharacteristic);
      otherKeys.push('_valueRange' as keyof IGroupCharacteristic);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IGroupCharacteristic);
      otherKeys.push('_valueReference' as keyof IGroupCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GroupCharacteristic instance
   */
  build(): GroupCharacteristic {
    return new GroupCharacteristic(this.data);
  }

  /**
   * Build and validate the GroupCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GroupCharacteristic> {
    const groupCharacteristic = this.build();
    await groupCharacteristic.validateOrThrow();
    return groupCharacteristic;
  }
}
