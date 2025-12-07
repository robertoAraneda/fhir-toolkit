/**
 * Example Message Reason Codes
 * 
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 *
 * @see http://hl7.org/fhir/ValueSet/message-reason-encounter
 */

export type ExampleMessageReasonType = 'admit' | 'discharge' | 'absent' | 'return' | 'moved' | 'edit';

export enum ExampleMessageReasonEnum {
  /** Admit */
  Admit = 'admit',
  /** Discharge */
  Discharge = 'discharge',
  /** Absent */
  Absent = 'absent',
  /** Returned */
  Return = 'return',
  /** Moved */
  Moved = 'moved',
  /** Edit */
  Edit = 'edit',
}

export const ExampleMessageReasonValues = ['admit', 'discharge', 'absent', 'return', 'moved', 'edit'] as const;
