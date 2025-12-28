import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ICitationCitedArtifactPublicationFormPublishedIn } from './ICitationCitedArtifactPublicationFormPublishedIn.js';

/**
 * CitationCitedArtifactPublicationForm Interface
 * 
 * If multiple, used to represent alternative forms of the article that are not separate citations
 * 
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifactpublicationform.html
 */
export interface ICitationCitedArtifactPublicationForm extends IBackboneElement {
  /**
   * The collection the cited article or artifact is published in
   */
  publishedIn?: ICitationCitedArtifactPublicationFormPublishedIn;

  /**
   * Internet or Print
   */
  citedMedium?: ICodeableConcept;

  /**
   * Volume number of journal or other collection in which the article is published
   */
  volume?: string;
  /**
   * Extension for volume
   */
  _volume?: IElement;

  /**
   * Issue, part or supplement of journal or other collection in which the article is published
   */
  issue?: string;
  /**
   * Extension for issue
   */
  _issue?: IElement;

  /**
   * The date the article was added to the database, or the date the article was released
   */
  articleDate?: string;
  /**
   * Extension for articleDate
   */
  _articleDate?: IElement;

  /**
   * Text representation of the date on which the issue of the cited artifact was published
   */
  publicationDateText?: string;
  /**
   * Extension for publicationDateText
   */
  _publicationDateText?: IElement;

  /**
   * Season in which the cited artifact was published
   */
  publicationDateSeason?: string;
  /**
   * Extension for publicationDateSeason
   */
  _publicationDateSeason?: IElement;

  /**
   * The date the article was last revised or updated in the database
   */
  lastRevisionDate?: string;
  /**
   * Extension for lastRevisionDate
   */
  _lastRevisionDate?: IElement;

  /**
   * Language(s) in which this form of the article is published
   */
  language?: ICodeableConcept[];

  /**
   * Entry number or identifier for inclusion in a database
   */
  accessionNumber?: string;
  /**
   * Extension for accessionNumber
   */
  _accessionNumber?: IElement;

  /**
   * Used for full display of pagination
   */
  pageString?: string;
  /**
   * Extension for pageString
   */
  _pageString?: IElement;

  /**
   * Used for isolated representation of first page
   */
  firstPage?: string;
  /**
   * Extension for firstPage
   */
  _firstPage?: IElement;

  /**
   * Used for isolated representation of last page
   */
  lastPage?: string;
  /**
   * Extension for lastPage
   */
  _lastPage?: IElement;

  /**
   * Number of pages or screens
   */
  pageCount?: string;
  /**
   * Extension for pageCount
   */
  _pageCount?: IElement;

  /**
   * Copyright notice for the full article or artifact
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

}
