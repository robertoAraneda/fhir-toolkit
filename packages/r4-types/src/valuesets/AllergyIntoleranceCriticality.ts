/**
 * AllergyIntoleranceCriticality
 * 
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 *
 * @see http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality
 */

export type AllergyIntoleranceCriticalityType = 'low' | 'high' | 'unable-to-assess';

export enum AllergyIntoleranceCriticalityEnum {
  /** Low Risk */
  Low = 'low',
  /** High Risk */
  High = 'high',
  /** Unable to Assess Risk */
  UnableToAssess = 'unable-to-assess',
}

export const AllergyIntoleranceCriticalityValues = ['low', 'high', 'unable-to-assess'] as const;
