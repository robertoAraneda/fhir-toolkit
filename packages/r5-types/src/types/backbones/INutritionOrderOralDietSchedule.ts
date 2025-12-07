import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ITiming } from '../datatypes/ITiming.js';

/**
 * NutritionOrderOralDietSchedule Interface
 * 
 * Scheduling information for oral diets
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionorderoraldietschedule.html
 */
export interface INutritionOrderOralDietSchedule extends IBackboneElement {
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
