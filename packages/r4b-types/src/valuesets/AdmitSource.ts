/**
 * AdmitSource
 * 
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-admit-source
 */

export type AdmitSourceType = 'hosp-trans' | 'emd' | 'outp' | 'born' | 'gp' | 'mp' | 'nursing' | 'psych' | 'rehab' | 'other';

export enum AdmitSourceEnum {
  /** Transferred from other hospital */
  HospTrans = 'hosp-trans',
  /** From accident/emergency department */
  Emd = 'emd',
  /** From outpatient department */
  Outp = 'outp',
  /** Born in hospital */
  Born = 'born',
  /** General Practitioner referral */
  Gp = 'gp',
  /** Medical Practitioner/physician referral */
  Mp = 'mp',
  /** From nursing home */
  Nursing = 'nursing',
  /** From psychiatric hospital */
  Psych = 'psych',
  /** From rehabilitation facility */
  Rehab = 'rehab',
  /** Other */
  Other = 'other',
}

export const AdmitSourceValues = ['hosp-trans', 'emd', 'outp', 'born', 'gp', 'mp', 'nursing', 'psych', 'rehab', 'other'] as const;
