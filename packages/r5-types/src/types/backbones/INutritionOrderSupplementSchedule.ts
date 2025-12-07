import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ITiming } from '../datatypes/ITiming.js';

/**
 * NutritionOrderSupplementSchedule Interface
 * 
 * Scheduling information for supplements
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionordersupplementschedule.html
 */
export interface INutritionOrderSupplementSchedule extends IBackboneElement {
  /**
   * Scheduled frequency of diet
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
