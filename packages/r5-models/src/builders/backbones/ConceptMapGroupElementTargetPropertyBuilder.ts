import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroupElementTargetProperty } from '../../models/backbones/ConceptMapGroupElementTargetProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICoding,
  IConceptMapGroupElementTargetProperty,
} from '@fhir-toolkit/r5-types';

/**
 * ConceptMapGroupElementTargetPropertyBuilder - Fluent builder for ConceptMapGroupElementTargetProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapGroupElementTargetProperty = new ConceptMapGroupElementTargetPropertyBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ConceptMapGroupElementTargetPropertyBuilder extends BackboneElementBuilder<ConceptMapGroupElementTargetProperty, IConceptMapGroupElementTargetProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Reference to ConceptMap.property.code
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCoding, valueString, valueInteger, valueBoolean, valueDateTime, valueDecimal, valueCode)
   * @param type - 'Coding' | 'String' | 'Integer' | 'Boolean' | 'DateTime' | 'Decimal' | 'Code'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Coding', value)
   */
  setValue<T extends 'Coding' | 'String' | 'Integer' | 'Boolean' | 'DateTime' | 'Decimal' | 'Code'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IConceptMapGroupElementTargetProperty;
    const otherKeys: (keyof IConceptMapGroupElementTargetProperty)[] = [];
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IConceptMapGroupElementTargetProperty);
      otherKeys.push('_valueCoding' as keyof IConceptMapGroupElementTargetProperty);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IConceptMapGroupElementTargetProperty);
      otherKeys.push('_valueString' as keyof IConceptMapGroupElementTargetProperty);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IConceptMapGroupElementTargetProperty);
      otherKeys.push('_valueInteger' as keyof IConceptMapGroupElementTargetProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IConceptMapGroupElementTargetProperty);
      otherKeys.push('_valueBoolean' as keyof IConceptMapGroupElementTargetProperty);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IConceptMapGroupElementTargetProperty);
      otherKeys.push('_valueDateTime' as keyof IConceptMapGroupElementTargetProperty);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IConceptMapGroupElementTargetProperty);
      otherKeys.push('_valueDecimal' as keyof IConceptMapGroupElementTargetProperty);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IConceptMapGroupElementTargetProperty);
      otherKeys.push('_valueCode' as keyof IConceptMapGroupElementTargetProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapGroupElementTargetProperty instance
   */
  build(): ConceptMapGroupElementTargetProperty {
    return new ConceptMapGroupElementTargetProperty(this.data);
  }

  /**
   * Build and validate the ConceptMapGroupElementTargetProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapGroupElementTargetProperty> {
    const conceptMapGroupElementTargetProperty = this.build();
    await conceptMapGroupElementTargetProperty.validateOrThrow();
    return conceptMapGroupElementTargetProperty;
  }
}
