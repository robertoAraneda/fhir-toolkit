/**
 * Example Diagnosis Type Codes
 * 
 * This value set includes example Diagnosis Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-diagnosistype
 */

export type ExampleDiagnosisTypeType = 'admitting' | 'clinical' | 'differential' | 'discharge' | 'laboratory' | 'nursing' | 'prenatal' | 'principal' | 'radiology' | 'remote' | 'retrospective' | 'self';

export enum ExampleDiagnosisTypeEnum {
  /** Admitting Diagnosis */
  Admitting = 'admitting',
  /** Clinical Diagnosis */
  Clinical = 'clinical',
  /** Differential Diagnosis */
  Differential = 'differential',
  /** Discharge Diagnosis */
  Discharge = 'discharge',
  /** Laboratory Diagnosis */
  Laboratory = 'laboratory',
  /** Nursing Diagnosis */
  Nursing = 'nursing',
  /** Prenatal Diagnosis */
  Prenatal = 'prenatal',
  /** Principal Diagnosis */
  Principal = 'principal',
  /** Radiology Diagnosis */
  Radiology = 'radiology',
  /** Remote Diagnosis */
  Remote = 'remote',
  /** Retrospective Diagnosis */
  Retrospective = 'retrospective',
  /** Self Diagnosis */
  Self = 'self',
}

export const ExampleDiagnosisTypeValues = ['admitting', 'clinical', 'differential', 'discharge', 'laboratory', 'nursing', 'prenatal', 'principal', 'radiology', 'remote', 'retrospective', 'self'] as const;
