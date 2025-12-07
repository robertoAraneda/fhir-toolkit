/**
 * DefinitionResourceType
 * 
 * A list of all the definition resource types defined in this version of the FHIR specification.
 *
 * @see http://hl7.org/fhir/ValueSet/definition-resource-types
 */

export type DefinitionResourceTypeType = 'ActivityDefinition' | 'EventDefinition' | 'Measure' | 'OperationDefinition' | 'PlanDefinition' | 'Questionnaire';

export enum DefinitionResourceTypeEnum {
  /** ActivityDefinition */
  Activitydefinition = 'ActivityDefinition',
  /** EventDefinition */
  Eventdefinition = 'EventDefinition',
  /** Measure */
  Measure = 'Measure',
  /** OperationDefinition */
  Operationdefinition = 'OperationDefinition',
  /** PlanDefinition */
  Plandefinition = 'PlanDefinition',
  /** Questionnaire */
  Questionnaire = 'Questionnaire',
}

export const DefinitionResourceTypeValues = ['ActivityDefinition', 'EventDefinition', 'Measure', 'OperationDefinition', 'PlanDefinition', 'Questionnaire'] as const;
