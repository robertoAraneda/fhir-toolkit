import { ElementBuilder } from '../base/ElementBuilder.js';
import { Signature } from '../../models/datatypes/Signature.js';
import type {
  ICoding,
  IReference,
  ISignature,
} from '@fhir-toolkit/r5-types';

/**
 * SignatureBuilder - Fluent builder for Signature datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const signature = new SignatureBuilder()
 *   .setWhen(value)
 *   .addType({ ... })
 *   .build();
 */
export class SignatureBuilder extends ElementBuilder<Signature, ISignature> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set when
   * When the signature was created
   */
  setWhen(when: string): this {
    this.data.when = when;
    return this;
  }

  /**
   * Set who
   * Who signed
   */
  setWho(who: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>): this {
    this.data.who = who;
    return this;
  }

  /**
   * Set onBehalfOf
   * The party represented
   */
  setOnBehalfOf(onBehalfOf: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>): this {
    this.data.onBehalfOf = onBehalfOf;
    return this;
  }

  /**
   * Set targetFormat
   * The technical format of the signed resources
   */
  setTargetFormat(targetFormat: string): this {
    this.data.targetFormat = targetFormat;
    return this;
  }

  /**
   * Set sigFormat
   * The technical format of the signature
   */
  setSigFormat(sigFormat: string): this {
    this.data.sigFormat = sigFormat;
    return this;
  }

  /**
   * Set data
   * The actual signature content (XML DigSig. JWS, picture, etc.)
   */
  setData(data: string): this {
    this.data.data = data;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Indication of the reason the entity signed the object(s)
   */
  addType(type: ICoding): this {
    return this.addToArray('type', type);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Signature instance
   */
  build(): Signature {
    return new Signature(this.data);
  }

  /**
   * Build and validate the Signature instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Signature> {
    const signature = this.build();
    await signature.validateOrThrow();
    return signature;
  }
}
