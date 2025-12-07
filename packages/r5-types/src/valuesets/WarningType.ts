/**
 * Warning Type
 * 
 * Classification of warning type.
 *
 * @see http://hl7.org/fhir/ValueSet/warning-type
 */

export type WarningTypeType = 'P313' | 'P314' | 'P315' | 'P320' | 'P321' | 'P322' | 'P330' | 'P331' | 'P361' | 'P363';

export enum WarningTypeEnum {
  /** Get medical advice/attention. */
  P313 = 'P313',
  /** Get medical advice/attention if you feel unwell. */
  P314 = 'P314',
  /** Get immediate medical advice/attention. */
  P315 = 'P315',
  /** Specific treatment is urgent (see ... on this label). */
  P320 = 'P320',
  /** Specific treatment (see ... on this label). */
  P321 = 'P321',
  /** Specific measures (see ... on this label). */
  P322 = 'P322',
  /** Rinse mouth. */
  P330 = 'P330',
  /** Do NOT induce vomiting. */
  P331 = 'P331',
  /** Remove/Take off immediately all contaminated clothing. */
  P361 = 'P361',
  /** Wash contaminated clothing before reuse.. */
  P363 = 'P363',
}

export const WarningTypeValues = ['P313', 'P314', 'P315', 'P320', 'P321', 'P322', 'P330', 'P331', 'P361', 'P363'] as const;
