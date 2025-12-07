import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitItemReviewOutcome } from '../../models/backbones/ExplanationOfBenefitItemReviewOutcome.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitItemReviewOutcome,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitItemReviewOutcomeBuilder - Fluent builder for ExplanationOfBenefitItemReviewOutcome backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitItemReviewOutcome = new ExplanationOfBenefitItemReviewOutcomeBuilder()
 *   .setDecision(value)
 *   .addReason({ ... })
 *   .build();
 */
export class ExplanationOfBenefitItemReviewOutcomeBuilder extends BackboneElementBuilder<ExplanationOfBenefitItemReviewOutcome, IExplanationOfBenefitItemReviewOutcome> {
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
   * Build the ExplanationOfBenefitItemReviewOutcome instance
   */
  build(): ExplanationOfBenefitItemReviewOutcome {
    return new ExplanationOfBenefitItemReviewOutcome(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitItemReviewOutcome instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitItemReviewOutcome> {
    const explanationOfBenefitItemReviewOutcome = this.build();
    await explanationOfBenefitItemReviewOutcome.validateOrThrow();
    return explanationOfBenefitItemReviewOutcome;
  }
}
