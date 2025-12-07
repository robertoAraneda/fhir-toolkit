import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConsentVerification } from '../../models/backbones/ConsentVerification.js';
import type {
  ICodeableConcept,
  IConsentVerification,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ConsentVerificationBuilder - Fluent builder for ConsentVerification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const consentVerification = new ConsentVerificationBuilder()
 *   .setVerified(value)
 *   .addVerificationDate({ ... })
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
   * Set verificationType
   * Business case of verification
   */
  setVerificationType(verificationType: ICodeableConcept): this {
    this.data.verificationType = verificationType;
    return this;
  }

  /**
   * Set verifiedBy
   * Person conducting verification
   */
  setVerifiedBy(verifiedBy: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.verifiedBy = verifiedBy;
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

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add verificationDate
   * When consent verified
   */
  addVerificationDate(verificationDate: string): this {
    return this.addToArray('verificationDate', verificationDate);
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
