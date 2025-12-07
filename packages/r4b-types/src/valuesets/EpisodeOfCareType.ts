/**
 * EpisodeOfCareType
 * 
 * This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.
 *
 * @see http://hl7.org/fhir/ValueSet/episodeofcare-type
 */

export type EpisodeOfCareTypeType = 'hacc' | 'pac' | 'diab' | 'da' | 'cacp';

export enum EpisodeOfCareTypeEnum {
  /** Home and Community Care */
  Hacc = 'hacc',
  /** Post Acute Care */
  Pac = 'pac',
  /** Post coordinated diabetes program */
  Diab = 'diab',
  /** Drug and alcohol rehabilitation */
  Da = 'da',
  /** Community-based aged care */
  Cacp = 'cacp',
}

export const EpisodeOfCareTypeValues = ['hacc', 'pac', 'diab', 'da', 'cacp'] as const;
