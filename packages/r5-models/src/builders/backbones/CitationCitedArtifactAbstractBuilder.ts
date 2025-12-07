import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactAbstract } from '../../models/backbones/CitationCitedArtifactAbstract.js';
import type {
  ICitationCitedArtifactAbstract,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactAbstractBuilder - Fluent builder for CitationCitedArtifactAbstract backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactAbstract = new CitationCitedArtifactAbstractBuilder()
 *   .setType(value)
 *   .build();
 */
export class CitationCitedArtifactAbstractBuilder extends BackboneElementBuilder<CitationCitedArtifactAbstract, ICitationCitedArtifactAbstract> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The kind of abstract
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set language
   * Used to express the specific language
   */
  setLanguage(language: ICodeableConcept): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set text
   * Abstract content
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set copyright
   * Copyright notice for the abstract
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactAbstract instance
   */
  build(): CitationCitedArtifactAbstract {
    return new CitationCitedArtifactAbstract(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactAbstract instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactAbstract> {
    const citationCitedArtifactAbstract = this.build();
    await citationCitedArtifactAbstract.validateOrThrow();
    return citationCitedArtifactAbstract;
  }
}
