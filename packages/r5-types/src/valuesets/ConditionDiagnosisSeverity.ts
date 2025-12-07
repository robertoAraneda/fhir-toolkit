/**
 * Condition/Diagnosis Severity
 * 
 * Preferred value set for Condition/Diagnosis severity grading.
 *
 * @see http://hl7.org/fhir/ValueSet/condition-severity
 */

export type ConditionDiagnosisSeverityType = '24484000' | '6736007' | '255604002';

export enum ConditionDiagnosisSeverityEnum {
  _24484000 = '24484000',
  _6736007 = '6736007',
  _255604002 = '255604002',
}

export const ConditionDiagnosisSeverityValues = ['24484000', '6736007', '255604002'] as const;
