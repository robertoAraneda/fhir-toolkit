/**
 * Concept Subsumption Outcome value set
 * 
 * Codes indicating the results of a subsumption check between codes
 *
 * @see http://hl7.org/fhir/ValueSet/concept-subsumption-outcome
 */

export type ConceptSubsumptionOutcomeType = 'equivalent' | 'subsumes' | 'subsumed-by' | 'not-subsumed';

export enum ConceptSubsumptionOutcomeEnum {
  /** Equivalent */
  Equivalent = 'equivalent',
  /** Subsumes */
  Subsumes = 'subsumes',
  /** Subsumed-By */
  SubsumedBy = 'subsumed-by',
  /** Not-Subsumed */
  NotSubsumed = 'not-subsumed',
}

export const ConceptSubsumptionOutcomeValues = ['equivalent', 'subsumes', 'subsumed-by', 'not-subsumed'] as const;
