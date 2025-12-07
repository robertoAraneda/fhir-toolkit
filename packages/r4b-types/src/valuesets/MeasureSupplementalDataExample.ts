/**
 * MeasureSupplementalDataExample
 * 
 * Supplemental data in a population for measuring purposes.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-supplemental-data-example
 */

export type MeasureSupplementalDataExampleType = 'age' | 'gender' | 'ethnicity' | 'payer';

export enum MeasureSupplementalDataExampleEnum {
  /** Age */
  Age = 'age',
  /** Gender */
  Gender = 'gender',
  /** Ethnicity */
  Ethnicity = 'ethnicity',
  /** Payer */
  Payer = 'payer',
}

export const MeasureSupplementalDataExampleValues = ['age', 'gender', 'ethnicity', 'payer'] as const;
