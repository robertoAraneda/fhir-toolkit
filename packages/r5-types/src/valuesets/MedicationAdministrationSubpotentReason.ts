/**
 * MedicationAdministration Subpotent Reason
 * 
 * MedicationAdministration Subpotent Reason
 *
 * @see http://hl7.org/fhir/ValueSet/administration-subpotent-reason
 */

export type MedicationAdministrationSubpotentReasonType = 'partialdose' | 'vomited' | 'coldchainbreak' | 'recall' | 'adversestorage' | 'expired';

export enum MedicationAdministrationSubpotentReasonEnum {
  /** Partial Dose */
  Partialdose = 'partialdose',
  /** Vomited */
  Vomited = 'vomited',
  /** Cold Chain Break */
  Coldchainbreak = 'coldchainbreak',
  /** Manufacturer Recall */
  Recall = 'recall',
  /** Adverse Storage */
  Adversestorage = 'adversestorage',
  /** Expired Product */
  Expired = 'expired',
}

export const MedicationAdministrationSubpotentReasonValues = ['partialdose', 'vomited', 'coldchainbreak', 'recall', 'adversestorage', 'expired'] as const;
