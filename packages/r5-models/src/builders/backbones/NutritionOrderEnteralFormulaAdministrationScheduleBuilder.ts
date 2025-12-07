import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderEnteralFormulaAdministrationSchedule } from '../../models/backbones/NutritionOrderEnteralFormulaAdministrationSchedule.js';
import type {
  ICodeableConcept,
  INutritionOrderEnteralFormulaAdministrationSchedule,
  ITiming,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionOrderEnteralFormulaAdministrationScheduleBuilder - Fluent builder for NutritionOrderEnteralFormulaAdministrationSchedule backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderEnteralFormulaAdministrationSchedule = new NutritionOrderEnteralFormulaAdministrationScheduleBuilder()
 *   .setAsNeeded(value)
 *   .addTiming({ ... })
 *   .build();
 */
export class NutritionOrderEnteralFormulaAdministrationScheduleBuilder extends BackboneElementBuilder<NutritionOrderEnteralFormulaAdministrationSchedule, INutritionOrderEnteralFormulaAdministrationSchedule> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set asNeeded
   * Take 'as needed'
   */
  setAsNeeded(asNeeded: boolean): this {
    this.data.asNeeded = asNeeded;
    return this;
  }

  /**
   * Set asNeededFor
   * Take 'as needed' for x
   */
  setAsNeededFor(asNeededFor: ICodeableConcept): this {
    this.data.asNeededFor = asNeededFor;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add timing
   * Scheduled frequency of enteral formula
   */
  addTiming(timing: ITiming): this {
    return this.addToArray('timing', timing);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderEnteralFormulaAdministrationSchedule instance
   */
  build(): NutritionOrderEnteralFormulaAdministrationSchedule {
    return new NutritionOrderEnteralFormulaAdministrationSchedule(this.data);
  }

  /**
   * Build and validate the NutritionOrderEnteralFormulaAdministrationSchedule instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderEnteralFormulaAdministrationSchedule> {
    const nutritionOrderEnteralFormulaAdministrationSchedule = this.build();
    await nutritionOrderEnteralFormulaAdministrationSchedule.validateOrThrow();
    return nutritionOrderEnteralFormulaAdministrationSchedule;
  }
}
