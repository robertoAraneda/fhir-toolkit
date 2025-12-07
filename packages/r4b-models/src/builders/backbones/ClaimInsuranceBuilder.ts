import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimInsurance } from '../../models/backbones/ClaimInsurance.js';
import type {
  IClaimInsurance,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ClaimInsuranceBuilder - Fluent builder for ClaimInsurance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimInsurance = new ClaimInsuranceBuilder()
 *   .setSequence(value)
 *   .addPreAuthRef({ ... })
 *   .build();
 */
export class ClaimInsuranceBuilder extends BackboneElementBuilder<ClaimInsurance, IClaimInsurance> {
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
   * Set identifier
   * Pre-assigned Claim number
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
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
   * Build the ClaimInsurance instance
   */
  build(): ClaimInsurance {
    return new ClaimInsurance(this.data);
  }

  /**
   * Build and validate the ClaimInsurance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimInsurance> {
    const claimInsurance = this.build();
    await claimInsurance.validateOrThrow();
    return claimInsurance;
  }
}
