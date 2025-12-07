/**
 * Immunization Recommendation Status Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-recommendation-status
 */

export type ImmunizationRecommendationStatusType = 'due' | 'overdue' | 'immune' | 'contraindicated' | 'complete';

export enum ImmunizationRecommendationStatusEnum {
  /** Due */
  Due = 'due',
  /** Overdue */
  Overdue = 'overdue',
  /** Immune */
  Immune = 'immune',
  /** Contraindicated */
  Contraindicated = 'contraindicated',
  /** Complete */
  Complete = 'complete',
}

export const ImmunizationRecommendationStatusValues = ['due', 'overdue', 'immune', 'contraindicated', 'complete'] as const;
