/**
 * Definition Resource Types
 * 
 * All Resource Types that represent definition resources
 *
 * @see http://hl7.org/fhir/ValueSet/definition-resource-types
 */

export type DefinitionResourceTypesType = 'ActivityDefinition' | 'ChargeItemDefinition' | 'ClinicalUseDefinition' | 'EventDefinition' | 'Measure' | 'MessageDefinition' | 'ObservationDefinition' | 'OperationDefinition' | 'PlanDefinition' | 'Questionnaire' | 'Requirements' | 'SubscriptionTopic' | 'TestPlan' | 'TestScript';

export enum DefinitionResourceTypesEnum {
  Activitydefinition = 'ActivityDefinition',
  Chargeitemdefinition = 'ChargeItemDefinition',
  Clinicalusedefinition = 'ClinicalUseDefinition',
  Eventdefinition = 'EventDefinition',
  Measure = 'Measure',
  Messagedefinition = 'MessageDefinition',
  Observationdefinition = 'ObservationDefinition',
  Operationdefinition = 'OperationDefinition',
  Plandefinition = 'PlanDefinition',
  Questionnaire = 'Questionnaire',
  Requirements = 'Requirements',
  Subscriptiontopic = 'SubscriptionTopic',
  Testplan = 'TestPlan',
  Testscript = 'TestScript',
}

export const DefinitionResourceTypesValues = ['ActivityDefinition', 'ChargeItemDefinition', 'ClinicalUseDefinition', 'EventDefinition', 'Measure', 'MessageDefinition', 'ObservationDefinition', 'OperationDefinition', 'PlanDefinition', 'Questionnaire', 'Requirements', 'SubscriptionTopic', 'TestPlan', 'TestScript'] as const;
