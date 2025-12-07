import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Organization } from '../../models/resources/Organization.js';
import type {
  ICodeableConcept,
  IExtendedContactDetail,
  IIdentifier,
  IOrganization,
  IOrganizationQualification,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * OrganizationBuilder - Fluent builder for Organization resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const organization = new OrganizationBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class OrganizationBuilder extends DomainResourceBuilder<Organization, IOrganization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether the organization's record is still in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set name
   * Name used for the organization
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set partOf
   * The organization of which this organization forms a part
   */
  setPartOf(partOf: IReference<'Organization'>): this {
    this.data.partOf = partOf;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifies this organization  across multiple systems
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add type
   * Kind of organization
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add alias
   * A list of alternate names that the organization is known as, or was known as in the past
   */
  addAlias(alia: string): this {
    return this.addToArray('alias', alia);
  }

  /**
   * Add contact
   * Official contact details for the Organization
   */
  addContact(contact: IExtendedContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add endpoint
   * Technical endpoints providing access to services operated for the organization
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  /**
   * Add qualification
   * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care
   */
  addQualification(qualification: IOrganizationQualification): this {
    return this.addToArray('qualification', qualification);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Organization instance
   */
  build(): Organization {
    return new Organization(this.data);
  }

  /**
   * Build and validate the Organization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Organization> {
    const organization = this.build();
    await organization.validateOrThrow();
    return organization;
  }
}
