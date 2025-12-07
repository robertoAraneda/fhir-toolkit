import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactPublicationFormPublishedIn } from '../../models/backbones/CitationCitedArtifactPublicationFormPublishedIn.js';
import type {
  ICitationCitedArtifactPublicationFormPublishedIn,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactPublicationFormPublishedInBuilder - Fluent builder for CitationCitedArtifactPublicationFormPublishedIn backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactPublicationFormPublishedIn = new CitationCitedArtifactPublicationFormPublishedInBuilder()
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CitationCitedArtifactPublicationFormPublishedInBuilder extends BackboneElementBuilder<CitationCitedArtifactPublicationFormPublishedIn, ICitationCitedArtifactPublicationFormPublishedIn> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Kind of container (e.g. Periodical, database, or book)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set title
   * Name of the database or title of the book or journal
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set publisher
   * Name of or resource describing the publisher
   */
  setPublisher(publisher: IReference<'Organization'>): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set publisherLocation
   * Geographic location of the publisher
   */
  setPublisherLocation(publisherLocation: string): this {
    this.data.publisherLocation = publisherLocation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactPublicationFormPublishedIn instance
   */
  build(): CitationCitedArtifactPublicationFormPublishedIn {
    return new CitationCitedArtifactPublicationFormPublishedIn(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactPublicationFormPublishedIn instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactPublicationFormPublishedIn> {
    const citationCitedArtifactPublicationFormPublishedIn = this.build();
    await citationCitedArtifactPublicationFormPublishedIn.validateOrThrow();
    return citationCitedArtifactPublicationFormPublishedIn;
  }
}
