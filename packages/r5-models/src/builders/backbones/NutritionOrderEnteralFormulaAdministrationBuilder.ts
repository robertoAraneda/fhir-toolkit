import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderEnteralFormulaAdministration } from '../../models/backbones/NutritionOrderEnteralFormulaAdministration.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  INutritionOrderEnteralFormulaAdministration,
  INutritionOrderEnteralFormulaAdministrationSchedule,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionOrderEnteralFormulaAdministrationBuilder - Fluent builder for NutritionOrderEnteralFormulaAdministration backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderEnteralFormulaAdministration = new NutritionOrderEnteralFormulaAdministrationBuilder()
 *   .setSchedule(value)
 *   .build();
 */
export class NutritionOrderEnteralFormulaAdministrationBuilder extends BackboneElementBuilder<NutritionOrderEnteralFormulaAdministration, INutritionOrderEnteralFormulaAdministration> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set schedule
   * Scheduling information for enteral formula products
   */
  setSchedule(schedule: INutritionOrderEnteralFormulaAdministrationSchedule): this {
    this.data.schedule = schedule;
    return this;
  }

  /**
   * Set quantity
   * The volume of formula to provide
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set rate choice type (rateQuantity, rateRatio)
   * @param type - 'Quantity' | 'Ratio'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setRate('Quantity', value)
   */
  setRate<T extends 'Quantity' | 'Ratio'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `rate${type}` as keyof INutritionOrderEnteralFormulaAdministration;
    const otherKeys: (keyof INutritionOrderEnteralFormulaAdministration)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('rateQuantity' as keyof INutritionOrderEnteralFormulaAdministration);
      otherKeys.push('_rateQuantity' as keyof INutritionOrderEnteralFormulaAdministration);
    }
    if (type !== 'Ratio') {
      otherKeys.push('rateRatio' as keyof INutritionOrderEnteralFormulaAdministration);
      otherKeys.push('_rateRatio' as keyof INutritionOrderEnteralFormulaAdministration);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderEnteralFormulaAdministration instance
   */
  build(): NutritionOrderEnteralFormulaAdministration {
    return new NutritionOrderEnteralFormulaAdministration(this.data);
  }

  /**
   * Build and validate the NutritionOrderEnteralFormulaAdministration instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderEnteralFormulaAdministration> {
    const nutritionOrderEnteralFormulaAdministration = this.build();
    await nutritionOrderEnteralFormulaAdministration.validateOrThrow();
    return nutritionOrderEnteralFormulaAdministration;
  }
}
