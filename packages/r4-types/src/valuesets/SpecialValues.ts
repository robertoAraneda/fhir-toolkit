/**
 * SpecialValues
 * 
 * A set of generally useful codes defined so they can be included in value sets.
 *
 * @see http://hl7.org/fhir/ValueSet/special-values
 */

export type SpecialValuesType = 'true' | 'false' | 'trace' | 'sufficient' | 'withdrawn' | 'nil-known';

export enum SpecialValuesEnum {
  /** true */
  True = 'true',
  /** false */
  False = 'false',
  /** Trace Amount Detected */
  Trace = 'trace',
  /** Sufficient Quantity */
  Sufficient = 'sufficient',
  /** Value Withdrawn */
  Withdrawn = 'withdrawn',
  /** Nil Known */
  NilKnown = 'nil-known',
}

export const SpecialValuesValues = ['true', 'false', 'trace', 'sufficient', 'withdrawn', 'nil-known'] as const;
