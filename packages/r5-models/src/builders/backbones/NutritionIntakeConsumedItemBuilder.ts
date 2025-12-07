import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionIntakeConsumedItem } from '../../models/backbones/NutritionIntakeConsumedItem.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  INutritionIntakeConsumedItem,
  IQuantity,
  ITiming,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionIntakeConsumedItemBuilder - Fluent builder for NutritionIntakeConsumedItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionIntakeConsumedItem = new NutritionIntakeConsumedItemBuilder()
 *   .setType(value)
 *   .build();
 */
export class NutritionIntakeConsumedItemBuilder extends BackboneElementBuilder<NutritionIntakeConsumedItem, INutritionIntakeConsumedItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of food or fluid product
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set nutritionProduct
   * Code that identifies the food or fluid product that was consumed
   */
  setNutritionProduct(nutritionProduct: ICodeableReference): this {
    this.data.nutritionProduct = nutritionProduct;
    return this;
  }

  /**
   * Set schedule
   * Scheduled frequency of consumption
   */
  setSchedule(schedule: ITiming): this {
    this.data.schedule = schedule;
    return this;
  }

  /**
   * Set amount
   * Quantity of the specified food
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
    return this;
  }

  /**
   * Set rate
   * Rate at which enteral feeding was administered
   */
  setRate(rate: IQuantity): this {
    this.data.rate = rate;
    return this;
  }

  /**
   * Set notConsumed
   * Flag to indicate if the food or fluid item was refused or otherwise not consumed
   */
  setNotConsumed(notConsumed: boolean): this {
    this.data.notConsumed = notConsumed;
    return this;
  }

  /**
   * Set notConsumedReason
   * Reason food or fluid was not consumed
   */
  setNotConsumedReason(notConsumedReason: ICodeableConcept): this {
    this.data.notConsumedReason = notConsumedReason;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionIntakeConsumedItem instance
   */
  build(): NutritionIntakeConsumedItem {
    return new NutritionIntakeConsumedItem(this.data);
  }

  /**
   * Build and validate the NutritionIntakeConsumedItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionIntakeConsumedItem> {
    const nutritionIntakeConsumedItem = this.build();
    await nutritionIntakeConsumedItem.validateOrThrow();
    return nutritionIntakeConsumedItem;
  }
}
