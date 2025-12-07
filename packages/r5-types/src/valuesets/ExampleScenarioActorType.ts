/**
 * Example Scenario Actor Type
 * 
 * The type of actor - system or human.
 *
 * @see http://hl7.org/fhir/ValueSet/examplescenario-actor-type
 */

export type ExampleScenarioActorTypeType = 'person' | 'system';

export enum ExampleScenarioActorTypeEnum {
  /** Person */
  Person = 'person',
  /** System */
  System = 'system',
}

export const ExampleScenarioActorTypeValues = ['person', 'system'] as const;
