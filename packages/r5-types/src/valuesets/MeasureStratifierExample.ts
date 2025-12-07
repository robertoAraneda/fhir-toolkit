/**
 * Measure Stratifier Example
 * 
 * Identifier subgroups in a population for measuring purposes.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-stratifier-example
 */

export type MeasureStratifierExampleType = 'age' | 'gender' | 'region';

export enum MeasureStratifierExampleEnum {
  /** Age */
  Age = 'age',
  /** Gender */
  Gender = 'gender',
  /** Region */
  Region = 'region',
}

export const MeasureStratifierExampleValues = ['age', 'gender', 'region'] as const;
