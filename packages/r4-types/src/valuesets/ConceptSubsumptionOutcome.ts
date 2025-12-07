/**
 * ConceptSubsumptionOutcome
 * 
 * The subsumption relationship between code/Coding "A" and code/Coding "B". There are 4 possible codes to be returned: equivalent, subsumes, subsumed-by, and not-subsumed. If the server is unable to determine the relationship between the codes/Codings, then it returns an error (i.e. an OperationOutcome).
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
