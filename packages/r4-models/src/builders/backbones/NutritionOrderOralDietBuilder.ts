import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionOrderOralDiet } from '../../models/backbones/NutritionOrderOralDiet.js';
import type {
  ICodeableConcept,
  INutritionOrderOralDiet,
  INutritionOrderOralDietNutrient,
  INutritionOrderOralDietTexture,
  ITiming,
} from '@fhir-toolkit/r4-types';

/**
 * NutritionOrderOralDietBuilder - Fluent builder for NutritionOrderOralDiet backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionOrderOralDiet = new NutritionOrderOralDietBuilder()
 *   .setInstruction(value)
 *   .addType({ ... })
 *   .build();
 */
export class NutritionOrderOralDietBuilder extends BackboneElementBuilder<NutritionOrderOralDiet, INutritionOrderOralDiet> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set instruction
   * Instructions or additional information about the oral diet
   */
  setInstruction(instruction: string): this {
    this.data.instruction = instruction;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Type of oral diet or diet restrictions that describe what can be consumed orally
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add schedule
   * Scheduled frequency of diet
   */
  addSchedule(schedule: ITiming): this {
    return this.addToArray('schedule', schedule);
  }

  /**
   * Add nutrient
   * Required  nutrient modifications
   */
  addNutrient(nutrient: INutritionOrderOralDietNutrient): this {
    return this.addToArray('nutrient', nutrient);
  }

  /**
   * Add texture
   * Required  texture modifications
   */
  addTexture(texture: INutritionOrderOralDietTexture): this {
    return this.addToArray('texture', texture);
  }

  /**
   * Add fluidConsistencyType
   * The required consistency of fluids and liquids provided to the patient
   */
  addFluidConsistencyType(fluidConsistencyType: ICodeableConcept): this {
    return this.addToArray('fluidConsistencyType', fluidConsistencyType);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionOrderOralDiet instance
   */
  build(): NutritionOrderOralDiet {
    return new NutritionOrderOralDiet(this.data);
  }

  /**
   * Build and validate the NutritionOrderOralDiet instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionOrderOralDiet> {
    const nutritionOrderOralDiet = this.build();
    await nutritionOrderOralDiet.validateOrThrow();
    return nutritionOrderOralDiet;
  }
}
