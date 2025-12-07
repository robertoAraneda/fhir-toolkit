import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceIngredient } from '../../models/backbones/SubstanceIngredient.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IRatio,
  IReference,
  ISubstanceIngredient,
} from '@fhir-toolkit/r4b-types';

/**
 * SubstanceIngredientBuilder - Fluent builder for SubstanceIngredient backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceIngredient = new SubstanceIngredientBuilder()
 *   .setQuantity(value)
 *   .build();
 */
export class SubstanceIngredientBuilder extends BackboneElementBuilder<SubstanceIngredient, ISubstanceIngredient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set quantity
   * Optional amount (concentration)
   */
  setQuantity(quantity: IRatio): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set substance choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubstance('CodeableConcept', value)
   */
  setSubstance<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `substance${type}` as keyof ISubstanceIngredient;
    const otherKeys: (keyof ISubstanceIngredient)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('substanceCodeableConcept' as keyof ISubstanceIngredient);
      otherKeys.push('_substanceCodeableConcept' as keyof ISubstanceIngredient);
    }
    if (type !== 'Reference') {
      otherKeys.push('substanceReference' as keyof ISubstanceIngredient);
      otherKeys.push('_substanceReference' as keyof ISubstanceIngredient);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceIngredient instance
   */
  build(): SubstanceIngredient {
    return new SubstanceIngredient(this.data);
  }

  /**
   * Build and validate the SubstanceIngredient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceIngredient> {
    const substanceIngredient = this.build();
    await substanceIngredient.validateOrThrow();
    return substanceIngredient;
  }
}
