/**
 * Participant type
 * 
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-participant-type
 */

export type ParticipantTypeType = 'SPRF' | 'PPRF' | 'PART' | 'translator' | 'emergency';

export enum ParticipantTypeEnum {
  Sprf = 'SPRF',
  Pprf = 'PPRF',
  Part = 'PART',
  /** Translator */
  Translator = 'translator',
  /** Emergency */
  Emergency = 'emergency',
}

export const ParticipantTypeValues = ['SPRF', 'PPRF', 'PART', 'translator', 'emergency'] as const;
