import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderSupplement } from '../../models/backbones/NutritionOrderSupplement.js';
import type {
  ICodeableReference,
  INutritionOrderSupplement,
  INutritionOrderSupplementSchedule,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionOrderSupplementBuilder - Fluent builder for NutritionOrderSupplement backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderSupplement = new NutritionOrderSupplementBuilder()
 *   .setType(value)
 *   .build();
 */
export class NutritionOrderSupplementBuilder extends BackboneElementBuilder<NutritionOrderSupplement, INutritionOrderSupplement> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of supplement product requested
   */
  setType(type: ICodeableReference): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set productName
   * Product or brand name of the nutritional supplement
   */
  setProductName(productName: string): this {
    this.data.productName = productName;
    return this;
  }

  /**
   * Set schedule
   * Scheduling information for supplements
   */
  setSchedule(schedule: INutritionOrderSupplementSchedule): this {
    this.data.schedule = schedule;
    return this;
  }

  /**
   * Set quantity
   * Amount of the nutritional supplement
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set instruction
   * Instructions or additional information about the oral supplement
   */
  setInstruction(instruction: string): this {
    this.data.instruction = instruction;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderSupplement instance
   */
  build(): NutritionOrderSupplement {
    return new NutritionOrderSupplement(this.data);
  }

  /**
   * Build and validate the NutritionOrderSupplement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderSupplement> {
    const nutritionOrderSupplement = this.build();
    await nutritionOrderSupplement.validateOrThrow();
    return nutritionOrderSupplement;
  }
}
