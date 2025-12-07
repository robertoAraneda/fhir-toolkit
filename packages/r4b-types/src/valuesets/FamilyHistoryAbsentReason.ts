/**
 * FamilyHistoryAbsentReason
 * 
 * Codes describing the reason why a family member's history is not available.
 *
 * @see http://hl7.org/fhir/ValueSet/history-absent-reason
 */

export type FamilyHistoryAbsentReasonType = 'subject-unknown' | 'withheld' | 'unable-to-obtain' | 'deferred';

export enum FamilyHistoryAbsentReasonEnum {
  /** Subject Unknown */
  SubjectUnknown = 'subject-unknown',
  /** Information Withheld */
  Withheld = 'withheld',
  /** Unable To Obtain */
  UnableToObtain = 'unable-to-obtain',
  /** Deferred */
  Deferred = 'deferred',
}

export const FamilyHistoryAbsentReasonValues = ['subject-unknown', 'withheld', 'unable-to-obtain', 'deferred'] as const;
