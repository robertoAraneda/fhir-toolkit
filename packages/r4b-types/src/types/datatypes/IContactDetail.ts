import type { IElement } from '../../base/index.js';
import type { IContactPoint } from './IContactPoint.js';

/**
 * ContactDetail Interface
 * 
 * Specifies contact information for a person or organization.
 * 
 *
 * @see https://hl7.org/fhir/R4/contactdetail.html
 */
export interface IContactDetail extends IElement {
  /**
   * Name of an individual to contact
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Contact details for individual or organization
   */
  telecom?: IContactPoint[];

}
