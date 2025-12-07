import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactTitle } from '../../models/backbones/CitationCitedArtifactTitle.js';
import type {
  ICitationCitedArtifactTitle,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactTitleBuilder - Fluent builder for CitationCitedArtifactTitle backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactTitle = new CitationCitedArtifactTitleBuilder()
 *   .setLanguage(value)
 *   .addType({ ... })
 *   .build();
 */
export class CitationCitedArtifactTitleBuilder extends BackboneElementBuilder<CitationCitedArtifactTitle, ICitationCitedArtifactTitle> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

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
   * The title of the article or artifact
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * The kind of title
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactTitle instance
   */
  build(): CitationCitedArtifactTitle {
    return new CitationCitedArtifactTitle(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactTitle instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactTitle> {
    const citationCitedArtifactTitle = this.build();
    await citationCitedArtifactTitle.validateOrThrow();
    return citationCitedArtifactTitle;
  }
}
