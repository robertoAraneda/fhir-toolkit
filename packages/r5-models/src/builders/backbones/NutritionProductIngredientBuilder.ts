import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionProductIngredient } from '../../models/backbones/NutritionProductIngredient.js';
import type {
  ICodeableReference,
  INutritionProductIngredient,
  IRatio,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionProductIngredientBuilder - Fluent builder for NutritionProductIngredient backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionProductIngredient = new NutritionProductIngredientBuilder()
 *   .setItem(value)
 *   .addAmount({ ... })
 *   .build();
 */
export class NutritionProductIngredientBuilder extends BackboneElementBuilder<NutritionProductIngredient, INutritionProductIngredient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set item
   * The ingredient contained in the product
   */
  setItem(item: ICodeableReference): this {
    this.data.item = item;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add amount
   * The amount of ingredient that is in the product
   */
  addAmount(amount: IRatio): this {
    return this.addToArray('amount', amount);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionProductIngredient instance
   */
  build(): NutritionProductIngredient {
    return new NutritionProductIngredient(this.data);
  }

  /**
   * Build and validate the NutritionProductIngredient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionProductIngredient> {
    const nutritionProductIngredient = this.build();
    await nutritionProductIngredient.validateOrThrow();
    return nutritionProductIngredient;
  }
}
