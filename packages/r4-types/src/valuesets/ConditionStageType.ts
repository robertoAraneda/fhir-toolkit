/**
 * Condition Stage Type
 * 
 * Example value set for the type of stages of cancer and other conditions
 *
 * @see http://hl7.org/fhir/ValueSet/condition-stage-type
 */

export type ConditionStageTypeType = '261023001' | '260998006';

export enum ConditionStageTypeEnum {
  /** Pathological staging (qualifier value) */
  _261023001 = '261023001',
  /** Clinical staging (qualifier value) */
  _260998006 = '260998006',
}

export const ConditionStageTypeValues = ['261023001', '260998006'] as const;
