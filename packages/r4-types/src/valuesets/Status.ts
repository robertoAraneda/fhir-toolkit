/**
 * Status
 * 
 * The validation status of the target
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-status
 */

export type StatusType = 'attested' | 'validated' | 'in-process' | 'req-revalid' | 'val-fail' | 'reval-fail';

export enum StatusEnum {
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
}

export const StatusValues = ['attested', 'validated', 'in-process', 'req-revalid', 'val-fail', 'reval-fail'] as const;
