import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * NutritionIntakeIngredientLabel Interface
 * 
 * Total nutrient for the whole meal, product, serving
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionintakeingredientlabel.html
 */
export interface INutritionIntakeIngredientLabel extends IBackboneElement {
  /**
   * Total nutrient consumed
   */
  nutrient: ICodeableReference;

  /**
   * Total amount of nutrient consumed
   */
  amount: IQuantity;

}
