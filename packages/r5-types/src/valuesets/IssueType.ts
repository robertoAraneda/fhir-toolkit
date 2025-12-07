/**
 * Issue Type
 * 
 * A code that describes the type of issue.
 *
 * @see http://hl7.org/fhir/ValueSet/issue-type
 */

export type IssueTypeType = 'invalid' | 'structure' | 'required' | 'value' | 'invariant' | 'security' | 'login' | 'unknown' | 'expired' | 'forbidden' | 'suppressed' | 'processing' | 'not-supported' | 'duplicate' | 'multiple-matches' | 'not-found' | 'deleted' | 'too-long' | 'code-invalid' | 'extension' | 'too-costly' | 'business-rule' | 'conflict' | 'limited-filter' | 'transient' | 'lock-error' | 'no-store' | 'exception' | 'timeout' | 'incomplete' | 'throttled' | 'informational' | 'success';

export enum IssueTypeEnum {
  /** Invalid Content */
  Invalid = 'invalid',
  /** Structural Issue */
  Structure = 'structure',
  /** Required element missing */
  Required = 'required',
  /** Element value invalid */
  Value = 'value',
  /** Validation rule failed */
  Invariant = 'invariant',
  /** Security Problem */
  Security = 'security',
  /** Login Required */
  Login = 'login',
  /** Unknown User */
  Unknown = 'unknown',
  /** Session Expired */
  Expired = 'expired',
  /** Forbidden */
  Forbidden = 'forbidden',
  /** Information  Suppressed */
  Suppressed = 'suppressed',
  /** Processing Failure */
  Processing = 'processing',
  /** Content not supported */
  NotSupported = 'not-supported',
  /** Duplicate */
  Duplicate = 'duplicate',
  /** Multiple Matches */
  MultipleMatches = 'multiple-matches',
  /** Not Found */
  NotFound = 'not-found',
  /** Deleted */
  Deleted = 'deleted',
  /** Content Too Long */
  TooLong = 'too-long',
  /** Invalid Code */
  CodeInvalid = 'code-invalid',
  /** Unacceptable Extension */
  Extension = 'extension',
  /** Operation Too Costly */
  TooCostly = 'too-costly',
  /** Business Rule Violation */
  BusinessRule = 'business-rule',
  /** Edit Version Conflict */
  Conflict = 'conflict',
  /** Limited Filter Application */
  LimitedFilter = 'limited-filter',
  /** Transient Issue */
  Transient = 'transient',
  /** Lock Error */
  LockError = 'lock-error',
  /** No Store Available */
  NoStore = 'no-store',
  /** Exception */
  Exception = 'exception',
  /** Timeout */
  Timeout = 'timeout',
  /** Incomplete Results */
  Incomplete = 'incomplete',
  /** Throttled */
  Throttled = 'throttled',
  /** Informational Note */
  Informational = 'informational',
  /** Operation Successful */
  Success = 'success',
}

export const IssueTypeValues = ['invalid', 'structure', 'required', 'value', 'invariant', 'security', 'login', 'unknown', 'expired', 'forbidden', 'suppressed', 'processing', 'not-supported', 'duplicate', 'multiple-matches', 'not-found', 'deleted', 'too-long', 'code-invalid', 'extension', 'too-costly', 'business-rule', 'conflict', 'limited-filter', 'transient', 'lock-error', 'no-store', 'exception', 'timeout', 'incomplete', 'throttled', 'informational', 'success'] as const;
