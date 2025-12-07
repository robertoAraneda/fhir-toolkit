import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { VerificationResultValidator } from '../../models/backbones/VerificationResultValidator.js';
import type {
  IReference,
  ISignature,
  IVerificationResultValidator,
} from '@fhir-toolkit/r4b-types';

/**
 * VerificationResultValidatorBuilder - Fluent builder for VerificationResultValidator backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const verificationResultValidator = new VerificationResultValidatorBuilder()
 *   .setOrganization(value)
 *   .build();
 */
export class VerificationResultValidatorBuilder extends BackboneElementBuilder<VerificationResultValidator, IVerificationResultValidator> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set organization
   * Reference to the organization validating information
   */
  setOrganization(organization: IReference<'Organization'>): this {
    this.data.organization = organization;
    return this;
  }

  /**
   * Set identityCertificate
   * A digital identity certificate associated with the validator
   */
  setIdentityCertificate(identityCertificate: string): this {
    this.data.identityCertificate = identityCertificate;
    return this;
  }

  /**
   * Set attestationSignature
   * Validator signature
   */
  setAttestationSignature(attestationSignature: ISignature): this {
    this.data.attestationSignature = attestationSignature;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the VerificationResultValidator instance
   */
  build(): VerificationResultValidator {
    return new VerificationResultValidator(this.data);
  }

  /**
   * Build and validate the VerificationResultValidator instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<VerificationResultValidator> {
    const verificationResultValidator = this.build();
    await verificationResultValidator.validateOrThrow();
    return verificationResultValidator;
  }
}
