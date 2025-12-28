import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * TransportRestriction Interface
 * 
 * Constraints on fulfillment transports
 * 
 *
 * @see https://hl7.org/fhir/R5/transportrestriction.html
 */
export interface ITransportRestriction extends IBackboneElement {
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
