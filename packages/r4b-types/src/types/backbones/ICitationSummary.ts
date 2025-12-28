import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CitationSummary Interface
 * 
 * A human-readable display of the citation
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationsummary.html
 */
export interface ICitationSummary extends IBackboneElement {
  /**
   * Format for display of the citation
   */
  style?: ICodeableConcept;

  /**
   * The human-readable display of the citation
   */
  text: string;
  /**
   * Extension for text
   */
  _text?: IElement;

}
