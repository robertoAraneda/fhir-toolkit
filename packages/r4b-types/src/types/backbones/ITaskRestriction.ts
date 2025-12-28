import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * TaskRestriction Interface
 * 
 * Constraints on fulfillment tasks
 * 
 *
 * @see https://hl7.org/fhir/R4B/taskrestriction.html
 */
export interface ITaskRestriction extends IBackboneElement {
  /**
   * How many times to repeat
   */
  repetitions?: number;
  /**
   * Extension for repetitions
   */
  _repetitions?: IElement;

  /**
   * When fulfillment sought
   */
  period?: IPeriod;

  /**
   * For whom is fulfillment sought?
   */
  recipient?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'Organization'>[];

}
