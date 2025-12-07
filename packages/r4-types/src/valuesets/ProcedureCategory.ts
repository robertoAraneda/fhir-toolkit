/**
 * Procedure Category Codes (SNOMED CT)
 * 
 * Procedure Category code: A selection of relevant SNOMED CT codes.
 *
 * @see http://hl7.org/fhir/ValueSet/procedure-category
 */

export type ProcedureCategoryType = '24642003' | '409063005' | '409073007' | '387713003' | '103693007' | '46947000' | '410606002';

export enum ProcedureCategoryEnum {
  _24642003 = '24642003',
  _409063005 = '409063005',
  _409073007 = '409073007',
  _387713003 = '387713003',
  _103693007 = '103693007',
  _46947000 = '46947000',
  _410606002 = '410606002',
}

export const ProcedureCategoryValues = ['24642003', '409063005', '409073007', '387713003', '103693007', '46947000', '410606002'] as const;
