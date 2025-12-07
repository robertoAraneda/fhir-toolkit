/**
 * strand Type
 * 
 * Type for strand.
 *
 * @see http://hl7.org/fhir/ValueSet/strand-type
 */

export type StrandTypeType = 'watson' | 'crick';

export enum StrandTypeEnum {
  /** Watson strand of starting sequence */
  Watson = 'watson',
  /** Crick strand of starting sequence */
  Crick = 'crick',
}

export const StrandTypeValues = ['watson', 'crick'] as const;
