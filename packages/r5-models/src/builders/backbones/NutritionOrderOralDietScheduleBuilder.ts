import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderOralDietSchedule } from '../../models/backbones/NutritionOrderOralDietSchedule.js';
import type {
  ICodeableConcept,
  INutritionOrderOralDietSchedule,
  ITiming,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionOrderOralDietScheduleBuilder - Fluent builder for NutritionOrderOralDietSchedule backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderOralDietSchedule = new NutritionOrderOralDietScheduleBuilder()
 *   .setAsNeeded(value)
 *   .addTiming({ ... })
 *   .build();
 */
export class NutritionOrderOralDietScheduleBuilder extends BackboneElementBuilder<NutritionOrderOralDietSchedule, INutritionOrderOralDietSchedule> {
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
   * Scheduled frequency of diet
   */
  addTiming(timing: ITiming): this {
    return this.addToArray('timing', timing);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderOralDietSchedule instance
   */
  build(): NutritionOrderOralDietSchedule {
    return new NutritionOrderOralDietSchedule(this.data);
  }

  /**
   * Build and validate the NutritionOrderOralDietSchedule instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderOralDietSchedule> {
    const nutritionOrderOralDietSchedule = this.build();
    await nutritionOrderOralDietSchedule.validateOrThrow();
    return nutritionOrderOralDietSchedule;
  }
}
