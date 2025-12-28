import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CitationCitedArtifactWebLocation Interface
 * 
 * Used for any URL for the article or artifact cited
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactweblocation.html
 */
export interface ICitationCitedArtifactWebLocation extends IBackboneElement {
  /**
   * Code the reason for different URLs, e.g. abstract and full-text
   */
  type?: ICodeableConcept;

  /**
   * The specific URL
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

}
