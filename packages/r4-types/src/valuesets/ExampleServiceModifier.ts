/**
 * Example Service Modifier Codes
 * 
 * This value set includes sample Service Modifier codes.
 *
 * @see http://hl7.org/fhir/ValueSet/service-modifiers
 */

export type ExampleServiceModifierType = 'sr' | 'ah';

export enum ExampleServiceModifierEnum {
  /** Side of the Road */
  Sr = 'sr',
  /** After hours */
  Ah = 'ah',
}

export const ExampleServiceModifierValues = ['sr', 'ah'] as const;
