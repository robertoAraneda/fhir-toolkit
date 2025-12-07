import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitItemAdjudication } from '../../models/backbones/ExplanationOfBenefitItemAdjudication.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitItemAdjudicationBuilder - Fluent builder for ExplanationOfBenefitItemAdjudication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudicationBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class ExplanationOfBenefitItemAdjudicationBuilder extends BackboneElementBuilder<ExplanationOfBenefitItemAdjudication, IExplanationOfBenefitItemAdjudication> {
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
   * Set reason
   * Explanation of adjudication outcome
   */
  setReason(reason: ICodeableConcept): this {
    this.data.reason = reason;
    return this;
  }

  /**
   * Set amount
   * Monetary amount
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  /**
   * Set quantity
   * Non-monitary value
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitItemAdjudication instance
   */
  build(): ExplanationOfBenefitItemAdjudication {
    return new ExplanationOfBenefitItemAdjudication(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitItemAdjudication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitItemAdjudication> {
    const explanationOfBenefitItemAdjudication = this.build();
    await explanationOfBenefitItemAdjudication.validateOrThrow();
    return explanationOfBenefitItemAdjudication;
  }
}
