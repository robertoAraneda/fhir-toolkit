/**
 * AllergyIntoleranceSeverity
 * 
 * Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.
 *
 * @see http://hl7.org/fhir/ValueSet/reaction-event-severity
 */

export type AllergyIntoleranceSeverityType = 'mild' | 'moderate' | 'severe';

export enum AllergyIntoleranceSeverityEnum {
  /** Mild */
  Mild = 'mild',
  /** Moderate */
  Moderate = 'moderate',
  /** Severe */
  Severe = 'severe',
}

export const AllergyIntoleranceSeverityValues = ['mild', 'moderate', 'severe'] as const;
