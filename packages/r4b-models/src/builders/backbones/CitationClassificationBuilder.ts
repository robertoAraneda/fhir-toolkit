import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationClassification } from '../../models/backbones/CitationClassification.js';
import type {
  ICitationClassification,
  ICodeableConcept,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationClassificationBuilder - Fluent builder for CitationClassification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationClassification = new CitationClassificationBuilder()
 *   .setType(value)
 *   .addClassifier({ ... })
 *   .build();
 */
export class CitationClassificationBuilder extends BackboneElementBuilder<CitationClassification, ICitationClassification> {
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

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationClassification instance
   */
  build(): CitationClassification {
    return new CitationClassification(this.data);
  }

  /**
   * Build and validate the CitationClassification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationClassification> {
    const citationClassification = this.build();
    await citationClassification.validateOrThrow();
    return citationClassification;
  }
}
