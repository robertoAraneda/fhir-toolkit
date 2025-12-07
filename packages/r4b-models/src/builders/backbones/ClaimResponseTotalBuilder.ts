import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseTotal } from '../../models/backbones/ClaimResponseTotal.js';
import type {
  IClaimResponseTotal,
  ICodeableConcept,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/**
 * ClaimResponseTotalBuilder - Fluent builder for ClaimResponseTotal backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseTotal = new ClaimResponseTotalBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class ClaimResponseTotalBuilder extends BackboneElementBuilder<ClaimResponseTotal, IClaimResponseTotal> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * Type of adjudication information
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set amount
   * Financial total for the category
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseTotal instance
   */
  build(): ClaimResponseTotal {
    return new ClaimResponseTotal(this.data);
  }

  /**
   * Build and validate the ClaimResponseTotal instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseTotal> {
    const claimResponseTotal = this.build();
    await claimResponseTotal.validateOrThrow();
    return claimResponseTotal;
  }
}
