/**
 * MaxOccurs
 * 
 * Flags an element as having unlimited repetitions.
 *
 * @see http://hl7.org/fhir/ValueSet/question-max-occurs
 */

export type MaxOccursType = '*';

export enum MaxOccursEnum {
  /** Repeating */
  _Empty = '*',
}

export const MaxOccursValues = ['*'] as const;
