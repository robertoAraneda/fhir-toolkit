import { ElementBuilder } from '../base/ElementBuilder.js';
import { Range } from '../../models/datatypes/Range.js';
import type {
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4-types';

/**
 * RangeBuilder - Fluent builder for Range datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const range = new RangeBuilder()
 *   .setLow(value)
 *   .build();
 */
export class RangeBuilder extends ElementBuilder<Range, IRange> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set low
   * Low limit
   */
  setLow(low: IQuantity): this {
    this.data.low = low;
    return this;
  }

  /**
   * Set high
   * High limit
   */
  setHigh(high: IQuantity): this {
    this.data.high = high;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Range instance
   */
  build(): Range {
    return new Range(this.data);
  }

  /**
   * Build and validate the Range instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Range> {
    const range = this.build();
    await range.validateOrThrow();
    return range;
  }
}
