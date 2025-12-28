import type { IDataType, IElement } from '../../base/index.js';
import type { IPeriod } from './IPeriod.js';
import type { ContactPointSystemType, ContactPointUseType } from '../../valuesets/index.js';

/**
 * ContactPoint Interface
 * 
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 * 
 *
 * @see https://hl7.org/fhir/R5/contactpoint.html
 */
export interface IContactPoint extends IDataType {
  /**
   * phone | fax | email | pager | url | sms | other
   */
  system?: ContactPointSystemType;
  /**
   * Extension for system
   */
  _system?: IElement;

  /**
   * The actual contact point details
   */
  value?: string;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * home | work | temp | old | mobile - purpose of this contact point
   */
  use?: ContactPointUseType;
  /**
   * Extension for use
   */
  _use?: IElement;

  /**
   * Specify preferred order of use (1 = highest)
   */
  rank?: number;
  /**
   * Extension for rank
   */
  _rank?: IElement;

  /**
   * Time period when the contact point was/is in use
   */
  period?: IPeriod;

}
