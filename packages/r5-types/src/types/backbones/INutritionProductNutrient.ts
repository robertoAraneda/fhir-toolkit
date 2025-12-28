import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * NutritionProductNutrient Interface
 * 
 * The product's nutritional information expressed by the nutrients
 * 
 *
 * @see https://hl7.org/fhir/R5/nutritionproductnutrient.html
 */
export interface INutritionProductNutrient extends IBackboneElement {
  /**
   * The (relevant) nutrients in the product
   */
  item?: ICodeableReference;

  /**
   * The amount of nutrient expressed in one or more units: X per pack / per serving / per dose
   */
  amount?: IRatio[];

}
