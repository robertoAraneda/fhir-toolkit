/**
 * Example Service/Product Codes
 * 
 * This value set includes a smattering of Service/Product codes.
 *
 * @see http://hl7.org/fhir/ValueSet/service-product
 */

export type ExampleServiceProductType = 'exam' | 'flushot';

export enum ExampleServiceProductEnum {
  /** Exam */
  Exam = 'exam',
  /** Flu shot */
  Flushot = 'flushot',
}

export const ExampleServiceProductValues = ['exam', 'flushot'] as const;
