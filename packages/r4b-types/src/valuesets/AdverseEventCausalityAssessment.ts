/**
 * AdverseEventCausalityAssessment
 * 
 * Codes for the assessment of whether the entity caused the event.
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-causality-assess
 */

export type AdverseEventCausalityAssessmentType = 'Certain' | 'Probably-Likely' | 'Possible' | 'Unlikely' | 'Conditional-Classified' | 'Unassessable-Unclassifiable';

export enum AdverseEventCausalityAssessmentEnum {
  /** Certain */
  Certain = 'Certain',
  /** Probably/Likely */
  ProbablyLikely = 'Probably-Likely',
  /** Possible */
  Possible = 'Possible',
  /** Unlikely */
  Unlikely = 'Unlikely',
  /** Conditional/Classified */
  ConditionalClassified = 'Conditional-Classified',
  /** Unassessable/Unclassifiable */
  UnassessableUnclassifiable = 'Unassessable-Unclassifiable',
}

export const AdverseEventCausalityAssessmentValues = ['Certain', 'Probably-Likely', 'Possible', 'Unlikely', 'Conditional-Classified', 'Unassessable-Unclassifiable'] as const;
