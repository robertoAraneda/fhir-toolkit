/**
 * ExampleScenarioActorType
 * 
 * The type of actor - system or human.
 *
 * @see http://hl7.org/fhir/ValueSet/examplescenario-actor-type
 */

export type ExampleScenarioActorTypeType = 'person' | 'entity';

export enum ExampleScenarioActorTypeEnum {
  /** Person */
  Person = 'person',
  /** System */
  Entity = 'entity',
}

export const ExampleScenarioActorTypeValues = ['person', 'entity'] as const;
