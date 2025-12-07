/**
 * Adverse Event Status
 * 
 * Codes identifying the lifecycle stage of an adverse event.
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-status
 */

export type AdverseEventStatusType = 'in-progress' | 'completed' | 'entered-in-error' | 'unknown';

export enum AdverseEventStatusEnum {
  InProgress = 'in-progress',
  Completed = 'completed',
  EnteredInError = 'entered-in-error',
  Unknown = 'unknown',
}

export const AdverseEventStatusValues = ['in-progress', 'completed', 'entered-in-error', 'unknown'] as const;
