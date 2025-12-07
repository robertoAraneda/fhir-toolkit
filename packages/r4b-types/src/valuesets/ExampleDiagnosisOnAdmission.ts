/**
 * Example Diagnosis on Admission Codes
 * 
 * This value set includes example Diagnosis on Admission codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-diagnosis-on-admission
 */

export type ExampleDiagnosisOnAdmissionType = 'y' | 'n' | 'u' | 'w';

export enum ExampleDiagnosisOnAdmissionEnum {
  /** Yes */
  Y = 'y',
  /** No */
  N = 'n',
  /** Unknown */
  U = 'u',
  /** Undetermined */
  W = 'w',
}

export const ExampleDiagnosisOnAdmissionValues = ['y', 'n', 'u', 'w'] as const;
