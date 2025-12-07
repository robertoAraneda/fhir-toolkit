/**
 * strandType
 * 
 * Type for strand.
 *
 * @see http://hl7.org/fhir/ValueSet/strand-type
 */

export type StrandTypeType = 'watson' | 'crick';

export enum StrandTypeEnum {
  /** Watson strand of referenceSeq */
  Watson = 'watson',
  /** Crick strand of referenceSeq */
  Crick = 'crick',
}

export const StrandTypeValues = ['watson', 'crick'] as const;
