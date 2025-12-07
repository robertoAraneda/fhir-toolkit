/**
 * AllergyIntoleranceSubstanceExposureRisk
 * 
 * The risk of an adverse reaction (allergy or intolerance) for this patient upon exposure to the substance (including pharmaceutical products).
 *
 * @see http://hl7.org/fhir/ValueSet/allerg-intol-substance-exp-risk
 */

export type AllergyIntoleranceSubstanceExposureRiskType = 'known-reaction-risk' | 'no-known-reaction-risk';

export enum AllergyIntoleranceSubstanceExposureRiskEnum {
  /** Known Reaction Risk */
  KnownReactionRisk = 'known-reaction-risk',
  /** No Known Reaction Risk */
  NoKnownReactionRisk = 'no-known-reaction-risk',
}

export const AllergyIntoleranceSubstanceExposureRiskValues = ['known-reaction-risk', 'no-known-reaction-risk'] as const;
