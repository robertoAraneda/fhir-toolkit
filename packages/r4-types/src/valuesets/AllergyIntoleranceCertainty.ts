/**
 * AllergyIntoleranceCertainty
 * 
 * Statement about the degree of clinical certainty that a specific substance was the cause of the manifestation in a reaction event.
 *
 * @see http://hl7.org/fhir/ValueSet/reaction-event-certainty
 */

export type AllergyIntoleranceCertaintyType = 'unlikely' | 'likely' | 'confirmed' | 'unknown';

export enum AllergyIntoleranceCertaintyEnum {
  /** Unlikely */
  Unlikely = 'unlikely',
  /** Likely */
  Likely = 'likely',
  /** Confirmed */
  Confirmed = 'confirmed',
  /** Unknown */
  Unknown = 'unknown',
}

export const AllergyIntoleranceCertaintyValues = ['unlikely', 'likely', 'confirmed', 'unknown'] as const;
