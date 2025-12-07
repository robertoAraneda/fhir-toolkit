import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { INutritionOrderSupplementSchedule } from './INutritionOrderSupplementSchedule.js';

/**
 * NutritionOrderSupplement Interface
 * 
 * Supplement components
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionordersupplement.html
 */
export interface INutritionOrderSupplement extends IBackboneElement {
  /**
   * Type of supplement product requested
   */
  type?: ICodeableReference;

  /**
   * Product or brand name of the nutritional supplement
   */
  productName?: string;
  /**
   * Extension for productName
   */
  _productName?: IElement;

  /**
   * Scheduling information for supplements
   */
  schedule?: INutritionOrderSupplementSchedule;

  /**
   * Amount of the nutritional supplement
   */
  quantity?: IQuantity;

  /**
   * Instructions or additional information about the oral supplement
   */
  instruction?: string;
  /**
   * Extension for instruction
   */
  _instruction?: IElement;

}
