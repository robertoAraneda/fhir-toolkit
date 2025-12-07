import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderOralDietNutrient } from '../../models/backbones/NutritionOrderOralDietNutrient.js';
import type {
  ICodeableConcept,
  INutritionOrderOralDietNutrient,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * NutritionOrderOralDietNutrientBuilder - Fluent builder for NutritionOrderOralDietNutrient backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderOralDietNutrient = new NutritionOrderOralDietNutrientBuilder()
 *   .setModifier(value)
 *   .build();
 */
export class NutritionOrderOralDietNutrientBuilder extends BackboneElementBuilder<NutritionOrderOralDietNutrient, INutritionOrderOralDietNutrient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set modifier
   * Type of nutrient that is being modified
   */
  setModifier(modifier: ICodeableConcept): this {
    this.data.modifier = modifier;
    return this;
  }

  /**
   * Set amount
   * Quantity of the specified nutrient
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderOralDietNutrient instance
   */
  build(): NutritionOrderOralDietNutrient {
    return new NutritionOrderOralDietNutrient(this.data);
  }

  /**
   * Build and validate the NutritionOrderOralDietNutrient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderOralDietNutrient> {
    const nutritionOrderOralDietNutrient = this.build();
    await nutritionOrderOralDietNutrient.validateOrThrow();
    return nutritionOrderOralDietNutrient;
  }
}
