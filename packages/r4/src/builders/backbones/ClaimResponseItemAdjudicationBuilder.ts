import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseItemAdjudication } from '../../models/backbones/ClaimResponseItemAdjudication.js';
import type {
  IClaimResponseItemAdjudication,
  ICodeableConcept,
  IMoney,
} from '@fhir-toolkit/r4-types';

/**
 * ClaimResponseItemAdjudicationBuilder - Fluent builder for ClaimResponseItemAdjudication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseItemAdjudication = new ClaimResponseItemAdjudicationBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class ClaimResponseItemAdjudicationBuilder extends BackboneElementBuilder<ClaimResponseItemAdjudication, IClaimResponseItemAdjudication> {
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
   * Set value
   * Non-monetary value
   */
  setValue(value: number): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseItemAdjudication instance
   */
  build(): ClaimResponseItemAdjudication {
    return new ClaimResponseItemAdjudication(this.data);
  }

  /**
   * Build and validate the ClaimResponseItemAdjudication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseItemAdjudication> {
    const claimResponseItemAdjudication = this.build();
    await claimResponseItemAdjudication.validateOrThrow();
    return claimResponseItemAdjudication;
  }
}
