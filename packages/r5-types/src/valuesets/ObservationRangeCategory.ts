/**
 * Observation Range Category
 * 
 * Codes identifying the category of observation range.
 *
 * @see http://hl7.org/fhir/ValueSet/observation-range-category
 */

export type ObservationRangeCategoryType = 'reference' | 'critical' | 'absolute';

export enum ObservationRangeCategoryEnum {
  /** reference range */
  Reference = 'reference',
  /** critical range */
  Critical = 'critical',
  /** absolute range */
  Absolute = 'absolute',
}

export const ObservationRangeCategoryValues = ['reference', 'critical', 'absolute'] as const;
