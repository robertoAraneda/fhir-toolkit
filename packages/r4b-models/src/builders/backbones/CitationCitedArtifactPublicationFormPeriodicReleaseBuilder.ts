import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactPublicationFormPeriodicRelease } from '../../models/backbones/CitationCitedArtifactPublicationFormPeriodicRelease.js';
import type {
  ICitationCitedArtifactPublicationFormPeriodicRelease,
  ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication,
  ICodeableConcept,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactPublicationFormPeriodicReleaseBuilder - Fluent builder for CitationCitedArtifactPublicationFormPeriodicRelease backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactPublicationFormPeriodicRelease = new CitationCitedArtifactPublicationFormPeriodicReleaseBuilder()
 *   .setCitedMedium(value)
 *   .build();
 */
export class CitationCitedArtifactPublicationFormPeriodicReleaseBuilder extends BackboneElementBuilder<CitationCitedArtifactPublicationFormPeriodicRelease, ICitationCitedArtifactPublicationFormPeriodicRelease> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set citedMedium
   * Internet or Print
   */
  setCitedMedium(citedMedium: ICodeableConcept): this {
    this.data.citedMedium = citedMedium;
    return this;
  }

  /**
   * Set volume
   * Volume number of journal in which the article is published
   */
  setVolume(volume: string): this {
    this.data.volume = volume;
    return this;
  }

  /**
   * Set issue
   * Issue, part or supplement of journal in which the article is published
   */
  setIssue(issue: string): this {
    this.data.issue = issue;
    return this;
  }

  /**
   * Set dateOfPublication
   * Defining the date on which the issue of the journal was published
   */
  setDateOfPublication(dateOfPublication: ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication): this {
    this.data.dateOfPublication = dateOfPublication;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactPublicationFormPeriodicRelease instance
   */
  build(): CitationCitedArtifactPublicationFormPeriodicRelease {
    return new CitationCitedArtifactPublicationFormPeriodicRelease(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactPublicationFormPeriodicRelease instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactPublicationFormPeriodicRelease> {
    const citationCitedArtifactPublicationFormPeriodicRelease = this.build();
    await citationCitedArtifactPublicationFormPeriodicRelease.validateOrThrow();
    return citationCitedArtifactPublicationFormPeriodicRelease;
  }
}
