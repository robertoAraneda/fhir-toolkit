import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetExpansionContainsProperty } from '../../models/backbones/ValueSetExpansionContainsProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICoding,
  IValueSetExpansionContainsProperty,
  IValueSetExpansionContainsPropertySubProperty,
} from '@fhir-toolkit/r5-types';

/**
 * ValueSetExpansionContainsPropertyBuilder - Fluent builder for ValueSetExpansionContainsProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetExpansionContainsProperty = new ValueSetExpansionContainsPropertyBuilder()
 *   .setCode(value)
 *   .addSubProperty({ ... })
 *   .build();
 */
export class ValueSetExpansionContainsPropertyBuilder extends BackboneElementBuilder<ValueSetExpansionContainsProperty, IValueSetExpansionContainsProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Reference to ValueSet.expansion.property.code
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCode, valueCoding, valueString, valueInteger, valueBoolean, valueDateTime, valueDecimal)
   * @param type - 'Code' | 'Coding' | 'String' | 'Integer' | 'Boolean' | 'DateTime' | 'Decimal'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Code', value)
   */
  setValue<T extends 'Code' | 'Coding' | 'String' | 'Integer' | 'Boolean' | 'DateTime' | 'Decimal'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IValueSetExpansionContainsProperty;
    const otherKeys: (keyof IValueSetExpansionContainsProperty)[] = [];
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IValueSetExpansionContainsProperty);
      otherKeys.push('_valueCode' as keyof IValueSetExpansionContainsProperty);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IValueSetExpansionContainsProperty);
      otherKeys.push('_valueCoding' as keyof IValueSetExpansionContainsProperty);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IValueSetExpansionContainsProperty);
      otherKeys.push('_valueString' as keyof IValueSetExpansionContainsProperty);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IValueSetExpansionContainsProperty);
      otherKeys.push('_valueInteger' as keyof IValueSetExpansionContainsProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IValueSetExpansionContainsProperty);
      otherKeys.push('_valueBoolean' as keyof IValueSetExpansionContainsProperty);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IValueSetExpansionContainsProperty);
      otherKeys.push('_valueDateTime' as keyof IValueSetExpansionContainsProperty);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IValueSetExpansionContainsProperty);
      otherKeys.push('_valueDecimal' as keyof IValueSetExpansionContainsProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subProperty
   * SubProperty value for the concept
   */
  addSubProperty(subProperty: IValueSetExpansionContainsPropertySubProperty): this {
    return this.addToArray('subProperty', subProperty);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetExpansionContainsProperty instance
   */
  build(): ValueSetExpansionContainsProperty {
    return new ValueSetExpansionContainsProperty(this.data);
  }

  /**
   * Build and validate the ValueSetExpansionContainsProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetExpansionContainsProperty> {
    const valueSetExpansionContainsProperty = this.build();
    await valueSetExpansionContainsProperty.validateOrThrow();
    return valueSetExpansionContainsProperty;
  }
}
