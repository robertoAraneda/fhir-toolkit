import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationIngredient } from '../../models/backbones/MedicationIngredient.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationIngredient,
  IRatio,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationIngredientBuilder - Fluent builder for MedicationIngredient backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationIngredient = new MedicationIngredientBuilder()
 *   .setIsActive(value)
 *   .build();
 */
export class MedicationIngredientBuilder extends BackboneElementBuilder<MedicationIngredient, IMedicationIngredient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set isActive
   * Active ingredient indicator
   */
  setIsActive(isActive: boolean): this {
    this.data.isActive = isActive;
    return this;
  }

  /**
   * Set strength
   * Quantity of ingredient present
   */
  setStrength(strength: IRatio): this {
    this.data.strength = strength;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set item choice type (itemCodeableConcept, itemReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setItem('CodeableConcept', value)
   */
  setItem<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `item${type}` as keyof IMedicationIngredient;
    const otherKeys: (keyof IMedicationIngredient)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof IMedicationIngredient);
      otherKeys.push('_itemCodeableConcept' as keyof IMedicationIngredient);
    }
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof IMedicationIngredient);
      otherKeys.push('_itemReference' as keyof IMedicationIngredient);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationIngredient instance
   */
  build(): MedicationIngredient {
    return new MedicationIngredient(this.data);
  }

  /**
   * Build and validate the MedicationIngredient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationIngredient> {
    const medicationIngredient = this.build();
    await medicationIngredient.validateOrThrow();
    return medicationIngredient;
  }
}
