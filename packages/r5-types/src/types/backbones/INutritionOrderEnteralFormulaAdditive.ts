import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * NutritionOrderEnteralFormulaAdditive Interface
 * 
 * Components to add to the feeding
 * 
 *
 * @see https://hl7.org/fhir/R5/nutritionorderenteralformulaadditive.html
 */
export interface INutritionOrderEnteralFormulaAdditive extends IBackboneElement {
  /**
   * Type of modular component to add to the feeding
   */
  type?: ICodeableReference;

  /**
   * Product or brand name of the modular additive
   */
  productName?: string;
  /**
   * Extension for productName
   */
  _productName?: IElement;

  /**
   * Amount of additive to be given or mixed in
   */
  quantity?: IQuantity;

}
