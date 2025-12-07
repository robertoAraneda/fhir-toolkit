import { ElementBuilder } from '../base/ElementBuilder.js';
import { RatioRange } from '../../models/datatypes/RatioRange.js';
import type {
  IQuantity,
  IRatioRange,
} from '@fhir-toolkit/r5-types';

/**
 * RatioRangeBuilder - Fluent builder for RatioRange datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const ratioRange = new RatioRangeBuilder()
 *   .setLowNumerator(value)
 *   .build();
 */
export class RatioRangeBuilder extends ElementBuilder<RatioRange, IRatioRange> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set lowNumerator
   * Low Numerator limit
   */
  setLowNumerator(lowNumerator: IQuantity): this {
    this.data.lowNumerator = lowNumerator;
    return this;
  }

  /**
   * Set highNumerator
   * High Numerator limit
   */
  setHighNumerator(highNumerator: IQuantity): this {
    this.data.highNumerator = highNumerator;
    return this;
  }

  /**
   * Set denominator
   * Denominator value
   */
  setDenominator(denominator: IQuantity): this {
    this.data.denominator = denominator;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RatioRange instance
   */
  build(): RatioRange {
    return new RatioRange(this.data);
  }

  /**
   * Build and validate the RatioRange instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RatioRange> {
    const ratioRange = this.build();
    await ratioRange.validateOrThrow();
    return ratioRange;
  }
}
