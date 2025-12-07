/**
 * Encounter Reason Use
 * 
 * What a specific Encounter/EpisodeOfCare `reason.value` is to be used for.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-reason-use
 */

export type EncounterReasonUseType = 'CC' | 'HC' | 'AD' | 'RV' | 'HM';

export enum EncounterReasonUseEnum {
  /** Chief Complaint */
  Cc = 'CC',
  /** Health Concern */
  Hc = 'HC',
  /** Admitting Diagnosis */
  Ad = 'AD',
  /** Reason for Visit */
  Rv = 'RV',
  /** Health Maintenance (including screening) */
  Hm = 'HM',
}

export const EncounterReasonUseValues = ['CC', 'HC', 'AD', 'RV', 'HM'] as const;
