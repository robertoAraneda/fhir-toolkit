/**
 * Procedure Outcome Codes (SNOMED CT)
 * 
 * Procedure Outcome code: A selection of relevant SNOMED CT codes.
 *
 * @see http://hl7.org/fhir/ValueSet/procedure-outcome
 */

export type ProcedureOutcomeCodesSNOMEDCTType = '385669000' | '385671000' | '385670004';

export enum ProcedureOutcomeCodesSNOMEDCTEnum {
  _385669000 = '385669000',
  _385671000 = '385671000',
  _385670004 = '385670004',
}

export const ProcedureOutcomeCodesSNOMEDCTValues = ['385669000', '385671000', '385670004'] as const;
