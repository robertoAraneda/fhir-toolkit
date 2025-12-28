import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ICitationCitedArtifactAbstract } from './ICitationCitedArtifactAbstract.js';
import type { ICitationCitedArtifactClassification } from './ICitationCitedArtifactClassification.js';
import type { ICitationCitedArtifactContributorship } from './ICitationCitedArtifactContributorship.js';
import type { ICitationCitedArtifactPart } from './ICitationCitedArtifactPart.js';
import type { ICitationCitedArtifactPublicationForm } from './ICitationCitedArtifactPublicationForm.js';
import type { ICitationCitedArtifactRelatesTo } from './ICitationCitedArtifactRelatesTo.js';
import type { ICitationCitedArtifactStatusDate } from './ICitationCitedArtifactStatusDate.js';
import type { ICitationCitedArtifactTitle } from './ICitationCitedArtifactTitle.js';
import type { ICitationCitedArtifactVersion } from './ICitationCitedArtifactVersion.js';
import type { ICitationCitedArtifactWebLocation } from './ICitationCitedArtifactWebLocation.js';

/**
 * CitationCitedArtifact Interface
 * 
 * The article or artifact being described
 * 
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifact.html
 */
export interface ICitationCitedArtifact extends IBackboneElement {
  /**
   * Unique identifier. May include DOI, PMID, PMCID, etc
   */
  identifier?: IIdentifier[];

  /**
   * Identifier not unique to the cited artifact. May include trial registry identifiers
   */
  relatedIdentifier?: IIdentifier[];

  /**
   * When the cited artifact was accessed
   */
  dateAccessed?: string;
  /**
   * Extension for dateAccessed
   */
  _dateAccessed?: IElement;

  /**
   * The defined version of the cited artifact
   */
  version?: ICitationCitedArtifactVersion;

  /**
   * The status of the cited artifact
   */
  currentState?: ICodeableConcept[];

  /**
   * An effective date or period for a status of the cited artifact
   */
  statusDate?: ICitationCitedArtifactStatusDate[];

  /**
   * The title details of the article or artifact
   */
  title?: ICitationCitedArtifactTitle[];

  /**
   * Summary of the article or artifact
   */
  abstract?: ICitationCitedArtifactAbstract[];

  /**
   * The component of the article or artifact
   */
  part?: ICitationCitedArtifactPart;

  /**
   * The artifact related to the cited artifact
   */
  relatesTo?: ICitationCitedArtifactRelatesTo[];

  /**
   * If multiple, used to represent alternative forms of the article that are not separate citations
   */
  publicationForm?: ICitationCitedArtifactPublicationForm[];

  /**
   * Used for any URL for the article or artifact cited
   */
  webLocation?: ICitationCitedArtifactWebLocation[];

  /**
   * The assignment to an organizing scheme
   */
  classification?: ICitationCitedArtifactClassification[];

  /**
   * Attribution of authors and other contributors
   */
  contributorship?: ICitationCitedArtifactContributorship;

  /**
   * Any additional information or content for the article or artifact
   */
  note?: IAnnotation[];

}
