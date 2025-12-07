import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CoverageEligibilityRequest } from '../../models/resources/CoverageEligibilityRequest.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  EligibilityRequestPurposeType,
  FinancialResourceStatusType,
  ICodeableConcept,
  ICoverageEligibilityRequest,
  ICoverageEligibilityRequestInsurance,
  ICoverageEligibilityRequestItem,
  ICoverageEligibilityRequestSupportingInfo,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CoverageEligibilityRequestBuilder - Fluent builder for CoverageEligibilityRequest resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityRequest = new CoverageEligibilityRequestBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CoverageEligibilityRequestBuilder extends DomainResourceBuilder<CoverageEligibilityRequest, ICoverageEligibilityRequest> {
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
   * Set priority
   * Desired processing priority
   */
  setPriority(priority: ICodeableConcept): this {
    this.data.priority = priority;
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
   * Creation date
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set enterer
   * Author
   */
  setEnterer(enterer: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.enterer = enterer;
    return this;
  }

  /**
   * Set provider
   * Party responsible for the request
   */
  setProvider(provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.provider = provider;
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
   * Set facility
   * Servicing facility
   */
  setFacility(facility: IReference<'Location'>): this {
    this.data.facility = facility;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set serviced choice type (servicedDate, servicedPeriod)
   * @param type - 'Date' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setServiced('Date', value)
   */
  setServiced<T extends 'Date' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `serviced${type}` as keyof ICoverageEligibilityRequest;
    const otherKeys: (keyof ICoverageEligibilityRequest)[] = [];
    if (type !== 'Date') {
      otherKeys.push('servicedDate' as keyof ICoverageEligibilityRequest);
      otherKeys.push('_servicedDate' as keyof ICoverageEligibilityRequest);
    }
    if (type !== 'Period') {
      otherKeys.push('servicedPeriod' as keyof ICoverageEligibilityRequest);
      otherKeys.push('_servicedPeriod' as keyof ICoverageEligibilityRequest);
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
  addPurpose(purpose: EligibilityRequestPurposeType): this {
    return this.addToArray('purpose', purpose);
  }

  /**
   * Add supportingInfo
   * Supporting information
   */
  addSupportingInfo(supportingInfo: ICoverageEligibilityRequestSupportingInfo): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add insurance
   * Patient insurance information
   */
  addInsurance(insurance: ICoverageEligibilityRequestInsurance): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add item
   * Item to be evaluated for eligibiity
   */
  addItem(item: ICoverageEligibilityRequestItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityRequest instance
   */
  build(): CoverageEligibilityRequest {
    return new CoverageEligibilityRequest(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityRequest> {
    const coverageEligibilityRequest = this.build();
    await coverageEligibilityRequest.validateOrThrow();
    return coverageEligibilityRequest;
  }
}
