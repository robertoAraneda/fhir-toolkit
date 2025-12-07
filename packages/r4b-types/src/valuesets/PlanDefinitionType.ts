/**
 * PlanDefinitionType
 * 
 * The type of PlanDefinition.
 *
 * @see http://hl7.org/fhir/ValueSet/plan-definition-type
 */

export type PlanDefinitionTypeType = 'order-set' | 'clinical-protocol' | 'eca-rule' | 'workflow-definition';

export enum PlanDefinitionTypeEnum {
  /** Order Set */
  OrderSet = 'order-set',
  /** Clinical Protocol */
  ClinicalProtocol = 'clinical-protocol',
  /** ECA Rule */
  EcaRule = 'eca-rule',
  /** Workflow Definition */
  WorkflowDefinition = 'workflow-definition',
}

export const PlanDefinitionTypeValues = ['order-set', 'clinical-protocol', 'eca-rule', 'workflow-definition'] as const;
