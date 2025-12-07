import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseError } from '../../models/backbones/ClaimResponseError.js';
import type {
  IClaimResponseError,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseErrorBuilder - Fluent builder for ClaimResponseError backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseError = new ClaimResponseErrorBuilder()
 *   .setItemSequence(value)
 *   .addExpression({ ... })
 *   .build();
 */
export class ClaimResponseErrorBuilder extends BackboneElementBuilder<ClaimResponseError, IClaimResponseError> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set itemSequence
   * Item sequence number
   */
  setItemSequence(itemSequence: number): this {
    this.data.itemSequence = itemSequence;
    return this;
  }

  /**
   * Set detailSequence
   * Detail sequence number
   */
  setDetailSequence(detailSequence: number): this {
    this.data.detailSequence = detailSequence;
    return this;
  }

  /**
   * Set subDetailSequence
   * Subdetail sequence number
   */
  setSubDetailSequence(subDetailSequence: number): this {
    this.data.subDetailSequence = subDetailSequence;
    return this;
  }

  /**
   * Set code
   * Error code detailing processing issues
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add expression
   * FHIRPath of element(s) related to issue
   */
  addExpression(expression: string): this {
    return this.addToArray('expression', expression);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseError instance
   */
  build(): ClaimResponseError {
    return new ClaimResponseError(this.data);
  }

  /**
   * Build and validate the ClaimResponseError instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseError> {
    const claimResponseError = this.build();
    await claimResponseError.validateOrThrow();
    return claimResponseError;
  }
}
