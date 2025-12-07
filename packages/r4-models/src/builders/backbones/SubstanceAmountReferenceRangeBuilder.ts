import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceAmountReferenceRange } from '../../models/backbones/SubstanceAmountReferenceRange.js';
import type {
  IQuantity,
  ISubstanceAmountReferenceRange,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceAmountReferenceRangeBuilder - Fluent builder for SubstanceAmountReferenceRange backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceAmountReferenceRange = new SubstanceAmountReferenceRangeBuilder()
 *   .setLowLimit(value)
 *   .build();
 */
export class SubstanceAmountReferenceRangeBuilder extends BackboneElementBuilder<SubstanceAmountReferenceRange, ISubstanceAmountReferenceRange> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set lowLimit
   * Lower limit possible or expected
   */
  setLowLimit(lowLimit: IQuantity): this {
    this.data.lowLimit = lowLimit;
    return this;
  }

  /**
   * Set highLimit
   * Upper limit possible or expected
   */
  setHighLimit(highLimit: IQuantity): this {
    this.data.highLimit = highLimit;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceAmountReferenceRange instance
   */
  build(): SubstanceAmountReferenceRange {
    return new SubstanceAmountReferenceRange(this.data);
  }

  /**
   * Build and validate the SubstanceAmountReferenceRange instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceAmountReferenceRange> {
    const substanceAmountReferenceRange = this.build();
    await substanceAmountReferenceRange.validateOrThrow();
    return substanceAmountReferenceRange;
  }
}
