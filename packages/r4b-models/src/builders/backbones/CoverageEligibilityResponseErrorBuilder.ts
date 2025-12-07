import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityResponseError } from '../../models/backbones/CoverageEligibilityResponseError.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityResponseError,
} from '@fhir-toolkit/r4b-types';

/**
 * CoverageEligibilityResponseErrorBuilder - Fluent builder for CoverageEligibilityResponseError backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityResponseError = new CoverageEligibilityResponseErrorBuilder()
 *   .setCode(value)
 *   .build();
 */
export class CoverageEligibilityResponseErrorBuilder extends BackboneElementBuilder<CoverageEligibilityResponseError, ICoverageEligibilityResponseError> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Error code detailing processing issues
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityResponseError instance
   */
  build(): CoverageEligibilityResponseError {
    return new CoverageEligibilityResponseError(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityResponseError instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityResponseError> {
    const coverageEligibilityResponseError = this.build();
    await coverageEligibilityResponseError.validateOrThrow();
    return coverageEligibilityResponseError;
  }
}
