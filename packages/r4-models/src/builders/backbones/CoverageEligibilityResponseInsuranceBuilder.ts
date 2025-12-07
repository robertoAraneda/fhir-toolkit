import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityResponseInsurance } from '../../models/backbones/CoverageEligibilityResponseInsurance.js';
import type {
  ICoverageEligibilityResponseInsurance,
  ICoverageEligibilityResponseInsuranceItem,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * CoverageEligibilityResponseInsuranceBuilder - Fluent builder for CoverageEligibilityResponseInsurance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityResponseInsurance = new CoverageEligibilityResponseInsuranceBuilder()
 *   .setCoverage(value)
 *   .addItem({ ... })
 *   .build();
 */
export class CoverageEligibilityResponseInsuranceBuilder extends BackboneElementBuilder<CoverageEligibilityResponseInsurance, ICoverageEligibilityResponseInsurance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set coverage
   * Insurance information
   */
  setCoverage(coverage: IReference<'Coverage'>): this {
    this.data.coverage = coverage;
    return this;
  }

  /**
   * Set inforce
   * Coverage inforce indicator
   */
  setInforce(inforce: boolean): this {
    this.data.inforce = inforce;
    return this;
  }

  /**
   * Set benefitPeriod
   * When the benefits are applicable
   */
  setBenefitPeriod(benefitPeriod: IPeriod): this {
    this.data.benefitPeriod = benefitPeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add item
   * Benefits and authorization details
   */
  addItem(item: ICoverageEligibilityResponseInsuranceItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityResponseInsurance instance
   */
  build(): CoverageEligibilityResponseInsurance {
    return new CoverageEligibilityResponseInsurance(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityResponseInsurance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityResponseInsurance> {
    const coverageEligibilityResponseInsurance = this.build();
    await coverageEligibilityResponseInsurance.validateOrThrow();
    return coverageEligibilityResponseInsurance;
  }
}
