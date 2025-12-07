/**
 * Validation-status
 * 
 * Status of the validation of the target against the primary source
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-validation-status
 */

export type ValidationStatusType = 'successful' | 'failed' | 'unknown';

export enum ValidationStatusEnum {
  /** Successful */
  Successful = 'successful',
  /** Failed */
  Failed = 'failed',
  /** Unknown */
  Unknown = 'unknown',
}

export const ValidationStatusValues = ['successful', 'failed', 'unknown'] as const;
