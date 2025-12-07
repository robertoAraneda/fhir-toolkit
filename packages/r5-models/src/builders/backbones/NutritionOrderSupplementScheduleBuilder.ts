import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderSupplementSchedule } from '../../models/backbones/NutritionOrderSupplementSchedule.js';
import type {
  ICodeableConcept,
  INutritionOrderSupplementSchedule,
  ITiming,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionOrderSupplementScheduleBuilder - Fluent builder for NutritionOrderSupplementSchedule backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderSupplementSchedule = new NutritionOrderSupplementScheduleBuilder()
 *   .setAsNeeded(value)
 *   .addTiming({ ... })
 *   .build();
 */
export class NutritionOrderSupplementScheduleBuilder extends BackboneElementBuilder<NutritionOrderSupplementSchedule, INutritionOrderSupplementSchedule> {
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
   * Build the NutritionOrderSupplementSchedule instance
   */
  build(): NutritionOrderSupplementSchedule {
    return new NutritionOrderSupplementSchedule(this.data);
  }

  /**
   * Build and validate the NutritionOrderSupplementSchedule instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderSupplementSchedule> {
    const nutritionOrderSupplementSchedule = this.build();
    await nutritionOrderSupplementSchedule.validateOrThrow();
    return nutritionOrderSupplementSchedule;
  }
}
