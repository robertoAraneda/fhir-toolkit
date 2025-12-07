/**
 * Action Participant Function
 * 
 * The function performed by the participant for the action.
 *
 * @see http://hl7.org/fhir/ValueSet/action-participant-function
 */

export type ActionParticipantFunctionType = 'performer' | 'author' | 'reviewer' | 'witness';

export enum ActionParticipantFunctionEnum {
  /** Performer */
  Performer = 'performer',
  /** Author */
  Author = 'author',
  /** Reviewer */
  Reviewer = 'reviewer',
  /** Witness */
  Witness = 'witness',
}

export const ActionParticipantFunctionValues = ['performer', 'author', 'reviewer', 'witness'] as const;
