import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConsentVerification } from '../../models/backbones/ConsentVerification.js';
import type {
  IConsentVerification,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ConsentVerificationBuilder - Fluent builder for ConsentVerification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const consentVerification = new ConsentVerificationBuilder()
 *   .setVerified(value)
 *   .build();
 */
export class ConsentVerificationBuilder extends BackboneElementBuilder<ConsentVerification, IConsentVerification> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set verified
   * Has been verified
   */
  setVerified(verified: boolean): this {
    this.data.verified = verified;
    return this;
  }

  /**
   * Set verifiedWith
   * Person who verified
   */
  setVerifiedWith(verifiedWith: IReference<'Patient' | 'RelatedPerson'>): this {
    this.data.verifiedWith = verifiedWith;
    return this;
  }

  /**
   * Set verificationDate
   * When consent verified
   */
  setVerificationDate(verificationDate: string): this {
    this.data.verificationDate = verificationDate;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConsentVerification instance
   */
  build(): ConsentVerification {
    return new ConsentVerification(this.data);
  }

  /**
   * Build and validate the ConsentVerification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConsentVerification> {
    const consentVerification = this.build();
    await consentVerification.validateOrThrow();
    return consentVerification;
  }
}
