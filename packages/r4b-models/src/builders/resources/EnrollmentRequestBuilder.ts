import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { EnrollmentRequest } from '../../models/resources/EnrollmentRequest.js';
import type {
  FinancialResourceStatusType,
  IEnrollmentRequest,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * EnrollmentRequestBuilder - Fluent builder for EnrollmentRequest resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const enrollmentRequest = new EnrollmentRequestBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EnrollmentRequestBuilder extends DomainResourceBuilder<EnrollmentRequest, IEnrollmentRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | cancelled | draft | entered-in-error
   */
  setStatus(status: FinancialResourceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set created
   * Creation date
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set insurer
   * Target
   */
  setInsurer(insurer: IReference<'Organization'>): this {
    this.data.insurer = insurer;
    return this;
  }

  /**
   * Set provider
   * Responsible practitioner
   */
  setProvider(provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.provider = provider;
    return this;
  }

  /**
   * Set candidate
   * The subject to be enrolled
   */
  setCandidate(candidate: IReference<'Patient'>): this {
    this.data.candidate = candidate;
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
   * Add identifier
   * Business Identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EnrollmentRequest instance
   */
  build(): EnrollmentRequest {
    return new EnrollmentRequest(this.data);
  }

  /**
   * Build and validate the EnrollmentRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EnrollmentRequest> {
    const enrollmentRequest = this.build();
    await enrollmentRequest.validateOrThrow();
    return enrollmentRequest;
  }
}
