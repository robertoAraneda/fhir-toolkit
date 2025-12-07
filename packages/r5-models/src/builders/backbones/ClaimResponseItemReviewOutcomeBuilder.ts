import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseItemReviewOutcome } from '../../models/backbones/ClaimResponseItemReviewOutcome.js';
import type {
  IClaimResponseItemReviewOutcome,
  ICodeableConcept,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseItemReviewOutcomeBuilder - Fluent builder for ClaimResponseItemReviewOutcome backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseItemReviewOutcome = new ClaimResponseItemReviewOutcomeBuilder()
 *   .setDecision(value)
 *   .addReason({ ... })
 *   .build();
 */
export class ClaimResponseItemReviewOutcomeBuilder extends BackboneElementBuilder<ClaimResponseItemReviewOutcome, IClaimResponseItemReviewOutcome> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set decision
   * Result of the adjudication
   */
  setDecision(decision: ICodeableConcept): this {
    this.data.decision = decision;
    return this;
  }

  /**
   * Set preAuthRef
   * Preauthorization reference
   */
  setPreAuthRef(preAuthRef: string): this {
    this.data.preAuthRef = preAuthRef;
    return this;
  }

  /**
   * Set preAuthPeriod
   * Preauthorization reference effective period
   */
  setPreAuthPeriod(preAuthPeriod: IPeriod): this {
    this.data.preAuthPeriod = preAuthPeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add reason
   * Reason for result of the adjudication
   */
  addReason(reason: ICodeableConcept): this {
    return this.addToArray('reason', reason);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseItemReviewOutcome instance
   */
  build(): ClaimResponseItemReviewOutcome {
    return new ClaimResponseItemReviewOutcome(this.data);
  }

  /**
   * Build and validate the ClaimResponseItemReviewOutcome instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseItemReviewOutcome> {
    const claimResponseItemReviewOutcome = this.build();
    await claimResponseItemReviewOutcome.validateOrThrow();
    return claimResponseItemReviewOutcome;
  }
}
