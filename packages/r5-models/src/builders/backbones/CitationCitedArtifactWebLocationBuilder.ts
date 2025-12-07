import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactWebLocation } from '../../models/backbones/CitationCitedArtifactWebLocation.js';
import type {
  ICitationCitedArtifactWebLocation,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactWebLocationBuilder - Fluent builder for CitationCitedArtifactWebLocation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactWebLocation = new CitationCitedArtifactWebLocationBuilder()
 *   .setUrl(value)
 *   .addClassifier({ ... })
 *   .build();
 */
export class CitationCitedArtifactWebLocationBuilder extends BackboneElementBuilder<CitationCitedArtifactWebLocation, ICitationCitedArtifactWebLocation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * The specific URL
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add classifier
   * Code the reason for different URLs, e.g. abstract and full-text
   */
  addClassifier(classifier: ICodeableConcept): this {
    return this.addToArray('classifier', classifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactWebLocation instance
   */
  build(): CitationCitedArtifactWebLocation {
    return new CitationCitedArtifactWebLocation(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactWebLocation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactWebLocation> {
    const citationCitedArtifactWebLocation = this.build();
    await citationCitedArtifactWebLocation.validateOrThrow();
    return citationCitedArtifactWebLocation;
  }
}
