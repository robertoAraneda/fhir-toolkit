/**
 * ICD-10 Procedure Codes
 * 
 * This value set includes sample ICD-10 Procedure codes.
 *
 * @see http://hl7.org/fhir/ValueSet/icd-10-procedures
 */

export type ICD10ProcedureType = '123001' | '123002' | '123003';

export enum ICD10ProcedureEnum {
  /** PROC-1 */
  _123001 = '123001',
  /** PROC-2 */
  _123002 = '123002',
  /** PROC-3 */
  _123003 = '123003',
}

export const ICD10ProcedureValues = ['123001', '123002', '123003'] as const;
