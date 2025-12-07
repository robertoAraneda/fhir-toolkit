/**
 * Measure Group Example
 * 
 * Example Measure Groups for the Measure Resource.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-group-example
 */

export type MeasureGroupExampleType = 'primary-rate' | 'secondary-rate';

export enum MeasureGroupExampleEnum {
  /** Primary Rate */
  PrimaryRate = 'primary-rate',
  /** Secondary Rate */
  SecondaryRate = 'secondary-rate',
}

export const MeasureGroupExampleValues = ['primary-rate', 'secondary-rate'] as const;
