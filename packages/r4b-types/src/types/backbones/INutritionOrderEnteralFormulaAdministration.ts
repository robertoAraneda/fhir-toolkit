import type { IBackboneElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { ITiming } from '../datatypes/ITiming.js';

/**
 * NutritionOrderEnteralFormulaAdministration Interface
 * 
 * Formula feeding instruction as structured data
 * 
 *
 * @see https://hl7.org/fhir/R4B/nutritionorderenteralformulaadministration.html
 */
export interface INutritionOrderEnteralFormulaAdministration extends IBackboneElement {
  /**
   * Scheduled frequency of enteral feeding
   */
  schedule?: ITiming;

  /**
   * The volume of formula to provide
   */
  quantity?: IQuantity;

  /**
   * Speed with which the formula is provided per period of time
   */
  rateQuantity?: IQuantity;

  /**
   * Speed with which the formula is provided per period of time
   */
  rateRatio?: IRatio;

}
