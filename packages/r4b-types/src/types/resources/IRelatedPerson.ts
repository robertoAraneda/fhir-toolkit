import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedPersonCommunication } from '../backbones/IRelatedPersonCommunication.js';
import type { AdministrativeGenderType } from '../../valuesets/index.js';

/**
 * RelatedPerson Interface
 * 
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 * 
 *
 * @see https://hl7.org/fhir/R4/relatedperson.html
 */
export interface IRelatedPerson extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'RelatedPerson';

  /**
   * A human identifier for this person
   */
  identifier?: IIdentifier[];

  /**
   * Whether this related person's record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * The patient this person is related to
   */
  patient: IReference<'Patient'>;

  /**
   * The nature of the relationship
   */
  relationship?: ICodeableConcept[];

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
   * The date on which the related person was born
   */
  birthDate?: string;
  /**
   * Extension for birthDate
   */
  _birthDate?: IElement;

  /**
   * Address where the related person can be contacted or visited
   */
  address?: IAddress[];

  /**
   * Image of the person
   */
  photo?: IAttachment[];

  /**
   * Period of time that this relationship is considered valid
   */
  period?: IPeriod;

  /**
   * A language which may be used to communicate with about the patient's health
   */
  communication?: IRelatedPersonCommunication[];

}
