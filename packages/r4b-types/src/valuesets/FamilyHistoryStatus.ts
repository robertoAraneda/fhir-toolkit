/**
 * FamilyHistoryStatus
 * 
 * A code that identifies the status of the family history record.
 *
 * @see http://hl7.org/fhir/ValueSet/history-status
 */

export type FamilyHistoryStatusType = 'partial' | 'completed' | 'entered-in-error' | 'health-unknown';

export enum FamilyHistoryStatusEnum {
  /** Partial */
  Partial = 'partial',
  /** Completed */
  Completed = 'completed',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Health Unknown */
  HealthUnknown = 'health-unknown',
}

export const FamilyHistoryStatusValues = ['partial', 'completed', 'entered-in-error', 'health-unknown'] as const;
