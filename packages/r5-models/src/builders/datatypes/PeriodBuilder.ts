import { ElementBuilder } from '../base/ElementBuilder.js';
import { Period } from '../../models/datatypes/Period.js';
import type {
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * PeriodBuilder - Fluent builder for Period datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const period = new PeriodBuilder()
 *   .setStart(value)
 *   .build();
 */
export class PeriodBuilder extends ElementBuilder<Period, IPeriod> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set start
   * Starting time with inclusive boundary
   */
  setStart(start: string): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * End time with inclusive boundary, if not ongoing
   */
  setEnd(end: string): this {
    this.data.end = end;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Period instance
   */
  build(): Period {
    return new Period(this.data);
  }

  /**
   * Build and validate the Period instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Period> {
    const period = this.build();
    await period.validateOrThrow();
    return period;
  }
}
