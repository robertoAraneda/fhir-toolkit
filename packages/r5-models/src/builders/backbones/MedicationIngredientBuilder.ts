import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationIngredient } from '../../models/backbones/MedicationIngredient.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicationIngredient,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationIngredientBuilder - Fluent builder for MedicationIngredient backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationIngredient = new MedicationIngredientBuilder()
 *   .setItem(value)
 *   .build();
 */
export class MedicationIngredientBuilder extends BackboneElementBuilder<MedicationIngredient, IMedicationIngredient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set item
   * The ingredient (substance or medication) that the ingredient.strength relates to
   */
  setItem(item: ICodeableReference): this {
    this.data.item = item;
    return this;
  }

  /**
   * Set isActive
   * Active ingredient indicator
   */
  setIsActive(isActive: boolean): this {
    this.data.isActive = isActive;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set strength choice type (strengthRatio, strengthCodeableConcept, strengthQuantity)
   * @param type - 'Ratio' | 'CodeableConcept' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setStrength('Ratio', value)
   */
  setStrength<T extends 'Ratio' | 'CodeableConcept' | 'Quantity'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `strength${type}` as keyof IMedicationIngredient;
    const otherKeys: (keyof IMedicationIngredient)[] = [];
    if (type !== 'Ratio') {
      otherKeys.push('strengthRatio' as keyof IMedicationIngredient);
      otherKeys.push('_strengthRatio' as keyof IMedicationIngredient);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('strengthCodeableConcept' as keyof IMedicationIngredient);
      otherKeys.push('_strengthCodeableConcept' as keyof IMedicationIngredient);
    }
    if (type !== 'Quantity') {
      otherKeys.push('strengthQuantity' as keyof IMedicationIngredient);
      otherKeys.push('_strengthQuantity' as keyof IMedicationIngredient);
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
