import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { VerificationResultAttestation } from '../../models/backbones/VerificationResultAttestation.js';
import type {
  ICodeableConcept,
  IReference,
  ISignature,
  IVerificationResultAttestation,
} from '@fhir-toolkit/r4-types';

/**
 * VerificationResultAttestationBuilder - Fluent builder for VerificationResultAttestation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const verificationResultAttestation = new VerificationResultAttestationBuilder()
 *   .setWho(value)
 *   .build();
 */
export class VerificationResultAttestationBuilder extends BackboneElementBuilder<VerificationResultAttestation, IVerificationResultAttestation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set who
   * The individual or organization attesting to information
   */
  setWho(who: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.who = who;
    return this;
  }

  /**
   * Set onBehalfOf
   * When the who is asserting on behalf of another (organization or individual)
   */
  setOnBehalfOf(onBehalfOf: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.onBehalfOf = onBehalfOf;
    return this;
  }

  /**
   * Set communicationMethod
   * The method by which attested information was submitted/retrieved
   */
  setCommunicationMethod(communicationMethod: ICodeableConcept): this {
    this.data.communicationMethod = communicationMethod;
    return this;
  }

  /**
   * Set date
   * The date the information was attested to
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set sourceIdentityCertificate
   * A digital identity certificate associated with the attestation source
   */
  setSourceIdentityCertificate(sourceIdentityCertificate: string): this {
    this.data.sourceIdentityCertificate = sourceIdentityCertificate;
    return this;
  }

  /**
   * Set proxyIdentityCertificate
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source
   */
  setProxyIdentityCertificate(proxyIdentityCertificate: string): this {
    this.data.proxyIdentityCertificate = proxyIdentityCertificate;
    return this;
  }

  /**
   * Set proxySignature
   * Proxy signature
   */
  setProxySignature(proxySignature: ISignature): this {
    this.data.proxySignature = proxySignature;
    return this;
  }

  /**
   * Set sourceSignature
   * Attester signature
   */
  setSourceSignature(sourceSignature: ISignature): this {
    this.data.sourceSignature = sourceSignature;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the VerificationResultAttestation instance
   */
  build(): VerificationResultAttestation {
    return new VerificationResultAttestation(this.data);
  }

  /**
   * Build and validate the VerificationResultAttestation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<VerificationResultAttestation> {
    const verificationResultAttestation = this.build();
    await verificationResultAttestation.validateOrThrow();
    return verificationResultAttestation;
  }
}
