import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ITiming } from '../datatypes/ITiming.js';

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
  type?: ICodeableConcept;

  /**
   * Product or brand name of the nutritional supplement
   */
  productName?: string;
  /**
   * Extension for productName
   */
  _productName?: IElement;

  /**
   * Scheduled frequency of supplement
   */
  schedule?: ITiming[];

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
