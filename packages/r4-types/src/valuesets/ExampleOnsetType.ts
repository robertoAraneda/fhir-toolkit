/**
 * Example Onset Type (Reason) Codes
 * 
 * This value set includes sample Service Modifier codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-onsettype
 */

export type ExampleOnsetTypeType = 'lxm' | 'sym' | 'lmn';

export enum ExampleOnsetTypeEnum {
  /** Last Exam */
  Lxm = 'lxm',
  /** Start of Symptoms */
  Sym = 'sym',
  /** Last Menstruation */
  Lmn = 'lmn',
}

export const ExampleOnsetTypeValues = ['lxm', 'sym', 'lmn'] as const;
