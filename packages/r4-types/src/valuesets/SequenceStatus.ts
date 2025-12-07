/**
 * sequenceStatus
 * 
 * Codes providing the status of the variant test result.
 *
 * @see http://hl7.org/fhir/ValueSet/variant-state
 */

export type SequenceStatusType = 'positive' | 'negative' | 'absent';

export enum SequenceStatusEnum {
  /** positive */
  Positive = 'positive',
  /** negative */
  Negative = 'negative',
  /** absent */
  Absent = 'absent',
}

export const SequenceStatusValues = ['positive', 'negative', 'absent'] as const;
