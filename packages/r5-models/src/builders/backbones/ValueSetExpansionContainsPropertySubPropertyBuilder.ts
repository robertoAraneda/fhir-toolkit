import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetExpansionContainsPropertySubProperty } from '../../models/backbones/ValueSetExpansionContainsPropertySubProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICoding,
  IValueSetExpansionContainsPropertySubProperty,
} from '@fhir-toolkit/r5-types';

/**
 * ValueSetExpansionContainsPropertySubPropertyBuilder - Fluent builder for ValueSetExpansionContainsPropertySubProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetExpansionContainsPropertySubProperty = new ValueSetExpansionContainsPropertySubPropertyBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ValueSetExpansionContainsPropertySubPropertyBuilder extends BackboneElementBuilder<ValueSetExpansionContainsPropertySubProperty, IValueSetExpansionContainsPropertySubProperty> {
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
    const key = `value${type}` as keyof IValueSetExpansionContainsPropertySubProperty;
    const otherKeys: (keyof IValueSetExpansionContainsPropertySubProperty)[] = [];
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IValueSetExpansionContainsPropertySubProperty);
      otherKeys.push('_valueCode' as keyof IValueSetExpansionContainsPropertySubProperty);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IValueSetExpansionContainsPropertySubProperty);
      otherKeys.push('_valueCoding' as keyof IValueSetExpansionContainsPropertySubProperty);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IValueSetExpansionContainsPropertySubProperty);
      otherKeys.push('_valueString' as keyof IValueSetExpansionContainsPropertySubProperty);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IValueSetExpansionContainsPropertySubProperty);
      otherKeys.push('_valueInteger' as keyof IValueSetExpansionContainsPropertySubProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IValueSetExpansionContainsPropertySubProperty);
      otherKeys.push('_valueBoolean' as keyof IValueSetExpansionContainsPropertySubProperty);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IValueSetExpansionContainsPropertySubProperty);
      otherKeys.push('_valueDateTime' as keyof IValueSetExpansionContainsPropertySubProperty);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IValueSetExpansionContainsPropertySubProperty);
      otherKeys.push('_valueDecimal' as keyof IValueSetExpansionContainsPropertySubProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetExpansionContainsPropertySubProperty instance
   */
  build(): ValueSetExpansionContainsPropertySubProperty {
    return new ValueSetExpansionContainsPropertySubProperty(this.data);
  }

  /**
   * Build and validate the ValueSetExpansionContainsPropertySubProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetExpansionContainsPropertySubProperty> {
    const valueSetExpansionContainsPropertySubProperty = this.build();
    await valueSetExpansionContainsPropertySubProperty.validateOrThrow();
    return valueSetExpansionContainsPropertySubProperty;
  }
}
