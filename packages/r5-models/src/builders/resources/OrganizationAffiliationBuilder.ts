import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { OrganizationAffiliation } from '../../models/resources/OrganizationAffiliation.js';
import type {
  ICodeableConcept,
  IExtendedContactDetail,
  IIdentifier,
  IOrganizationAffiliation,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * OrganizationAffiliationBuilder - Fluent builder for OrganizationAffiliation resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const organizationAffiliation = new OrganizationAffiliationBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class OrganizationAffiliationBuilder extends DomainResourceBuilder<OrganizationAffiliation, IOrganizationAffiliation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this organization affiliation record is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set period
   * The period during which the participatingOrganization is affiliated with the primary organization
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set organization
   * Organization where the role is available
   */
  setOrganization(organization: IReference<'Organization'>): this {
    this.data.organization = organization;
    return this;
  }

  /**
   * Set participatingOrganization
   * Organization that provides/performs the role (e.g. providing services or is a member of)
   */
  setParticipatingOrganization(participatingOrganization: IReference<'Organization'>): this {
    this.data.participatingOrganization = participatingOrganization;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifiers that are specific to this role
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add network
   * The network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined)
   */
  addNetwork(network: IReference<'Organization'>): this {
    return this.addToArray('network', network);
  }

  /**
   * Add code
   * Definition of the role the participatingOrganization plays
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  /**
   * Add specialty
   * Specific specialty of the participatingOrganization in the context of the role
   */
  addSpecialty(specialty: ICodeableConcept): this {
    return this.addToArray('specialty', specialty);
  }

  /**
   * Add location
   * The location(s) at which the role occurs
   */
  addLocation(location: IReference<'Location'>): this {
    return this.addToArray('location', location);
  }

  /**
   * Add healthcareService
   * Healthcare services provided through the role
   */
  addHealthcareService(healthcareService: IReference<'HealthcareService'>): this {
    return this.addToArray('healthcareService', healthcareService);
  }

  /**
   * Add contact
   * Official contact details at the participatingOrganization relevant to this Affiliation
   */
  addContact(contact: IExtendedContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add endpoint
   * Technical endpoints providing access to services operated for this role
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OrganizationAffiliation instance
   */
  build(): OrganizationAffiliation {
    return new OrganizationAffiliation(this.data);
  }

  /**
   * Build and validate the OrganizationAffiliation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OrganizationAffiliation> {
    const organizationAffiliation = this.build();
    await organizationAffiliation.validateOrThrow();
    return organizationAffiliation;
  }
}
