import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CitationSummary Interface
 * 
 * A human-readable display of key concepts to represent the citation
 * 
 *
 * @see https://hl7.org/fhir/R5/citationsummary.html
 */
export interface ICitationSummary extends IBackboneElement {
  /**
   * Format for display of the citation summary
   */
  style?: ICodeableConcept;

  /**
   * The human-readable display of the citation summary
   */
  text: string;
  /**
   * Extension for text
   */
  _text?: IElement;

}
