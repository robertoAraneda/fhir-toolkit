import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactClassificationWhoClassified } from '../../models/backbones/CitationCitedArtifactClassificationWhoClassified.js';
import type {
  ICitationCitedArtifactClassificationWhoClassified,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactClassificationWhoClassifiedBuilder - Fluent builder for CitationCitedArtifactClassificationWhoClassified backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactClassificationWhoClassified = new CitationCitedArtifactClassificationWhoClassifiedBuilder()
 *   .setPerson(value)
 *   .build();
 */
export class CitationCitedArtifactClassificationWhoClassifiedBuilder extends BackboneElementBuilder<CitationCitedArtifactClassificationWhoClassified, ICitationCitedArtifactClassificationWhoClassified> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set person
   * Person who created the classification
   */
  setPerson(person: IReference<'Person' | 'Practitioner'>): this {
    this.data.person = person;
    return this;
  }

  /**
   * Set organization
   * Organization who created the classification
   */
  setOrganization(organization: IReference<'Organization'>): this {
    this.data.organization = organization;
    return this;
  }

  /**
   * Set publisher
   * The publisher of the classification, not the publisher of the article or artifact being cited
   */
  setPublisher(publisher: IReference<'Organization'>): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set classifierCopyright
   * Rights management statement for the classification
   */
  setClassifierCopyright(classifierCopyright: string): this {
    this.data.classifierCopyright = classifierCopyright;
    return this;
  }

  /**
   * Set freeToShare
   * Acceptable to re-use the classification
   */
  setFreeToShare(freeToShare: boolean): this {
    this.data.freeToShare = freeToShare;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactClassificationWhoClassified instance
   */
  build(): CitationCitedArtifactClassificationWhoClassified {
    return new CitationCitedArtifactClassificationWhoClassified(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactClassificationWhoClassified instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactClassificationWhoClassified> {
    const citationCitedArtifactClassificationWhoClassified = this.build();
    await citationCitedArtifactClassificationWhoClassified.validateOrThrow();
    return citationCitedArtifactClassificationWhoClassified;
  }
}
