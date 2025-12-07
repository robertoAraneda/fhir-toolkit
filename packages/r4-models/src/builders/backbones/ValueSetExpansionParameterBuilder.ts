import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetExpansionParameter } from '../../models/backbones/ValueSetExpansionParameter.js';
import type {
  IValueSetExpansionParameter,
} from '@fhir-toolkit/r4-types';

/**
 * ValueSetExpansionParameterBuilder - Fluent builder for ValueSetExpansionParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetExpansionParameter = new ValueSetExpansionParameterBuilder()
 *   .setName(value)
 *   .build();
 */
export class ValueSetExpansionParameterBuilder extends BackboneElementBuilder<ValueSetExpansionParameter, IValueSetExpansionParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name as assigned by the client or server
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'String' | 'Boolean' | 'Integer' | 'Decimal' | 'Uri' | 'Code' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('String', value)
   */
  setValue<T extends 'String' | 'Boolean' | 'Integer' | 'Decimal' | 'Uri' | 'Code' | 'DateTime'>(
    type: T,
    value: T extends 'Boolean' ? boolean : T extends 'Integer' ? number : string
  ): this {
    const key = `value${type}` as keyof IValueSetExpansionParameter;
    const otherKeys: (keyof IValueSetExpansionParameter)[] = [];
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IValueSetExpansionParameter);
      otherKeys.push('_valueString' as keyof IValueSetExpansionParameter);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IValueSetExpansionParameter);
      otherKeys.push('_valueBoolean' as keyof IValueSetExpansionParameter);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IValueSetExpansionParameter);
      otherKeys.push('_valueInteger' as keyof IValueSetExpansionParameter);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IValueSetExpansionParameter);
      otherKeys.push('_valueDecimal' as keyof IValueSetExpansionParameter);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof IValueSetExpansionParameter);
      otherKeys.push('_valueUri' as keyof IValueSetExpansionParameter);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IValueSetExpansionParameter);
      otherKeys.push('_valueCode' as keyof IValueSetExpansionParameter);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IValueSetExpansionParameter);
      otherKeys.push('_valueDateTime' as keyof IValueSetExpansionParameter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetExpansionParameter instance
   */
  build(): ValueSetExpansionParameter {
    return new ValueSetExpansionParameter(this.data);
  }

  /**
   * Build and validate the ValueSetExpansionParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetExpansionParameter> {
    const valueSetExpansionParameter = this.build();
    await valueSetExpansionParameter.validateOrThrow();
    return valueSetExpansionParameter;
  }
}
