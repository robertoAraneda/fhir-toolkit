import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationSummary } from '../../models/backbones/CitationSummary.js';
import type {
  ICitationSummary,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * CitationSummaryBuilder - Fluent builder for CitationSummary backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationSummary = new CitationSummaryBuilder()
 *   .setStyle(value)
 *   .build();
 */
export class CitationSummaryBuilder extends BackboneElementBuilder<CitationSummary, ICitationSummary> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set style
   * Format for display of the citation summary
   */
  setStyle(style: ICodeableConcept): this {
    this.data.style = style;
    return this;
  }

  /**
   * Set text
   * The human-readable display of the citation summary
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationSummary instance
   */
  build(): CitationSummary {
    return new CitationSummary(this.data);
  }

  /**
   * Build and validate the CitationSummary instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationSummary> {
    const citationSummary = this.build();
    await citationSummary.validateOrThrow();
    return citationSummary;
  }
}
