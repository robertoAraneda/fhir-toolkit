/**
 * EncounterType
 * 
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-type
 */

export type EncounterTypeType = 'ADMS' | 'BD/BM-clin' | 'CCS60' | 'OKI';

export enum EncounterTypeEnum {
  /** Annual diabetes mellitus screening */
  Adms = 'ADMS',
  /** Bone drilling/bone marrow punction in clinic */
  BdBmClin = 'BD/BM-clin',
  /** Infant colon screening - 60 minutes */
  Ccs60 = 'CCS60',
  /** Outpatient Kenacort injection */
  Oki = 'OKI',
}

export const EncounterTypeValues = ['ADMS', 'BD/BM-clin', 'CCS60', 'OKI'] as const;
