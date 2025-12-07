import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseItemDetailSubDetail } from '../../models/backbones/ClaimResponseItemDetailSubDetail.js';
import type {
  IClaimResponseItemAdjudication,
  IClaimResponseItemDetailSubDetail,
  IClaimResponseItemReviewOutcome,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseItemDetailSubDetailBuilder - Fluent builder for ClaimResponseItemDetailSubDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseItemDetailSubDetail = new ClaimResponseItemDetailSubDetailBuilder()
 *   .setSubDetailSequence(value)
 *   .addTraceNumber({ ... })
 *   .build();
 */
export class ClaimResponseItemDetailSubDetailBuilder extends BackboneElementBuilder<ClaimResponseItemDetailSubDetail, IClaimResponseItemDetailSubDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set subDetailSequence
   * Claim sub-detail instance identifier
   */
  setSubDetailSequence(subDetailSequence: number): this {
    this.data.subDetailSequence = subDetailSequence;
    return this;
  }

  /**
   * Set reviewOutcome
   * Subdetail level adjudication results
   */
  setReviewOutcome(reviewOutcome: IClaimResponseItemReviewOutcome): this {
    this.data.reviewOutcome = reviewOutcome;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add traceNumber
   * Number for tracking
   */
  addTraceNumber(traceNumber: IIdentifier): this {
    return this.addToArray('traceNumber', traceNumber);
  }

  /**
   * Add noteNumber
   * Applicable note numbers
   */
  addNoteNumber(noteNumber: number): this {
    return this.addToArray('noteNumber', noteNumber);
  }

  /**
   * Add adjudication
   * Subdetail level adjudication details
   */
  addAdjudication(adjudication: IClaimResponseItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseItemDetailSubDetail instance
   */
  build(): ClaimResponseItemDetailSubDetail {
    return new ClaimResponseItemDetailSubDetail(this.data);
  }

  /**
   * Build and validate the ClaimResponseItemDetailSubDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseItemDetailSubDetail> {
    const claimResponseItemDetailSubDetail = this.build();
    await claimResponseItemDetailSubDetail.validateOrThrow();
    return claimResponseItemDetailSubDetail;
  }
}
