/**
 * Observation Category Codes
 * 
 * Codes to denote a guideline or policy statement.when a genetic test result is being shared as a secondary finding.
 *
 * @see http://hl7.org/fhir/ValueSet/secondary-finding
 */

export type ObservationCategoryType = 'acmg-version1' | 'acmg-version2';

export enum ObservationCategoryEnum {
  /** ACMG Version 1 */
  AcmgVersion1 = 'acmg-version1',
  /** ACMG Version 2 */
  AcmgVersion2 = 'acmg-version2',
}

export const ObservationCategoryValues = ['acmg-version1', 'acmg-version2'] as const;
