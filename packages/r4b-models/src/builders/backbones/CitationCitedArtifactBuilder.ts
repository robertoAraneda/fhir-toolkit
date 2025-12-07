import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifact } from '../../models/backbones/CitationCitedArtifact.js';
import type {
  IAnnotation,
  ICitationCitedArtifact,
  ICitationCitedArtifactAbstract,
  ICitationCitedArtifactClassification,
  ICitationCitedArtifactContributorship,
  ICitationCitedArtifactPart,
  ICitationCitedArtifactPublicationForm,
  ICitationCitedArtifactRelatesTo,
  ICitationCitedArtifactStatusDate,
  ICitationCitedArtifactTitle,
  ICitationCitedArtifactVersion,
  ICitationCitedArtifactWebLocation,
  ICodeableConcept,
  IIdentifier,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactBuilder - Fluent builder for CitationCitedArtifact backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifact = new CitationCitedArtifactBuilder()
 *   .setDateAccessed(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CitationCitedArtifactBuilder extends BackboneElementBuilder<CitationCitedArtifact, ICitationCitedArtifact> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set dateAccessed
   * When the cited artifact was accessed
   */
  setDateAccessed(dateAccessed: string): this {
    this.data.dateAccessed = dateAccessed;
    return this;
  }

  /**
   * Set version
   * The defined version of the cited artifact
   */
  setVersion(version: ICitationCitedArtifactVersion): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set part
   * The component of the article or artifact
   */
  setPart(part: ICitationCitedArtifactPart): this {
    this.data.part = part;
    return this;
  }

  /**
   * Set contributorship
   * Attribution of authors and other contributors
   */
  setContributorship(contributorship: ICitationCitedArtifactContributorship): this {
    this.data.contributorship = contributorship;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * May include DOI, PMID, PMCID, etc.
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add relatedIdentifier
   * May include trial registry identifiers
   */
  addRelatedIdentifier(relatedIdentifier: IIdentifier): this {
    return this.addToArray('relatedIdentifier', relatedIdentifier);
  }

  /**
   * Add currentState
   * The status of the cited artifact
   */
  addCurrentState(currentState: ICodeableConcept): this {
    return this.addToArray('currentState', currentState);
  }

  /**
   * Add statusDate
   * An effective date or period for a status of the cited artifact
   */
  addStatusDate(statusDate: ICitationCitedArtifactStatusDate): this {
    return this.addToArray('statusDate', statusDate);
  }

  /**
   * Add title
   * The title details of the article or artifact
   */
  addTitle(title: ICitationCitedArtifactTitle): this {
    return this.addToArray('title', title);
  }

  /**
   * Add abstract
   * Summary of the article or artifact
   */
  addAbstract(abstract: ICitationCitedArtifactAbstract): this {
    return this.addToArray('abstract', abstract);
  }

  /**
   * Add relatesTo
   * The artifact related to the cited artifact
   */
  addRelatesTo(relatesTo: ICitationCitedArtifactRelatesTo): this {
    return this.addToArray('relatesTo', relatesTo);
  }

  /**
   * Add publicationForm
   * If multiple, used to represent alternative forms of the article that are not separate citations
   */
  addPublicationForm(publicationForm: ICitationCitedArtifactPublicationForm): this {
    return this.addToArray('publicationForm', publicationForm);
  }

  /**
   * Add webLocation
   * Used for any URL for the article or artifact cited
   */
  addWebLocation(webLocation: ICitationCitedArtifactWebLocation): this {
    return this.addToArray('webLocation', webLocation);
  }

  /**
   * Add classification
   * The assignment to an organizing scheme
   */
  addClassification(classification: ICitationCitedArtifactClassification): this {
    return this.addToArray('classification', classification);
  }

  /**
   * Add note
   * Any additional information or content for the article or artifact
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifact instance
   */
  build(): CitationCitedArtifact {
    return new CitationCitedArtifact(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifact instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifact> {
    const citationCitedArtifact = this.build();
    await citationCitedArtifact.validateOrThrow();
    return citationCitedArtifact;
  }
}
