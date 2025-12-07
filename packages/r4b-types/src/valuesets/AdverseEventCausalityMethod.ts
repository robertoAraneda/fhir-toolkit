/**
 * AdverseEventCausalityMethod
 * 
 * TODO.
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-causality-method
 */

export type AdverseEventCausalityMethodType = 'ProbabilityScale' | 'Bayesian' | 'Checklist';

export enum AdverseEventCausalityMethodEnum {
  /** Probability Scale */
  Probabilityscale = 'ProbabilityScale',
  /** Bayesian */
  Bayesian = 'Bayesian',
  /** Checklist */
  Checklist = 'Checklist',
}

export const AdverseEventCausalityMethodValues = ['ProbabilityScale', 'Bayesian', 'Checklist'] as const;
