/**
 * Verification Result status
 * 
 * The validation status of the target
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-status
 */

export type VerificationResultStatusType = 'attested' | 'validated' | 'in-process' | 'req-revalid' | 'val-fail' | 'reval-fail' | 'entered-in-error';

export enum VerificationResultStatusEnum {
  /** Attested */
  Attested = 'attested',
  /** Validated */
  Validated = 'validated',
  /** In process */
  InProcess = 'in-process',
  /** Requires revalidation */
  ReqRevalid = 'req-revalid',
  /** Validation failed */
  ValFail = 'val-fail',
  /** Re-Validation failed */
  RevalFail = 'reval-fail',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const VerificationResultStatusValues = ['attested', 'validated', 'in-process', 'req-revalid', 'val-fail', 'reval-fail', 'entered-in-error'] as const;
