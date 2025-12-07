/**
 * AdjudicationError
 * 
 * This value set includes a smattering of adjudication codes.
 *
 * @see http://hl7.org/fhir/ValueSet/adjudication-error
 */

export type AdjudicationErrorType = 'a001' | 'a002';

export enum AdjudicationErrorEnum {
  /** Missing Identifier */
  A001 = 'a001',
  /** Missing Creation Date */
  A002 = 'a002',
}

export const AdjudicationErrorValues = ['a001', 'a002'] as const;
