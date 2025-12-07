/**
 * DataAbsentReason
 * 
 * Used to specify why the normally expected content of the data element is missing.
 *
 * @see http://hl7.org/fhir/ValueSet/data-absent-reason
 */

export type DataAbsentReasonType = 'unknown' | 'asked-unknown' | 'temp-unknown' | 'not-asked' | 'asked-declined' | 'masked' | 'not-applicable' | 'unsupported' | 'as-text' | 'error' | 'not-a-number' | 'negative-infinity' | 'positive-infinity' | 'not-performed' | 'not-permitted';

export enum DataAbsentReasonEnum {
  /** Unknown */
  Unknown = 'unknown',
  /** Asked But Unknown */
  AskedUnknown = 'asked-unknown',
  /** Temporarily Unknown */
  TempUnknown = 'temp-unknown',
  /** Not Asked */
  NotAsked = 'not-asked',
  /** Asked But Declined */
  AskedDeclined = 'asked-declined',
  /** Masked */
  Masked = 'masked',
  /** Not Applicable */
  NotApplicable = 'not-applicable',
  /** Unsupported */
  Unsupported = 'unsupported',
  /** As Text */
  AsText = 'as-text',
  /** Error */
  Error = 'error',
  /** Not a Number (NaN) */
  NotANumber = 'not-a-number',
  /** Negative Infinity (NINF) */
  NegativeInfinity = 'negative-infinity',
  /** Positive Infinity (PINF) */
  PositiveInfinity = 'positive-infinity',
  /** Not Performed */
  NotPerformed = 'not-performed',
  /** Not Permitted */
  NotPermitted = 'not-permitted',
}

export const DataAbsentReasonValues = ['unknown', 'asked-unknown', 'temp-unknown', 'not-asked', 'asked-declined', 'masked', 'not-applicable', 'unsupported', 'as-text', 'error', 'not-a-number', 'negative-infinity', 'positive-infinity', 'not-performed', 'not-permitted'] as const;
