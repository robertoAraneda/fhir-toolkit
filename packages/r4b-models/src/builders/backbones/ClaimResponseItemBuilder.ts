import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseItem } from '../../models/backbones/ClaimResponseItem.js';
import type {
  IClaimResponseItem,
  IClaimResponseItemAdjudication,
  IClaimResponseItemDetail,
} from '@fhir-toolkit/r4b-types';

/**
 * ClaimResponseItemBuilder - Fluent builder for ClaimResponseItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseItem = new ClaimResponseItemBuilder()
 *   .setItemSequence(value)
 *   .addNoteNumber({ ... })
 *   .build();
 */
export class ClaimResponseItemBuilder extends BackboneElementBuilder<ClaimResponseItem, IClaimResponseItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set itemSequence
   * Claim item instance identifier
   */
  setItemSequence(itemSequence: number): this {
    this.data.itemSequence = itemSequence;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add noteNumber
   * Applicable note numbers
   */
  addNoteNumber(noteNumber: number): this {
    return this.addToArray('noteNumber', noteNumber);
  }

  /**
   * Add adjudication
   * Adjudication details
   */
  addAdjudication(adjudication: IClaimResponseItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add detail
   * Adjudication for claim details
   */
  addDetail(detail: IClaimResponseItemDetail): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseItem instance
   */
  build(): ClaimResponseItem {
    return new ClaimResponseItem(this.data);
  }

  /**
   * Build and validate the ClaimResponseItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseItem> {
    const claimResponseItem = this.build();
    await claimResponseItem.validateOrThrow();
    return claimResponseItem;
  }
}
