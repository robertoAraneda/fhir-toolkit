import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { VerificationResult } from '../../models/resources/VerificationResult.js';
import type {
  ICodeableConcept,
  IReference,
  ITiming,
  IVerificationResult,
  IVerificationResultAttestation,
  IVerificationResultPrimarySource,
  IVerificationResultValidator,
  StatusType,
} from '@fhir-toolkit/r4-types';

/**
 * VerificationResultBuilder - Fluent builder for VerificationResult resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const verificationResult = new VerificationResultBuilder()
 *   .setId('123')
 *   .setNeed(value)
 *   .addTarget({ ... })
 *   .build();
 */
export class VerificationResultBuilder extends DomainResourceBuilder<VerificationResult, IVerificationResult> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set need
   * none | initial | periodic
   */
  setNeed(need: ICodeableConcept): this {
    this.data.need = need;
    return this;
  }

  /**
   * Set status
   * attested | validated | in-process | req-revalid | val-fail | reval-fail
   */
  setStatus(status: StatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusDate
   * When the validation status was updated
   */
  setStatusDate(statusDate: string): this {
    this.data.statusDate = statusDate;
    return this;
  }

  /**
   * Set validationType
   * nothing | primary | multiple
   */
  setValidationType(validationType: ICodeableConcept): this {
    this.data.validationType = validationType;
    return this;
  }

  /**
   * Set frequency
   * Frequency of revalidation
   */
  setFrequency(frequency: ITiming): this {
    this.data.frequency = frequency;
    return this;
  }

  /**
   * Set lastPerformed
   * The date/time validation was last completed (including failed validations)
   */
  setLastPerformed(lastPerformed: string): this {
    this.data.lastPerformed = lastPerformed;
    return this;
  }

  /**
   * Set nextScheduled
   * The date when target is next validated, if appropriate
   */
  setNextScheduled(nextScheduled: string): this {
    this.data.nextScheduled = nextScheduled;
    return this;
  }

  /**
   * Set failureAction
   * fatal | warn | rec-only | none
   */
  setFailureAction(failureAction: ICodeableConcept): this {
    this.data.failureAction = failureAction;
    return this;
  }

  /**
   * Set attestation
   * Information about the entity attesting to information
   */
  setAttestation(attestation: IVerificationResultAttestation): this {
    this.data.attestation = attestation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add target
   * A resource that was validated
   */
  addTarget(target: IReference<'Resource'>): this {
    return this.addToArray('target', target);
  }

  /**
   * Add targetLocation
   * The fhirpath location(s) within the resource that was validated
   */
  addTargetLocation(targetLocation: string): this {
    return this.addToArray('targetLocation', targetLocation);
  }

  /**
   * Add validationProcess
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context)
   */
  addValidationProcess(validationProcess: ICodeableConcept): this {
    return this.addToArray('validationProcess', validationProcess);
  }

  /**
   * Add primarySource
   * Information about the primary source(s) involved in validation
   */
  addPrimarySource(primarySource: IVerificationResultPrimarySource): this {
    return this.addToArray('primarySource', primarySource);
  }

  /**
   * Add validator
   * Information about the entity validating information
   */
  addValidator(validator: IVerificationResultValidator): this {
    return this.addToArray('validator', validator);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the VerificationResult instance
   */
  build(): VerificationResult {
    return new VerificationResult(this.data);
  }

  /**
   * Build and validate the VerificationResult instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<VerificationResult> {
    const verificationResult = this.build();
    await verificationResult.validateOrThrow();
    return verificationResult;
  }
}
