import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPersonLink } from '../backbones/IPersonLink.js';
import type { AdministrativeGenderType } from '../../valuesets/index.js';

/**
 * Person Interface
 * 
 * Demographics and administrative information about a person independent of a specific health-related context.
 * 
 *
 * @see https://hl7.org/fhir/R4B/person.html
 */
export interface IPerson extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Person';

  /**
   * A human identifier for this person
   */
  identifier?: IIdentifier[];

  /**
   * A name associated with the person
   */
  name?: IHumanName[];

  /**
   * A contact detail for the person
   */
  telecom?: IContactPoint[];

  /**
   * male | female | other | unknown
   */
  gender?: AdministrativeGenderType;
  /**
   * Extension for gender
   */
  _gender?: IElement;

  /**
   * The date on which the person was born
   */
  birthDate?: string;
  /**
   * Extension for birthDate
   */
  _birthDate?: IElement;

  /**
   * One or more addresses for the person
   */
  address?: IAddress[];

  /**
   * Image of the person
   */
  photo?: IAttachment;

  /**
   * The organization that is the custodian of the person record
   */
  managingOrganization?: IReference<'Organization'>;

  /**
   * This person's record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * Link to a resource that concerns the same actual person
   */
  link?: IPersonLink[];

}
