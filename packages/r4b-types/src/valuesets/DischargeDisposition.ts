/**
 * DischargeDisposition
 * 
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-discharge-disposition
 */

export type DischargeDispositionType = 'home' | 'alt-home' | 'other-hcf' | 'hosp' | 'long' | 'aadvice' | 'exp' | 'psy' | 'rehab' | 'snf' | 'oth';

export enum DischargeDispositionEnum {
  /** Home */
  Home = 'home',
  /** Alternative home */
  AltHome = 'alt-home',
  /** Other healthcare facility */
  OtherHcf = 'other-hcf',
  /** Hospice */
  Hosp = 'hosp',
  /** Long-term care */
  Long = 'long',
  /** Left against advice */
  Aadvice = 'aadvice',
  /** Expired */
  Exp = 'exp',
  /** Psychiatric hospital */
  Psy = 'psy',
  /** Rehabilitation */
  Rehab = 'rehab',
  /** Skilled nursing facility */
  Snf = 'snf',
  /** Other */
  Oth = 'oth',
}

export const DischargeDispositionValues = ['home', 'alt-home', 'other-hcf', 'hosp', 'long', 'aadvice', 'exp', 'psy', 'rehab', 'snf', 'oth'] as const;
