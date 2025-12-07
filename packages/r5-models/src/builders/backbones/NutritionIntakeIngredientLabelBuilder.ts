import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionIntakeIngredientLabel } from '../../models/backbones/NutritionIntakeIngredientLabel.js';
import type {
  ICodeableReference,
  INutritionIntakeIngredientLabel,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionIntakeIngredientLabelBuilder - Fluent builder for NutritionIntakeIngredientLabel backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionIntakeIngredientLabel = new NutritionIntakeIngredientLabelBuilder()
 *   .setNutrient(value)
 *   .build();
 */
export class NutritionIntakeIngredientLabelBuilder extends BackboneElementBuilder<NutritionIntakeIngredientLabel, INutritionIntakeIngredientLabel> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set nutrient
   * Total nutrient consumed
   */
  setNutrient(nutrient: ICodeableReference): this {
    this.data.nutrient = nutrient;
    return this;
  }

  /**
   * Set amount
   * Total amount of nutrient consumed
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionIntakeIngredientLabel instance
   */
  build(): NutritionIntakeIngredientLabel {
    return new NutritionIntakeIngredientLabel(this.data);
  }

  /**
   * Build and validate the NutritionIntakeIngredientLabel instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionIntakeIngredientLabel> {
    const nutritionIntakeIngredientLabel = this.build();
    await nutritionIntakeIngredientLabel.validateOrThrow();
    return nutritionIntakeIngredientLabel;
  }
}
