import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CitationCitedArtifactTitle Interface
 * 
 * The title details of the article or artifact
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifacttitle.html
 */
export interface ICitationCitedArtifactTitle extends IBackboneElement {
  /**
   * The kind of title
   */
  type?: ICodeableConcept[];

  /**
   * Used to express the specific language
   */
  language?: ICodeableConcept;

  /**
   * The title of the article or artifact
   */
  text: string;
  /**
   * Extension for text
   */
  _text?: IElement;

}
