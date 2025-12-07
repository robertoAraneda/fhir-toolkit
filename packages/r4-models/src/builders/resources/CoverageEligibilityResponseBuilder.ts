import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CoverageEligibilityResponse } from '../../models/resources/CoverageEligibilityResponse.js';
import type {
  ClaimProcessingType,
  EligibilityResponsePurposeType,
  FinancialResourceStatusType,
  ICodeableConcept,
  ICoverageEligibilityResponse,
  ICoverageEligibilityResponseError,
  ICoverageEligibilityResponseInsurance,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * CoverageEligibilityResponseBuilder - Fluent builder for CoverageEligibilityResponse resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityResponse = new CoverageEligibilityResponseBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CoverageEligibilityResponseBuilder extends DomainResourceBuilder<CoverageEligibilityResponse, ICoverageEligibilityResponse> {
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
   * Set patient
   * Intended recipient of products and services
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set created
   * Response creation date
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set requestor
   * Party responsible for the request
   */
  setRequestor(requestor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.requestor = requestor;
    return this;
  }

  /**
   * Set request
   * Eligibility request reference
   */
  setRequest(request: IReference<'CoverageEligibilityRequest'>): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set outcome
   * queued | complete | error | partial
   */
  setOutcome(outcome: ClaimProcessingType): this {
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
   * Set insurer
   * Coverage issuer
   */
  setInsurer(insurer: IReference<'Organization'>): this {
    this.data.insurer = insurer;
    return this;
  }

  /**
   * Set preAuthRef
   * Preauthorization reference
   */
  setPreAuthRef(preAuthRef: string): this {
    this.data.preAuthRef = preAuthRef;
    return this;
  }

  /**
   * Set form
   * Printed form identifier
   */
  setForm(form: ICodeableConcept): this {
    this.data.form = form;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set serviced choice type
   * @param type - 'Date' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setServiced('Date', value)
   */
  setServiced<T extends 'Date' | 'Period'>(
    type: T,
    value: string
  ): this {
    const key = `serviced${type}` as keyof ICoverageEligibilityResponse;
    const otherKeys: (keyof ICoverageEligibilityResponse)[] = [];
    if (type !== 'Date') {
      otherKeys.push('servicedDate' as keyof ICoverageEligibilityResponse);
      otherKeys.push('_servicedDate' as keyof ICoverageEligibilityResponse);
    }
    if (type !== 'Period') {
      otherKeys.push('servicedPeriod' as keyof ICoverageEligibilityResponse);
      otherKeys.push('_servicedPeriod' as keyof ICoverageEligibilityResponse);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for coverage eligiblity request
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add purpose
   * auth-requirements | benefits | discovery | validation
   */
  addPurpose(purpose: EligibilityResponsePurposeType): this {
    return this.addToArray('purpose', purpose);
  }

  /**
   * Add insurance
   * Patient insurance information
   */
  addInsurance(insurance: ICoverageEligibilityResponseInsurance): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add error
   * Processing errors
   */
  addError(error: ICoverageEligibilityResponseError): this {
    return this.addToArray('error', error);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityResponse instance
   */
  build(): CoverageEligibilityResponse {
    return new CoverageEligibilityResponse(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityResponse> {
    const coverageEligibilityResponse = this.build();
    await coverageEligibilityResponse.validateOrThrow();
    return coverageEligibilityResponse;
  }
}
