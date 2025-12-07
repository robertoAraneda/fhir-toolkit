import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderEnteralFormulaAdditive } from '../../models/backbones/NutritionOrderEnteralFormulaAdditive.js';
import type {
  ICodeableReference,
  INutritionOrderEnteralFormulaAdditive,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionOrderEnteralFormulaAdditiveBuilder - Fluent builder for NutritionOrderEnteralFormulaAdditive backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderEnteralFormulaAdditive = new NutritionOrderEnteralFormulaAdditiveBuilder()
 *   .setType(value)
 *   .build();
 */
export class NutritionOrderEnteralFormulaAdditiveBuilder extends BackboneElementBuilder<NutritionOrderEnteralFormulaAdditive, INutritionOrderEnteralFormulaAdditive> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of modular component to add to the feeding
   */
  setType(type: ICodeableReference): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set productName
   * Product or brand name of the modular additive
   */
  setProductName(productName: string): this {
    this.data.productName = productName;
    return this;
  }

  /**
   * Set quantity
   * Amount of additive to be given or mixed in
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderEnteralFormulaAdditive instance
   */
  build(): NutritionOrderEnteralFormulaAdditive {
    return new NutritionOrderEnteralFormulaAdditive(this.data);
  }

  /**
   * Build and validate the NutritionOrderEnteralFormulaAdditive instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderEnteralFormulaAdditive> {
    const nutritionOrderEnteralFormulaAdditive = this.build();
    await nutritionOrderEnteralFormulaAdditive.validateOrThrow();
    return nutritionOrderEnteralFormulaAdditive;
  }
}
