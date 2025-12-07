import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityRequestInsurance } from '../../models/backbones/CoverageEligibilityRequestInsurance.js';
import type {
  ICoverageEligibilityRequestInsurance,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CoverageEligibilityRequestInsuranceBuilder - Fluent builder for CoverageEligibilityRequestInsurance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityRequestInsurance = new CoverageEligibilityRequestInsuranceBuilder()
 *   .setFocal(value)
 *   .build();
 */
export class CoverageEligibilityRequestInsuranceBuilder extends BackboneElementBuilder<CoverageEligibilityRequestInsurance, ICoverageEligibilityRequestInsurance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set focal
   * Applicable coverage
   */
  setFocal(focal: boolean): this {
    this.data.focal = focal;
    return this;
  }

  /**
   * Set coverage
   * Insurance information
   */
  setCoverage(coverage: IReference<'Coverage'>): this {
    this.data.coverage = coverage;
    return this;
  }

  /**
   * Set businessArrangement
   * Additional provider contract number
   */
  setBusinessArrangement(businessArrangement: string): this {
    this.data.businessArrangement = businessArrangement;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityRequestInsurance instance
   */
  build(): CoverageEligibilityRequestInsurance {
    return new CoverageEligibilityRequestInsurance(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityRequestInsurance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityRequestInsurance> {
    const coverageEligibilityRequestInsurance = this.build();
    await coverageEligibilityRequestInsurance.validateOrThrow();
    return coverageEligibilityRequestInsurance;
  }
}
