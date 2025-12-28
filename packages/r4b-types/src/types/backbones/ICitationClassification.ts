import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * CitationClassification Interface
 * 
 * The assignment to an organizing scheme
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationclassification.html
 */
export interface ICitationClassification extends IBackboneElement {
  /**
   * The kind of classifier (e.g. publication type, keyword)
   */
  type?: ICodeableConcept;

  /**
   * The specific classification value
   */
  classifier?: ICodeableConcept[];

}
