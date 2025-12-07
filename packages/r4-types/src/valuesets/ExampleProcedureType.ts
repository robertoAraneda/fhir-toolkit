/**
 * Example Procedure Type Codes
 * 
 * This value set includes example Procedure Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-procedure-type
 */

export type ExampleProcedureTypeType = 'primary' | 'secondary';

export enum ExampleProcedureTypeEnum {
  /** Primary procedure */
  Primary = 'primary',
  /** Secondary procedure */
  Secondary = 'secondary',
}

export const ExampleProcedureTypeValues = ['primary', 'secondary'] as const;
