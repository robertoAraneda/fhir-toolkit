import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPatientCommunication } from '../backbones/IPatientCommunication.js';
import type { IPatientContact } from '../backbones/IPatientContact.js';
import type { IPatientLink } from '../backbones/IPatientLink.js';
import type { AdministrativeGenderType } from '../../valuesets/index.js';

/**
 * Patient Interface
 * 
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 * 
 *
 * @see https://hl7.org/fhir/R4/patient.html
 */
export interface IPatient extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Patient';

  /**
   * An identifier for this patient
   */
  identifier?: IIdentifier[];

  /**
   * Whether this patient's record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * A name associated with the patient
   */
  name?: IHumanName[];

  /**
   * A contact detail for the individual
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
   * The date of birth for the individual
   */
  birthDate?: string;
  /**
   * Extension for birthDate
   */
  _birthDate?: IElement;

  /**
   * Indicates if the individual is deceased or not
   */
  deceasedBoolean?: boolean;
  /**
   * Extension for deceasedBoolean
   */
  _deceasedBoolean?: IElement;

  /**
   * Indicates if the individual is deceased or not
   */
  deceasedDateTime?: string;
  /**
   * Extension for deceasedDateTime
   */
  _deceasedDateTime?: IElement;

  /**
   * An address for the individual
   */
  address?: IAddress[];

  /**
   * Marital (civil) status of a patient
   */
  maritalStatus?: ICodeableConcept;

  /**
   * Whether patient is part of a multiple birth
   */
  multipleBirthBoolean?: boolean;
  /**
   * Extension for multipleBirthBoolean
   */
  _multipleBirthBoolean?: IElement;

  /**
   * Whether patient is part of a multiple birth
   */
  multipleBirthInteger?: number;
  /**
   * Extension for multipleBirthInteger
   */
  _multipleBirthInteger?: IElement;

  /**
   * Image of the patient
   */
  photo?: IAttachment[];

  /**
   * A contact party (e.g. guardian, partner, friend) for the patient
   */
  contact?: IPatientContact[];

  /**
   * A language which may be used to communicate with the patient about his or her health
   */
  communication?: IPatientCommunication[];

  /**
   * Patient's nominated primary care provider
   */
  generalPractitioner?: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>[];

  /**
   * Organization that is the custodian of the patient record
   */
  managingOrganization?: IReference<'Organization'>;

  /**
   * Link to another patient resource that concerns the same actual person
   */
  link?: IPatientLink[];

}
