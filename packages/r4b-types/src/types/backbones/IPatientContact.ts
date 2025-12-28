import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { AdministrativeGenderType } from '../../valuesets/index.js';

/**
 * PatientContact Interface
 * 
 * A contact party (e.g. guardian, partner, friend) for the patient
 * 
 *
 * @see https://hl7.org/fhir/R4B/patientcontact.html
 */
export interface IPatientContact extends IBackboneElement {
  /**
   * The kind of relationship
   */
  relationship?: ICodeableConcept[];

  /**
   * A name associated with the contact person
   */
  name?: IHumanName;

  /**
   * A contact detail for the person
   */
  telecom?: IContactPoint[];

  /**
   * Address for the contact person
   */
  address?: IAddress;

  /**
   * male | female | other | unknown
   */
  gender?: AdministrativeGenderType;
  /**
   * Extension for gender
   */
  _gender?: IElement;

  /**
   * Organization that is associated with the contact
   */
  organization?: IReference<'Organization'>;

  /**
   * The period during which this contact person or organization is valid to be contacted relating to this patient
   */
  period?: IPeriod;

}
