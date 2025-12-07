import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication } from '../../models/backbones/CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication.js';
import type {
  ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationBuilder - Fluent builder for CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication = new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationBuilder()
 *   .setDate(value)
 *   .build();
 */
export class CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationBuilder extends BackboneElementBuilder<CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication, ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set date
   * Date on which the issue of the journal was published
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set year
   * Year on which the issue of the journal was published
   */
  setYear(year: string): this {
    this.data.year = year;
    return this;
  }

  /**
   * Set month
   * Month on which the issue of the journal was published
   */
  setMonth(month: string): this {
    this.data.month = month;
    return this;
  }

  /**
   * Set day
   * Day on which the issue of the journal was published
   */
  setDay(day: string): this {
    this.data.day = day;
    return this;
  }

  /**
   * Set season
   * Season on which the issue of the journal was published
   */
  setSeason(season: string): this {
    this.data.season = season;
    return this;
  }

  /**
   * Set text
   * Text representation of the date of which the issue of the journal was published
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication instance
   */
  build(): CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication {
    return new CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication> {
    const citationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication = this.build();
    await citationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication.validateOrThrow();
    return citationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication;
  }
}
