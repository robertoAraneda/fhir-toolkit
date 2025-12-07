import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * EncounterAdmission Interface
 * 
 * Details about the admission to a healthcare service
 * 
 *
 * @see https://hl7.org/fhir/R4/encounteradmission.html
 */
export interface IEncounterAdmission extends IBackboneElement {
  /**
   * Pre-admission identifier
   */
  preAdmissionIdentifier?: IIdentifier;

  /**
   * The location/organization from which the patient came before admission
   */
  origin?: IReference<'Location' | 'Organization'>;

  /**
   * From where patient was admitted (physician referral, transfer)
   */
  admitSource?: ICodeableConcept;

  /**
   * Indicates that the patient is being re-admitted
   */
  reAdmission?: ICodeableConcept;

  /**
   * Location/organization to which the patient is discharged
   */
  destination?: IReference<'Location' | 'Organization'>;

  /**
   * Category or kind of location after discharge
   */
  dischargeDisposition?: ICodeableConcept;

}
