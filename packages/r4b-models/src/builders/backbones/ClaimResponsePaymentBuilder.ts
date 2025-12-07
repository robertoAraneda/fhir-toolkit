import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponsePayment } from '../../models/backbones/ClaimResponsePayment.js';
import type {
  IClaimResponsePayment,
  ICodeableConcept,
  IIdentifier,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/**
 * ClaimResponsePaymentBuilder - Fluent builder for ClaimResponsePayment backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponsePayment = new ClaimResponsePaymentBuilder()
 *   .setType(value)
 *   .build();
 */
export class ClaimResponsePaymentBuilder extends BackboneElementBuilder<ClaimResponsePayment, IClaimResponsePayment> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Partial or complete payment
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set adjustment
   * Payment adjustment for non-claim issues
   */
  setAdjustment(adjustment: IMoney): this {
    this.data.adjustment = adjustment;
    return this;
  }

  /**
   * Set adjustmentReason
   * Explanation for the adjustment
   */
  setAdjustmentReason(adjustmentReason: ICodeableConcept): this {
    this.data.adjustmentReason = adjustmentReason;
    return this;
  }

  /**
   * Set date
   * Expected date of payment
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set amount
   * Payable amount after adjustment
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  /**
   * Set identifier
   * Business identifier for the payment
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponsePayment instance
   */
  build(): ClaimResponsePayment {
    return new ClaimResponsePayment(this.data);
  }

  /**
   * Build and validate the ClaimResponsePayment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponsePayment> {
    const claimResponsePayment = this.build();
    await claimResponsePayment.validateOrThrow();
    return claimResponsePayment;
  }
}
