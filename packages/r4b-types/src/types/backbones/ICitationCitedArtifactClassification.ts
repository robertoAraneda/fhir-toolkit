import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICitationCitedArtifactClassificationWhoClassified } from './ICitationCitedArtifactClassificationWhoClassified.js';

/**
 * CitationCitedArtifactClassification Interface
 * 
 * The assignment to an organizing scheme
 * 
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactclassification.html
 */
export interface ICitationCitedArtifactClassification extends IBackboneElement {
  /**
   * The kind of classifier (e.g. publication type, keyword)
   */
  type?: ICodeableConcept;

  /**
   * The specific classification value
   */
  classifier?: ICodeableConcept[];

  /**
   * Provenance and copyright of classification
   */
  whoClassified?: ICitationCitedArtifactClassificationWhoClassified;

}
