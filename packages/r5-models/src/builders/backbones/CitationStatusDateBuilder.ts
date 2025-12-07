import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationStatusDate } from '../../models/backbones/CitationStatusDate.js';
import type {
  ICitationStatusDate,
  ICodeableConcept,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * CitationStatusDateBuilder - Fluent builder for CitationStatusDate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationStatusDate = new CitationStatusDateBuilder()
 *   .setActivity(value)
 *   .build();
 */
export class CitationStatusDateBuilder extends BackboneElementBuilder<CitationStatusDate, ICitationStatusDate> {
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
   * Build the CitationStatusDate instance
   */
  build(): CitationStatusDate {
    return new CitationStatusDate(this.data);
  }

  /**
   * Build and validate the CitationStatusDate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationStatusDate> {
    const citationStatusDate = this.build();
    await citationStatusDate.validateOrThrow();
    return citationStatusDate;
  }
}
