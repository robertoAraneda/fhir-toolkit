/**
 * MedicationRequestStatusReason
 * 
 * MedicationRequest Status Reason Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationrequest-status-reason
 */

export type MedicationRequestStatusReasonType = 'altchoice' | 'clarif' | 'drughigh' | 'hospadm' | 'labint' | 'non-avail' | 'preg' | 'salg' | 'sddi' | 'sdupther' | 'sintol' | 'surg' | 'washout';

export enum MedicationRequestStatusReasonEnum {
  /** Try another treatment first */
  Altchoice = 'altchoice',
  /** Prescription requires clarification */
  Clarif = 'clarif',
  /** Drug level too high */
  Drughigh = 'drughigh',
  /** Admission to hospital */
  Hospadm = 'hospadm',
  /** Lab interference issues */
  Labint = 'labint',
  /** Patient not available */
  NonAvail = 'non-avail',
  /** Parent is pregnant/breast feeding */
  Preg = 'preg',
  /** Allergy */
  Salg = 'salg',
  /** Drug interacts with another drug */
  Sddi = 'sddi',
  /** Duplicate therapy */
  Sdupther = 'sdupther',
  /** Suspected intolerance */
  Sintol = 'sintol',
  /** Patient scheduled for surgery. */
  Surg = 'surg',
  /** Waiting for old drug to wash out */
  Washout = 'washout',
}

export const MedicationRequestStatusReasonValues = ['altchoice', 'clarif', 'drughigh', 'hospadm', 'labint', 'non-avail', 'preg', 'salg', 'sddi', 'sdupther', 'sintol', 'surg', 'washout'] as const;
