import { ElementBuilder } from '../base/ElementBuilder.js';
import { Ratio } from '../../models/datatypes/Ratio.js';
import type {
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r4-types';

/**
 * RatioBuilder - Fluent builder for Ratio datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const ratio = new RatioBuilder()
 *   .setNumerator(value)
 *   .build();
 */
export class RatioBuilder extends ElementBuilder<Ratio, IRatio> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set numerator
   * Numerator value
   */
  setNumerator(numerator: IQuantity): this {
    this.data.numerator = numerator;
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
   * Build the Ratio instance
   */
  build(): Ratio {
    return new Ratio(this.data);
  }

  /**
   * Build and validate the Ratio instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Ratio> {
    const ratio = this.build();
    await ratio.validateOrThrow();
    return ratio;
  }
}
