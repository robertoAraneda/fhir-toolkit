import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { InsurancePlan } from '../../models/resources/InsurancePlan.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IInsurancePlan,
  IInsurancePlanContact,
  IInsurancePlanCoverage,
  IInsurancePlanPlan,
  IPeriod,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * InsurancePlanBuilder - Fluent builder for InsurancePlan resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlan = new InsurancePlanBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class InsurancePlanBuilder extends DomainResourceBuilder<InsurancePlan, IInsurancePlan> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set name
   * Official name
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set period
   * When the product is available
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set ownedBy
   * Plan issuer
   */
  setOwnedBy(ownedBy: IReference<'Organization'>): this {
    this.data.ownedBy = ownedBy;
    return this;
  }

  /**
   * Set administeredBy
   * Product administrator
   */
  setAdministeredBy(administeredBy: IReference<'Organization'>): this {
    this.data.administeredBy = administeredBy;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for Product
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add type
   * Kind of product
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add alias
   * Alternate names
   */
  addAlias(alia: string): this {
    return this.addToArray('alias', alia);
  }

  /**
   * Add coverageArea
   * Where product applies
   */
  addCoverageArea(coverageArea: IReference<'Location'>): this {
    return this.addToArray('coverageArea', coverageArea);
  }

  /**
   * Add contact
   * Contact for the product
   */
  addContact(contact: IInsurancePlanContact): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add endpoint
   * Technical endpoint
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  /**
   * Add network
   * What networks are Included
   */
  addNetwork(network: IReference<'Organization'>): this {
    return this.addToArray('network', network);
  }

  /**
   * Add coverage
   * Coverage details
   */
  addCoverage(coverage: IInsurancePlanCoverage): this {
    return this.addToArray('coverage', coverage);
  }

  /**
   * Add plan
   * Plan details
   */
  addPlan(plan: IInsurancePlanPlan): this {
    return this.addToArray('plan', plan);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InsurancePlan instance
   */
  build(): InsurancePlan {
    return new InsurancePlan(this.data);
  }

  /**
   * Build and validate the InsurancePlan instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlan> {
    const insurancePlan = this.build();
    await insurancePlan.validateOrThrow();
    return insurancePlan;
  }
}
