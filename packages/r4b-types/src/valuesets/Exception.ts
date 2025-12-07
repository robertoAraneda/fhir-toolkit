/**
 * Exception Codes
 * 
 * This value set includes sample Exception codes.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-exception
 */

export type ExceptionType = 'student' | 'disabled';

export enum ExceptionEnum {
  /** Student (Fulltime) */
  Student = 'student',
  /** Disabled */
  Disabled = 'disabled',
}

export const ExceptionValues = ['student', 'disabled'] as const;
