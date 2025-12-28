import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * CitationCitedArtifactClassificationWhoClassified Interface
 * 
 * Provenance and copyright of classification
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactclassificationwhoclassified.html
 */
export interface ICitationCitedArtifactClassificationWhoClassified extends IBackboneElement {
  /**
   * Person who created the classification
   */
  person?: IReference<'Person' | 'Practitioner'>;

  /**
   * Organization who created the classification
   */
  organization?: IReference<'Organization'>;

  /**
   * The publisher of the classification, not the publisher of the article or artifact being cited
   */
  publisher?: IReference<'Organization'>;

  /**
   * Rights management statement for the classification
   */
  classifierCopyright?: string;
  /**
   * Extension for classifierCopyright
   */
  _classifierCopyright?: IElement;

  /**
   * Acceptable to re-use the classification
   */
  freeToShare?: boolean;
  /**
   * Extension for freeToShare
   */
  _freeToShare?: IElement;

}
