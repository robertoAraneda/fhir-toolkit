/**
 * Assertion Manual Completion Type
 * 
 * The type of manual completion to use for assertion.
 *
 * @see http://hl7.org/fhir/ValueSet/assert-manual-completion-codes
 */

export type AssertionManualCompletionTypeType = 'fail' | 'pass' | 'skip' | 'stop';

export enum AssertionManualCompletionTypeEnum {
  /** Fail */
  Fail = 'fail',
  /** Pass */
  Pass = 'pass',
  /** Skip */
  Skip = 'skip',
  /** Stop */
  Stop = 'stop',
}

export const AssertionManualCompletionTypeValues = ['fail', 'pass', 'skip', 'stop'] as const;
