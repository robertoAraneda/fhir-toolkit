import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CodeSystemConceptProperty } from '../../models/backbones/CodeSystemConceptProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeSystemConceptProperty,
  ICoding,
} from '@fhir-toolkit/r4b-types';

/**
 * CodeSystemConceptPropertyBuilder - Fluent builder for CodeSystemConceptProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const codeSystemConceptProperty = new CodeSystemConceptPropertyBuilder()
 *   .setCode(value)
 *   .build();
 */
export class CodeSystemConceptPropertyBuilder extends BackboneElementBuilder<CodeSystemConceptProperty, ICodeSystemConceptProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Reference to CodeSystem.property.code
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
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
    const key = `value${type}` as keyof ICodeSystemConceptProperty;
    const otherKeys: (keyof ICodeSystemConceptProperty)[] = [];
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof ICodeSystemConceptProperty);
      otherKeys.push('_valueCode' as keyof ICodeSystemConceptProperty);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof ICodeSystemConceptProperty);
      otherKeys.push('_valueCoding' as keyof ICodeSystemConceptProperty);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof ICodeSystemConceptProperty);
      otherKeys.push('_valueString' as keyof ICodeSystemConceptProperty);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof ICodeSystemConceptProperty);
      otherKeys.push('_valueInteger' as keyof ICodeSystemConceptProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof ICodeSystemConceptProperty);
      otherKeys.push('_valueBoolean' as keyof ICodeSystemConceptProperty);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof ICodeSystemConceptProperty);
      otherKeys.push('_valueDateTime' as keyof ICodeSystemConceptProperty);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof ICodeSystemConceptProperty);
      otherKeys.push('_valueDecimal' as keyof ICodeSystemConceptProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CodeSystemConceptProperty instance
   */
  build(): CodeSystemConceptProperty {
    return new CodeSystemConceptProperty(this.data);
  }

  /**
   * Build and validate the CodeSystemConceptProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CodeSystemConceptProperty> {
    const codeSystemConceptProperty = this.build();
    await codeSystemConceptProperty.validateOrThrow();
    return codeSystemConceptProperty;
  }
}
