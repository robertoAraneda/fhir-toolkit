import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactContributorshipEntryContributionInstance } from '../../models/backbones/CitationCitedArtifactContributorshipEntryContributionInstance.js';
import type {
  ICitationCitedArtifactContributorshipEntryContributionInstance,
  ICodeableConcept,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactContributorshipEntryContributionInstanceBuilder - Fluent builder for CitationCitedArtifactContributorshipEntryContributionInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactContributorshipEntryContributionInstance = new CitationCitedArtifactContributorshipEntryContributionInstanceBuilder()
 *   .setType(value)
 *   .build();
 */
export class CitationCitedArtifactContributorshipEntryContributionInstanceBuilder extends BackboneElementBuilder<CitationCitedArtifactContributorshipEntryContributionInstance, ICitationCitedArtifactContributorshipEntryContributionInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The specific contribution
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set time
   * The time that the contribution was made
   */
  setTime(time: string): this {
    this.data.time = time;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactContributorshipEntryContributionInstance instance
   */
  build(): CitationCitedArtifactContributorshipEntryContributionInstance {
    return new CitationCitedArtifactContributorshipEntryContributionInstance(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactContributorshipEntryContributionInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactContributorshipEntryContributionInstance> {
    const citationCitedArtifactContributorshipEntryContributionInstance = this.build();
    await citationCitedArtifactContributorshipEntryContributionInstance.validateOrThrow();
    return citationCitedArtifactContributorshipEntryContributionInstance;
  }
}
