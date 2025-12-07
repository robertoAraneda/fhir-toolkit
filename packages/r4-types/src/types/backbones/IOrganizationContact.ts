import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IHumanName } from '../datatypes/IHumanName.js';

/**
 * OrganizationContact Interface
 * 
 * Contact for the organization for a certain purpose
 * 
 *
 * @see https://hl7.org/fhir/R4/organizationcontact.html
 */
export interface IOrganizationContact extends IBackboneElement {
  /**
   * The type of contact
   */
  purpose?: ICodeableConcept;

  /**
   * A name associated with the contact
   */
  name?: IHumanName;

  /**
   * Contact details (telephone, email, etc.)  for a contact
   */
  telecom?: IContactPoint[];

  /**
   * Visiting or postal addresses for the contact
   */
  address?: IAddress;

}
