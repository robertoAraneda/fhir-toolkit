import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseInsurance } from '../../models/backbones/ClaimResponseInsurance.js';
import type {
  IClaimResponseInsurance,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ClaimResponseInsuranceBuilder - Fluent builder for ClaimResponseInsurance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseInsurance = new ClaimResponseInsuranceBuilder()
 *   .setSequence(value)
 *   .build();
 */
export class ClaimResponseInsuranceBuilder extends BackboneElementBuilder<ClaimResponseInsurance, IClaimResponseInsurance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Insurance instance identifier
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

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

  /**
   * Set businessArrangement
   * Additional provider contract number
   */
  setBusinessArrangement(businessArrangement: string): this {
    this.data.businessArrangement = businessArrangement;
    return this;
  }

  /**
   * Set claimResponse
   * Adjudication results
   */
  setClaimResponse(claimResponse: IReference<'ClaimResponse'>): this {
    this.data.claimResponse = claimResponse;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponseInsurance instance
   */
  build(): ClaimResponseInsurance {
    return new ClaimResponseInsurance(this.data);
  }

  /**
   * Build and validate the ClaimResponseInsurance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseInsurance> {
    const claimResponseInsurance = this.build();
    await claimResponseInsurance.validateOrThrow();
    return claimResponseInsurance;
  }
}
