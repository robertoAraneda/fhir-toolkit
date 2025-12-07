import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { EnrollmentResponse } from '../../models/resources/EnrollmentResponse.js';
import type {
  FinancialResourceStatusType,
  IEnrollmentResponse,
  IIdentifier,
  IReference,
  RemittanceOutcomeType,
} from '@fhir-toolkit/r4b-types';

/**
 * EnrollmentResponseBuilder - Fluent builder for EnrollmentResponse resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const enrollmentResponse = new EnrollmentResponseBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EnrollmentResponseBuilder extends DomainResourceBuilder<EnrollmentResponse, IEnrollmentResponse> {
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
   * Set request
   * Claim reference
   */
  setRequest(request: IReference<'EnrollmentRequest'>): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set outcome
   * queued | complete | error | partial
   */
  setOutcome(outcome: RemittanceOutcomeType): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set disposition
   * Disposition Message
   */
  setDisposition(disposition: string): this {
    this.data.disposition = disposition;
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
   * Set organization
   * Insurer
   */
  setOrganization(organization: IReference<'Organization'>): this {
    this.data.organization = organization;
    return this;
  }

  /**
   * Set requestProvider
   * Responsible practitioner
   */
  setRequestProvider(requestProvider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.requestProvider = requestProvider;
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
   * Build the EnrollmentResponse instance
   */
  build(): EnrollmentResponse {
    return new EnrollmentResponse(this.data);
  }

  /**
   * Build and validate the EnrollmentResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EnrollmentResponse> {
    const enrollmentResponse = this.build();
    await enrollmentResponse.validateOrThrow();
    return enrollmentResponse;
  }
}
