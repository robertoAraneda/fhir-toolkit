/**
 * MedicationDispense Status Reason Codes
 * 
 * MedicationDispense Status Reason Codes
 *
 * @see http://hl7.org/fhir/ValueSet/medicationdispense-status-reason
 */

export type MedicationDispenseStatusReasonType = 'frr01' | 'frr02' | 'frr03' | 'frr04' | 'frr05' | 'frr06' | 'altchoice' | 'clarif' | 'drughigh' | 'hospadm' | 'labint' | 'non-avail' | 'preg' | 'saig' | 'sddi' | 'sdupther' | 'sintol' | 'surg' | 'washout' | 'outofstock' | 'offmarket';

export enum MedicationDispenseStatusReasonEnum {
  /** Order Stopped */
  Frr01 = 'frr01',
  /** Stale-dated Order */
  Frr02 = 'frr02',
  /** Incomplete data */
  Frr03 = 'frr03',
  /** Product unavailable */
  Frr04 = 'frr04',
  /** Ethical/religious */
  Frr05 = 'frr05',
  /** Unable to provide care */
  Frr06 = 'frr06',
  /** Try another treatment first */
  Altchoice = 'altchoice',
  /** Prescription/Request requires clarification */
  Clarif = 'clarif',
  /** Drug level too high */
  Drughigh = 'drughigh',
  /** Admission to hospital */
  Hospadm = 'hospadm',
  /** Lab interference issues */
  Labint = 'labint',
  /** Patient not available */
  NonAvail = 'non-avail',
  /** Patient is pregnant or breastfeeding */
  Preg = 'preg',
  /** Allergy */
  Saig = 'saig',
  /** Drug interacts with another drug */
  Sddi = 'sddi',
  /** Duplicate therapy */
  Sdupther = 'sdupther',
  /** Suspected intolerance */
  Sintol = 'sintol',
  /** Patient scheduled for surgery */
  Surg = 'surg',
  /** Washout */
  Washout = 'washout',
  /** Drug not available - out of stock */
  Outofstock = 'outofstock',
  /** Drug not available - off market */
  Offmarket = 'offmarket',
}

export const MedicationDispenseStatusReasonValues = ['frr01', 'frr02', 'frr03', 'frr04', 'frr05', 'frr06', 'altchoice', 'clarif', 'drughigh', 'hospadm', 'labint', 'non-avail', 'preg', 'saig', 'sddi', 'sdupther', 'sintol', 'surg', 'washout', 'outofstock', 'offmarket'] as const;
