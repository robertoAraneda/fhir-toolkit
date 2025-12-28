import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ConditionEvidence Interface
 * 
 * Supporting evidence
 * 
 *
 * @see https://hl7.org/fhir/R4B/conditionevidence.html
 */
export interface IConditionEvidence extends IBackboneElement {
  /**
   * Manifestation/symptom
   */
  code?: ICodeableConcept[];

  /**
   * Supporting information found elsewhere
   */
  detail?: IReference<'Resource'>[];

}
