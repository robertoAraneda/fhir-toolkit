import type { IDomainResource, IElement } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPractitionerCommunication } from '../backbones/IPractitionerCommunication.js';
import type { IPractitionerQualification } from '../backbones/IPractitionerQualification.js';
import type { AdministrativeGenderType } from '../../valuesets/index.js';

/**
 * Practitioner Interface
 * 
 * A person who is directly or indirectly involved in the provisioning of healthcare or related services.
 * 
 *
 * @see https://hl7.org/fhir/R4/practitioner.html
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
   * Indicates if the practitioner is deceased or not
   */
  deceasedBoolean?: boolean;
  /**
   * Extension for deceasedBoolean
   */
  _deceasedBoolean?: IElement;

  /**
   * Indicates if the practitioner is deceased or not
   */
  deceasedDateTime?: string;
  /**
   * Extension for deceasedDateTime
   */
  _deceasedDateTime?: IElement;

  /**
   * Address(es) of the practitioner that are not role specific (typically home address)
   */
  address?: IAddress[];

  /**
   * Image of the person
   */
  photo?: IAttachment[];

  /**
   * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care
   */
  qualification?: IPractitionerQualification[];

  /**
   * A language which may be used to communicate with the practitioner
   */
  communication?: IPractitionerCommunication[];

}
