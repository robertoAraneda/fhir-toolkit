import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseItemDetail } from '../../models/backbones/ClaimResponseItemDetail.js';
import type {
  IClaimResponseItemAdjudication,
  IClaimResponseItemDetail,
  IClaimResponseItemDetailSubDetail,
  IClaimResponseItemReviewOutcome,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseItemDetailBuilder - Fluent builder for ClaimResponseItemDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseItemDetail = new ClaimResponseItemDetailBuilder()
 *   .setDetailSequence(value)
 *   .addTraceNumber({ ... })
 *   .build();
 */
export class ClaimResponseItemDetailBuilder extends BackboneElementBuilder<ClaimResponseItemDetail, IClaimResponseItemDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set detailSequence
   * Claim detail instance identifier
   */
  setDetailSequence(detailSequence: number): this {
    this.data.detailSequence = detailSequence;
    return this;
  }

  /**
   * Set reviewOutcome
   * Detail level adjudication results
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
   * Detail level adjudication details
   */
  addAdjudication(adjudication: IClaimResponseItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add subDetail
   * Adjudication for claim sub-details
   */
  addSubDetail(subDetail: IClaimResponseItemDetailSubDetail): this {
    return this.addToArray('subDetail', subDetail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseItemDetail instance
   */
  build(): ClaimResponseItemDetail {
    return new ClaimResponseItemDetail(this.data);
  }

  /**
   * Build and validate the ClaimResponseItemDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseItemDetail> {
    const claimResponseItemDetail = this.build();
    await claimResponseItemDetail.validateOrThrow();
    return claimResponseItemDetail;
  }
}
