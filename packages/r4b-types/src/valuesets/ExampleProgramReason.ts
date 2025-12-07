/**
 * Example Program Reason Codes
 * 
 * This value set includes sample Program Reason Span codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-program-code
 */

export type ExampleProgramReasonType = 'as' | 'hd' | 'auscr' | 'none';

export enum ExampleProgramReasonEnum {
  /** Child Asthma */
  As = 'as',
  /** Hemodialysis */
  Hd = 'hd',
  /** Autism Screening */
  Auscr = 'auscr',
  /** None */
  None = 'none',
}

export const ExampleProgramReasonValues = ['as', 'hd', 'auscr', 'none'] as const;
