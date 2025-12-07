/**
 * sequence Type
 * 
 * Type if a sequence -- DNA, RNA, or amino acid sequence.
 *
 * @see http://hl7.org/fhir/ValueSet/sequence-type
 */

export type SequenceTypeType = 'aa' | 'dna' | 'rna';

export enum SequenceTypeEnum {
  /** AA Sequence */
  Aa = 'aa',
  /** DNA Sequence */
  Dna = 'dna',
  /** RNA Sequence */
  Rna = 'rna',
}

export const SequenceTypeValues = ['aa', 'dna', 'rna'] as const;
