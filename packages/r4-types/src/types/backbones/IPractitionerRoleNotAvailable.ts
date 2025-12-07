import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * PractitionerRoleNotAvailable Interface
 * 
 * Not available during this time due to provided reason
 * 
 *
 * @see https://hl7.org/fhir/R4/practitionerrolenotavailable.html
 */
export interface IPractitionerRoleNotAvailable extends IBackboneElement {
  /**
   * Reason presented to the user explaining why time not available
   */
  description: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Service not available from this date
   */
  during?: IPeriod;

}
