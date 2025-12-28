import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * NutritionProductIngredient Interface
 * 
 * Ingredients contained in this product
 * 
 *
 * @see https://hl7.org/fhir/R5/nutritionproductingredient.html
 */
export interface INutritionProductIngredient extends IBackboneElement {
  /**
   * The ingredient contained in the product
   */
  item: ICodeableReference;

  /**
   * The amount of ingredient that is in the product
   */
  amount?: IRatio[];

}
