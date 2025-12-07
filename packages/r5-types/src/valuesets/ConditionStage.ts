/**
 * Condition Stage
 * 
 * Value set for stages of cancer and other conditions.
 *
 * @see http://hl7.org/fhir/ValueSet/condition-stage
 */

export type ConditionStageType = '416780008' | '715345007';

export enum ConditionStageEnum {
  _416780008 = '416780008',
  _715345007 = '715345007',
}

export const ConditionStageValues = ['416780008', '715345007'] as const;
