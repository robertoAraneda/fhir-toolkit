import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * EncounterHospitalization Interface
 * 
 * Details about the admission to a healthcare service
 * 
 *
 * @see https://hl7.org/fhir/R4B/encounterhospitalization.html
 */
export interface IEncounterHospitalization extends IBackboneElement {
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
   * The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission
   */
  reAdmission?: ICodeableConcept;

  /**
   * Diet preferences reported by the patient
   */
  dietPreference?: ICodeableConcept[];

  /**
   * Special courtesies (VIP, board member)
   */
  specialCourtesy?: ICodeableConcept[];

  /**
   * Wheelchair, translator, stretcher, etc.
   */
  specialArrangement?: ICodeableConcept[];

  /**
   * Location/organization to which the patient is discharged
   */
  destination?: IReference<'Location' | 'Organization'>;

  /**
   * Category or kind of location after discharge
   */
  dischargeDisposition?: ICodeableConcept;

}
