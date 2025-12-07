import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitInsurance } from '../../models/backbones/ExplanationOfBenefitInsurance.js';
import type {
  IExplanationOfBenefitInsurance,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitInsuranceBuilder - Fluent builder for ExplanationOfBenefitInsurance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitInsurance = new ExplanationOfBenefitInsuranceBuilder()
 *   .setFocal(value)
 *   .addPreAuthRef({ ... })
 *   .build();
 */
export class ExplanationOfBenefitInsuranceBuilder extends BackboneElementBuilder<ExplanationOfBenefitInsurance, IExplanationOfBenefitInsurance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set focal
   * Coverage to be used for adjudication
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

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add preAuthRef
   * Prior authorization reference number
   */
  addPreAuthRef(preAuthRef: string): this {
    return this.addToArray('preAuthRef', preAuthRef);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitInsurance instance
   */
  build(): ExplanationOfBenefitInsurance {
    return new ExplanationOfBenefitInsurance(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitInsurance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitInsurance> {
    const explanationOfBenefitInsurance = this.build();
    await explanationOfBenefitInsurance.validateOrThrow();
    return explanationOfBenefitInsurance;
  }
}
