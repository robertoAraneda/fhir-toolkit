import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactClassification } from '../../models/backbones/CitationCitedArtifactClassification.js';
import type {
  ICitationCitedArtifactClassification,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactClassificationBuilder - Fluent builder for CitationCitedArtifactClassification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactClassification = new CitationCitedArtifactClassificationBuilder()
 *   .setType(value)
 *   .addClassifier({ ... })
 *   .build();
 */
export class CitationCitedArtifactClassificationBuilder extends BackboneElementBuilder<CitationCitedArtifactClassification, ICitationCitedArtifactClassification> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The kind of classifier (e.g. publication type, keyword)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add classifier
   * The specific classification value
   */
  addClassifier(classifier: ICodeableConcept): this {
    return this.addToArray('classifier', classifier);
  }

  /**
   * Add artifactAssessment
   * Complex or externally created classification
   */
  addArtifactAssessment(artifactAssessment: IReference<'ArtifactAssessment'>): this {
    return this.addToArray('artifactAssessment', artifactAssessment);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactClassification instance
   */
  build(): CitationCitedArtifactClassification {
    return new CitationCitedArtifactClassification(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactClassification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactClassification> {
    const citationCitedArtifactClassification = this.build();
    await citationCitedArtifactClassification.validateOrThrow();
    return citationCitedArtifactClassification;
  }
}
