import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication } from './ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication.js';

/**
 * CitationCitedArtifactPublicationFormPeriodicRelease Interface
 * 
 * The specific issue in which the cited article resides
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactpublicationformperiodicrelease.html
 */
export interface ICitationCitedArtifactPublicationFormPeriodicRelease extends IBackboneElement {
  /**
   * Internet or Print
   */
  citedMedium?: ICodeableConcept;

  /**
   * Volume number of journal in which the article is published
   */
  volume?: string;
  /**
   * Extension for volume
   */
  _volume?: IElement;

  /**
   * Issue, part or supplement of journal in which the article is published
   */
  issue?: string;
  /**
   * Extension for issue
   */
  _issue?: IElement;

  /**
   * Defining the date on which the issue of the journal was published
   */
  dateOfPublication?: ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication;

}
