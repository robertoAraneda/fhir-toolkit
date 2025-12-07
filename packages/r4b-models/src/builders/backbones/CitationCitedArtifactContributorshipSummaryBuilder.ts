import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactContributorshipSummary } from '../../models/backbones/CitationCitedArtifactContributorshipSummary.js';
import type {
  ICitationCitedArtifactContributorshipSummary,
  ICodeableConcept,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactContributorshipSummaryBuilder - Fluent builder for CitationCitedArtifactContributorshipSummary backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactContributorshipSummary = new CitationCitedArtifactContributorshipSummaryBuilder()
 *   .setType(value)
 *   .build();
 */
export class CitationCitedArtifactContributorshipSummaryBuilder extends BackboneElementBuilder<CitationCitedArtifactContributorshipSummary, ICitationCitedArtifactContributorshipSummary> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Either authorList or contributorshipStatement
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set style
   * The format for the display string
   */
  setStyle(style: ICodeableConcept): this {
    this.data.style = style;
    return this;
  }

  /**
   * Set source
   * Used to code the producer or rule for creating the display string
   */
  setSource(source: ICodeableConcept): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set value
   * The display string for the author list, contributor list, or contributorship statement
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactContributorshipSummary instance
   */
  build(): CitationCitedArtifactContributorshipSummary {
    return new CitationCitedArtifactContributorshipSummary(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactContributorshipSummary instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactContributorshipSummary> {
    const citationCitedArtifactContributorshipSummary = this.build();
    await citationCitedArtifactContributorshipSummary.validateOrThrow();
    return citationCitedArtifactContributorshipSummary;
  }
}
