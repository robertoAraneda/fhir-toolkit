import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanCoverage } from '../../models/backbones/InsurancePlanCoverage.js';
import type {
  ICodeableConcept,
  IInsurancePlanCoverage,
  IInsurancePlanCoverageBenefit,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * InsurancePlanCoverageBuilder - Fluent builder for InsurancePlanCoverage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanCoverage = new InsurancePlanCoverageBuilder()
 *   .setType(value)
 *   .addNetwork({ ... })
 *   .build();
 */
export class InsurancePlanCoverageBuilder extends BackboneElementBuilder<InsurancePlanCoverage, IInsurancePlanCoverage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of coverage
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add network
   * What networks provide coverage
   */
  addNetwork(network: IReference<'Organization'>): this {
    return this.addToArray('network', network);
  }

  /**
   * Add benefit
   * List of benefits
   */
  addBenefit(benefit: IInsurancePlanCoverageBenefit): this {
    return this.addToArray('benefit', benefit);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlanCoverage instance
   */
  build(): InsurancePlanCoverage {
    return new InsurancePlanCoverage(this.data);
  }

  /**
   * Build and validate the InsurancePlanCoverage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanCoverage> {
    const insurancePlanCoverage = this.build();
    await insurancePlanCoverage.validateOrThrow();
    return insurancePlanCoverage;
  }
}
