/**
 * Response Type
 * 
 * The kind of response to a message.
 *
 * @see http://hl7.org/fhir/ValueSet/response-code
 */

export type ResponseTypeType = 'ok' | 'transient-error' | 'fatal-error';

export enum ResponseTypeEnum {
  /** OK */
  Ok = 'ok',
  /** Transient Error */
  TransientError = 'transient-error',
  /** Fatal Error */
  FatalError = 'fatal-error',
}

export const ResponseTypeValues = ['ok', 'transient-error', 'fatal-error'] as const;
