/**
 * Conditional Read Status
 * 
 * A code that indicates how the server supports conditional read.
 *
 * @see http://hl7.org/fhir/ValueSet/conditional-read-status
 */

export type ConditionalReadStatusType = 'not-supported' | 'modified-since' | 'not-match' | 'full-support';

export enum ConditionalReadStatusEnum {
  /** Not Supported */
  NotSupported = 'not-supported',
  /** If-Modified-Since */
  ModifiedSince = 'modified-since',
  /** If-None-Match */
  NotMatch = 'not-match',
  /** Full Support */
  FullSupport = 'full-support',
}

export const ConditionalReadStatusValues = ['not-supported', 'modified-since', 'not-match', 'full-support'] as const;
