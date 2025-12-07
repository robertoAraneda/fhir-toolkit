/**
 * AdverseEvent Participant Function
 * 
 * This value set includes codes that describe the type of involvement of the actor in the adverse event.
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-participant-function
 */

export type AdverseEventParticipantFunctionType = 'INF' | 'PART' | 'WIT' | 'AUT';

export enum AdverseEventParticipantFunctionEnum {
  Inf = 'INF',
  Part = 'PART',
  Wit = 'WIT',
  Aut = 'AUT',
}

export const AdverseEventParticipantFunctionValues = ['INF', 'PART', 'WIT', 'AUT'] as const;
