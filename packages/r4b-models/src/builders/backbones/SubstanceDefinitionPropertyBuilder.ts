import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionProperty } from '../../models/backbones/SubstanceDefinitionProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IQuantity,
  ISubstanceDefinitionProperty,
} from '@fhir-toolkit/r4b-types';

/**
 * SubstanceDefinitionPropertyBuilder - Fluent builder for SubstanceDefinitionProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionProperty = new SubstanceDefinitionPropertyBuilder()
 *   .setType(value)
 *   .build();
 */
export class SubstanceDefinitionPropertyBuilder extends BackboneElementBuilder<SubstanceDefinitionProperty, ISubstanceDefinitionProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * A code expressing the type of property
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueQuantity, valueDate, valueBoolean, valueAttachment)
   * @param type - 'CodeableConcept' | 'Quantity' | 'Date' | 'Boolean' | 'Attachment'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Quantity' | 'Date' | 'Boolean' | 'Attachment'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof ISubstanceDefinitionProperty;
    const otherKeys: (keyof ISubstanceDefinitionProperty)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof ISubstanceDefinitionProperty);
      otherKeys.push('_valueCodeableConcept' as keyof ISubstanceDefinitionProperty);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof ISubstanceDefinitionProperty);
      otherKeys.push('_valueQuantity' as keyof ISubstanceDefinitionProperty);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof ISubstanceDefinitionProperty);
      otherKeys.push('_valueDate' as keyof ISubstanceDefinitionProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof ISubstanceDefinitionProperty);
      otherKeys.push('_valueBoolean' as keyof ISubstanceDefinitionProperty);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof ISubstanceDefinitionProperty);
      otherKeys.push('_valueAttachment' as keyof ISubstanceDefinitionProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinitionProperty instance
   */
  build(): SubstanceDefinitionProperty {
    return new SubstanceDefinitionProperty(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionProperty> {
    const substanceDefinitionProperty = this.build();
    await substanceDefinitionProperty.validateOrThrow();
    return substanceDefinitionProperty;
  }
}
