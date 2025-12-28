import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * DetectedIssueEvidence Interface
 * 
 * Supporting evidence
 * 
 *
 * @see https://hl7.org/fhir/R5/detectedissueevidence.html
 */
export interface IDetectedIssueEvidence extends IBackboneElement {
  /**
   * Manifestation
   */
  code?: ICodeableConcept[];

  /**
   * Supporting information
   */
  detail?: IReference<'Resource'>[];

}
