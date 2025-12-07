import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * CitationCitedArtifactPublicationFormPublishedIn Interface
 * 
 * The collection the cited article or artifact is published in
 * 
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactpublicationformpublishedin.html
 */
export interface ICitationCitedArtifactPublicationFormPublishedIn extends IBackboneElement {
  /**
   * Kind of container (e.g. Periodical, database, or book)
   */
  type?: ICodeableConcept;

  /**
   * Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN
   */
  identifier?: IIdentifier[];

  /**
   * Name of the database or title of the book or journal
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Name of the publisher
   */
  publisher?: IReference<'Organization'>;

  /**
   * Geographic location of the publisher
   */
  publisherLocation?: string;
  /**
   * Extension for publisherLocation
   */
  _publisherLocation?: IElement;

}
