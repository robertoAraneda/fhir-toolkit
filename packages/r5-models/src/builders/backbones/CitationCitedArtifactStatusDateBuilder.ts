import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactStatusDate } from '../../models/backbones/CitationCitedArtifactStatusDate.js';
import type {
  ICitationCitedArtifactStatusDate,
  ICodeableConcept,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactStatusDateBuilder - Fluent builder for CitationCitedArtifactStatusDate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactStatusDate = new CitationCitedArtifactStatusDateBuilder()
 *   .setActivity(value)
 *   .build();
 */
export class CitationCitedArtifactStatusDateBuilder extends BackboneElementBuilder<CitationCitedArtifactStatusDate, ICitationCitedArtifactStatusDate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set activity
   * Classification of the status
   */
  setActivity(activity: ICodeableConcept): this {
    this.data.activity = activity;
    return this;
  }

  /**
   * Set actual
   * Either occurred or expected
   */
  setActual(actual: boolean): this {
    this.data.actual = actual;
    return this;
  }

  /**
   * Set period
   * When the status started and/or ended
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactStatusDate instance
   */
  build(): CitationCitedArtifactStatusDate {
    return new CitationCitedArtifactStatusDate(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactStatusDate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactStatusDate> {
    const citationCitedArtifactStatusDate = this.build();
    await citationCitedArtifactStatusDate.validateOrThrow();
    return citationCitedArtifactStatusDate;
  }
}
