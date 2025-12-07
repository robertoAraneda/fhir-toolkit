import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionProductNutrient } from '../../models/backbones/NutritionProductNutrient.js';
import type {
  ICodeableReference,
  INutritionProductNutrient,
  IRatio,
} from '@fhir-toolkit/r4b-types';

/**
 * NutritionProductNutrientBuilder - Fluent builder for NutritionProductNutrient backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionProductNutrient = new NutritionProductNutrientBuilder()
 *   .setItem(value)
 *   .addAmount({ ... })
 *   .build();
 */
export class NutritionProductNutrientBuilder extends BackboneElementBuilder<NutritionProductNutrient, INutritionProductNutrient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set item
   * The (relevant) nutrients in the product
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
   * The amount of nutrient expressed in one or more units: X per pack / per serving / per dose
   */
  addAmount(amount: IRatio): this {
    return this.addToArray('amount', amount);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionProductNutrient instance
   */
  build(): NutritionProductNutrient {
    return new NutritionProductNutrient(this.data);
  }

  /**
   * Build and validate the NutritionProductNutrient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionProductNutrient> {
    const nutritionProductNutrient = this.build();
    await nutritionProductNutrient.validateOrThrow();
    return nutritionProductNutrient;
  }
}
