import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitPayment } from '../../models/backbones/ExplanationOfBenefitPayment.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitPayment,
  IIdentifier,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitPaymentBuilder - Fluent builder for ExplanationOfBenefitPayment backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitPayment = new ExplanationOfBenefitPaymentBuilder()
 *   .setType(value)
 *   .build();
 */
export class ExplanationOfBenefitPaymentBuilder extends BackboneElementBuilder<ExplanationOfBenefitPayment, IExplanationOfBenefitPayment> {
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
   * Explanation for the variance
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
   * Build the ExplanationOfBenefitPayment instance
   */
  build(): ExplanationOfBenefitPayment {
    return new ExplanationOfBenefitPayment(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitPayment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitPayment> {
    const explanationOfBenefitPayment = this.build();
    await explanationOfBenefitPayment.validateOrThrow();
    return explanationOfBenefitPayment;
  }
}
