import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPractitionerQualification } from '../backbones/IPractitionerQualification.js';
import type { AdministrativeGenderType } from '../../valuesets/index.js';

/**
 * Practitioner Interface
 * 
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 * 
 *
 * @see https://hl7.org/fhir/R4B/practitioner.html
 */
export interface IPractitioner extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Practitioner';

  /**
   * An identifier for the person as this agent
   */
  identifier?: IIdentifier[];

  /**
   * Whether this practitioner's record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * The name(s) associated with the practitioner
   */
  name?: IHumanName[];

  /**
   * A contact detail for the practitioner (that apply to all roles)
   */
  telecom?: IContactPoint[];

  /**
   * Address(es) of the practitioner that are not role specific (typically home address)
   */
  address?: IAddress[];

  /**
   * male | female | other | unknown
   */
  gender?: AdministrativeGenderType;
  /**
   * Extension for gender
   */
  _gender?: IElement;

  /**
   * The date  on which the practitioner was born
   */
  birthDate?: string;
  /**
   * Extension for birthDate
   */
  _birthDate?: IElement;

  /**
   * Image of the person
   */
  photo?: IAttachment[];

  /**
   * Certification, licenses, or training pertaining to the provision of care
   */
  qualification?: IPractitionerQualification[];

  /**
   * A language the practitioner can use in patient communication
   */
  communication?: ICodeableConcept[];

}
