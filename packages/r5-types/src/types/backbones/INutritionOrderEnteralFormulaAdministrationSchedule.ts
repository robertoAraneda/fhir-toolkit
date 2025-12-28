import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ITiming } from '../datatypes/ITiming.js';

/**
 * NutritionOrderEnteralFormulaAdministrationSchedule Interface
 * 
 * Scheduling information for enteral formula products
 * 
 *
 * @see https://hl7.org/fhir/R5/nutritionorderenteralformulaadministrationschedule.html
 */
export interface INutritionOrderEnteralFormulaAdministrationSchedule extends IBackboneElement {
  /**
   * Scheduled frequency of enteral formula
   */
  timing?: ITiming[];

  /**
   * Take 'as needed'
   */
  asNeeded?: boolean;
  /**
   * Extension for asNeeded
   */
  _asNeeded?: IElement;

  /**
   * Take 'as needed' for x
   */
  asNeededFor?: ICodeableConcept;

}
