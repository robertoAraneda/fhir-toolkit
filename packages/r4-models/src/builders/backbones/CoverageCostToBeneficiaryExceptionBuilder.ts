import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageCostToBeneficiaryException } from '../../models/backbones/CoverageCostToBeneficiaryException.js';
import type {
  ICodeableConcept,
  ICoverageCostToBeneficiaryException,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * CoverageCostToBeneficiaryExceptionBuilder - Fluent builder for CoverageCostToBeneficiaryException backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageCostToBeneficiaryException = new CoverageCostToBeneficiaryExceptionBuilder()
 *   .setType(value)
 *   .build();
 */
export class CoverageCostToBeneficiaryExceptionBuilder extends BackboneElementBuilder<CoverageCostToBeneficiaryException, ICoverageCostToBeneficiaryException> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Exception category
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set period
   * The effective period of the exception
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageCostToBeneficiaryException instance
   */
  build(): CoverageCostToBeneficiaryException {
    return new CoverageCostToBeneficiaryException(this.data);
  }

  /**
   * Build and validate the CoverageCostToBeneficiaryException instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageCostToBeneficiaryException> {
    const coverageCostToBeneficiaryException = this.build();
    await coverageCostToBeneficiaryException.validateOrThrow();
    return coverageCostToBeneficiaryException;
  }
}
