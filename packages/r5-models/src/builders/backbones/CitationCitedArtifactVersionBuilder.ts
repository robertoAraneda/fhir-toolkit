import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactVersion } from '../../models/backbones/CitationCitedArtifactVersion.js';
import type {
  ICitationCitedArtifactVersion,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactVersionBuilder - Fluent builder for CitationCitedArtifactVersion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactVersion = new CitationCitedArtifactVersionBuilder()
 *   .setValue(value)
 *   .build();
 */
export class CitationCitedArtifactVersionBuilder extends BackboneElementBuilder<CitationCitedArtifactVersion, ICitationCitedArtifactVersion> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set value
   * The version number or other version identifier
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set baseCitation
   * Citation for the main version of the cited artifact
   */
  setBaseCitation(baseCitation: IReference<'Citation'>): this {
    this.data.baseCitation = baseCitation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactVersion instance
   */
  build(): CitationCitedArtifactVersion {
    return new CitationCitedArtifactVersion(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactVersion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactVersion> {
    const citationCitedArtifactVersion = this.build();
    await citationCitedArtifactVersion.validateOrThrow();
    return citationCitedArtifactVersion;
  }
}
