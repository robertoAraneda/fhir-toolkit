import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactContributorship } from '../../models/backbones/CitationCitedArtifactContributorship.js';
import type {
  ICitationCitedArtifactContributorship,
  ICitationCitedArtifactContributorshipEntry,
  ICitationCitedArtifactContributorshipSummary,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactContributorshipBuilder - Fluent builder for CitationCitedArtifactContributorship backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactContributorship = new CitationCitedArtifactContributorshipBuilder()
 *   .setComplete(value)
 *   .addEntry({ ... })
 *   .build();
 */
export class CitationCitedArtifactContributorshipBuilder extends BackboneElementBuilder<CitationCitedArtifactContributorship, ICitationCitedArtifactContributorship> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set complete
   * Indicates if the list includes all authors and/or contributors
   */
  setComplete(complete: boolean): this {
    this.data.complete = complete;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add entry
   * An individual entity named as a contributor
   */
  addEntry(entry: ICitationCitedArtifactContributorshipEntry): this {
    return this.addToArray('entry', entry);
  }

  /**
   * Add summary
   * Used to record a display of the author/contributor list without separate data element for each list member
   */
  addSummary(summary: ICitationCitedArtifactContributorshipSummary): this {
    return this.addToArray('summary', summary);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactContributorship instance
   */
  build(): CitationCitedArtifactContributorship {
    return new CitationCitedArtifactContributorship(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactContributorship instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactContributorship> {
    const citationCitedArtifactContributorship = this.build();
    await citationCitedArtifactContributorship.validateOrThrow();
    return citationCitedArtifactContributorship;
  }
}
