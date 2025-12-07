/**
 * Encounter Diagnosis Use
 * 
 * What a specific Encounter/EpisodeOfCare `diagnosis.condition` is to be used for.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-diagnosis-use
 */

export type EncounterDiagnosisUseType = 'working' | 'final';

export enum EncounterDiagnosisUseEnum {
  /** Working */
  Working = 'working',
  /** Final */
  Final = 'final',
}

export const EncounterDiagnosisUseValues = ['working', 'final'] as const;
