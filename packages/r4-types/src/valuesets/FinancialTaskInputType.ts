/**
 * Financial Task Input Type Codes
 * 
 * This value set includes Financial Task Input Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/financial-taskinputtype
 */

export type FinancialTaskInputTypeType = 'include' | 'exclude' | 'origresponse' | 'reference' | 'item' | 'period' | 'status';

export enum FinancialTaskInputTypeEnum {
  /** Include */
  Include = 'include',
  /** Exclude */
  Exclude = 'exclude',
  /** Original Response */
  Origresponse = 'origresponse',
  /** Reference Number */
  Reference = 'reference',
  /** Item Number */
  Item = 'item',
  /** Period */
  Period = 'period',
  /** Status code */
  Status = 'status',
}

export const FinancialTaskInputTypeValues = ['include', 'exclude', 'origresponse', 'reference', 'item', 'period', 'status'] as const;
