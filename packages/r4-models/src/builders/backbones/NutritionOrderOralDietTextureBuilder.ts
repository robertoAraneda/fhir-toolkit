import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderOralDietTexture } from '../../models/backbones/NutritionOrderOralDietTexture.js';
import type {
  ICodeableConcept,
  INutritionOrderOralDietTexture,
} from '@fhir-toolkit/r4-types';

/**
 * NutritionOrderOralDietTextureBuilder - Fluent builder for NutritionOrderOralDietTexture backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderOralDietTexture = new NutritionOrderOralDietTextureBuilder()
 *   .setModifier(value)
 *   .build();
 */
export class NutritionOrderOralDietTextureBuilder extends BackboneElementBuilder<NutritionOrderOralDietTexture, INutritionOrderOralDietTexture> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set modifier
   * Code to indicate how to alter the texture of the foods, e.g. pureed
   */
  setModifier(modifier: ICodeableConcept): this {
    this.data.modifier = modifier;
    return this;
  }

  /**
   * Set foodType
   * Concepts that are used to identify an entity that is ingested for nutritional purposes
   */
  setFoodType(foodType: ICodeableConcept): this {
    this.data.foodType = foodType;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderOralDietTexture instance
   */
  build(): NutritionOrderOralDietTexture {
    return new NutritionOrderOralDietTexture(this.data);
  }

  /**
   * Build and validate the NutritionOrderOralDietTexture instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderOralDietTexture> {
    const nutritionOrderOralDietTexture = this.build();
    await nutritionOrderOralDietTexture.validateOrThrow();
    return nutritionOrderOralDietTexture;
  }
}
