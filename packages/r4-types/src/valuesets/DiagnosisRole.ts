/**
 * DiagnosisRole
 * 
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 *
 * @see http://hl7.org/fhir/ValueSet/diagnosis-role
 */

export type DiagnosisRoleType = 'AD' | 'DD' | 'CC' | 'CM' | 'pre-op' | 'post-op' | 'billing';

export enum DiagnosisRoleEnum {
  /** Admission diagnosis */
  Ad = 'AD',
  /** Discharge diagnosis */
  Dd = 'DD',
  /** Chief complaint */
  Cc = 'CC',
  /** Comorbidity diagnosis */
  Cm = 'CM',
  /** pre-op diagnosis */
  PreOp = 'pre-op',
  /** post-op diagnosis */
  PostOp = 'post-op',
  /** Billing */
  Billing = 'billing',
}

export const DiagnosisRoleValues = ['AD', 'DD', 'CC', 'CM', 'pre-op', 'post-op', 'billing'] as const;
