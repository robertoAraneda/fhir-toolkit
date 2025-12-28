import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CitationCitedArtifactAbstract Interface
 * 
 * Summary of the article or artifact
 * 
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifactabstract.html
 */
export interface ICitationCitedArtifactAbstract extends IBackboneElement {
  /**
   * The kind of abstract
   */
  type?: ICodeableConcept;

  /**
   * Used to express the specific language
   */
  language?: ICodeableConcept;

  /**
   * Abstract content
   */
  text: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Copyright notice for the abstract
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

}
