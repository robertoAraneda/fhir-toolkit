import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { INutritionOrderOralDietNutrient } from './INutritionOrderOralDietNutrient.js';
import type { INutritionOrderOralDietSchedule } from './INutritionOrderOralDietSchedule.js';
import type { INutritionOrderOralDietTexture } from './INutritionOrderOralDietTexture.js';

/**
 * NutritionOrderOralDiet Interface
 * 
 * Oral diet components
 * 
 *
 * @see https://hl7.org/fhir/R5/nutritionorderoraldiet.html
 */
export interface INutritionOrderOralDiet extends IBackboneElement {
  /**
   * Type of oral diet or diet restrictions that describe what can be consumed orally
   */
  type?: ICodeableConcept[];

  /**
   * Scheduling information for oral diets
   */
  schedule?: INutritionOrderOralDietSchedule;

  /**
   * Required  nutrient modifications
   */
  nutrient?: INutritionOrderOralDietNutrient[];

  /**
   * Required  texture modifications
   */
  texture?: INutritionOrderOralDietTexture[];

  /**
   * The required consistency of fluids and liquids provided to the patient
   */
  fluidConsistencyType?: ICodeableConcept[];

  /**
   * Instructions or additional information about the oral diet
   */
  instruction?: string;
  /**
   * Extension for instruction
   */
  _instruction?: IElement;

}
