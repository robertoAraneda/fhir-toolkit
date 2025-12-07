import type { ICodeableConcept, IDataType, IReference } from '../../base/index.js';
import type { IAddress } from './IAddress.js';
import type { IContactPoint } from './IContactPoint.js';
import type { IHumanName } from './IHumanName.js';
import type { IPeriod } from './IPeriod.js';

/**
 * ExtendedContactDetail Interface
 * 
 * Specifies contact information for a specific purpose over a period of time, might be handled/monitored by a specific named person or organization.
 * 
 *
 * @see https://hl7.org/fhir/R4/extendedcontactdetail.html
 */
export interface IExtendedContactDetail extends IDataType {
  /**
   * The type of contact
   */
  purpose?: ICodeableConcept;

  /**
   * Name of an individual to contact
   */
  name?: IHumanName[];

  /**
   * Contact details (e.g.phone/fax/url)
   */
  telecom?: IContactPoint[];

  /**
   * Address for the contact
   */
  address?: IAddress;

  /**
   * This contact detail is handled/monitored by a specific organization
   */
  organization?: IReference<'Organization'>;

  /**
   * Period that this contact was valid for usage
   */
  period?: IPeriod;

}
