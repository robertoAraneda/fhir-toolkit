/**
 * SubstanceAmountType
 * 
 * The relationship between two substance types.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-amount-type
 */

export type SubstanceAmountTypeType = 'Average' | 'Approximately' | 'LessThan' | 'MoreThan';

export enum SubstanceAmountTypeEnum {
  /** Average */
  Average = 'Average',
  /** Approximately */
  Approximately = 'Approximately',
  /** Less Than */
  Lessthan = 'LessThan',
  /** More Than */
  Morethan = 'MoreThan',
}

export const SubstanceAmountTypeValues = ['Average', 'Approximately', 'LessThan', 'MoreThan'] as const;
