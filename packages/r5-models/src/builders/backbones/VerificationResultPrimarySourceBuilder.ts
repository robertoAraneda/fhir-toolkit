import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { VerificationResultPrimarySource } from '../../models/backbones/VerificationResultPrimarySource.js';
import type {
  ICodeableConcept,
  IReference,
  IVerificationResultPrimarySource,
} from '@fhir-toolkit/r5-types';

/**
 * VerificationResultPrimarySourceBuilder - Fluent builder for VerificationResultPrimarySource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const verificationResultPrimarySource = new VerificationResultPrimarySourceBuilder()
 *   .setWho(value)
 *   .addType({ ... })
 *   .build();
 */
export class VerificationResultPrimarySourceBuilder extends BackboneElementBuilder<VerificationResultPrimarySource, IVerificationResultPrimarySource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set who
   * Reference to the primary source
   */
  setWho(who: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.who = who;
    return this;
  }

  /**
   * Set validationStatus
   * successful | failed | unknown
   */
  setValidationStatus(validationStatus: ICodeableConcept): this {
    this.data.validationStatus = validationStatus;
    return this;
  }

  /**
   * Set validationDate
   * When the target was validated against the primary source
   */
  setValidationDate(validationDate: string): this {
    this.data.validationDate = validationDate;
    return this;
  }

  /**
   * Set canPushUpdates
   * yes | no | undetermined
   */
  setCanPushUpdates(canPushUpdates: ICodeableConcept): this {
    this.data.canPushUpdates = canPushUpdates;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source)
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add communicationMethod
   * Method for exchanging information with the primary source
   */
  addCommunicationMethod(communicationMethod: ICodeableConcept): this {
    return this.addToArray('communicationMethod', communicationMethod);
  }

  /**
   * Add pushTypeAvailable
   * specific | any | source
   */
  addPushTypeAvailable(pushTypeAvailable: ICodeableConcept): this {
    return this.addToArray('pushTypeAvailable', pushTypeAvailable);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the VerificationResultPrimarySource instance
   */
  build(): VerificationResultPrimarySource {
    return new VerificationResultPrimarySource(this.data);
  }

  /**
   * Build and validate the VerificationResultPrimarySource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<VerificationResultPrimarySource> {
    const verificationResultPrimarySource = this.build();
    await verificationResultPrimarySource.validateOrThrow();
    return verificationResultPrimarySource;
  }
}
