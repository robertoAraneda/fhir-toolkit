/**
 * Example Provider Qualification Codes
 * 
 * This value set includes sample Provider Qualification codes.
 *
 * @see http://hl7.org/fhir/ValueSet/provider-qualification
 */

export type ExampleProviderQualificationType = '311405' | '604215' | '604210';

export enum ExampleProviderQualificationEnum {
  /** Dentist */
  _311405 = '311405',
  /** Ophthalmologist */
  _604215 = '604215',
  /** Optometrist */
  _604210 = '604210',
}

export const ExampleProviderQualificationValues = ['311405', '604215', '604210'] as const;
