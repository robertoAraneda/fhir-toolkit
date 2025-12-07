/**
 * Failure-action
 * 
 * The result if validation fails
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-failure-action
 */

export type FailureActionType = 'fatal' | 'warn' | 'rec-only' | 'none';

export enum FailureActionEnum {
  /** Fatal */
  Fatal = 'fatal',
  /** Warning */
  Warn = 'warn',
  /** Record only */
  RecOnly = 'rec-only',
  /** None */
  None = 'none',
}

export const FailureActionValues = ['fatal', 'warn', 'rec-only', 'none'] as const;
