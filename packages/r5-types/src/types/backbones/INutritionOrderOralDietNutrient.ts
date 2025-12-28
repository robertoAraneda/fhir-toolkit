import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * NutritionOrderOralDietNutrient Interface
 * 
 * Required  nutrient modifications
 * 
 *
 * @see https://hl7.org/fhir/R5/nutritionorderoraldietnutrient.html
 */
export interface INutritionOrderOralDietNutrient extends IBackboneElement {
  /**
   * Type of nutrient that is being modified
   */
  modifier?: ICodeableConcept;

  /**
   * Quantity of the specified nutrient
   */
  amount?: IQuantity;

}
