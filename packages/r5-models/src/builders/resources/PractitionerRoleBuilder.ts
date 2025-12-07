import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { PractitionerRole } from '../../models/resources/PractitionerRole.js';
import type {
  IAvailability,
  ICodeableConcept,
  IExtendedContactDetail,
  IIdentifier,
  IPeriod,
  IPractitionerRole,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PractitionerRoleBuilder - Fluent builder for PractitionerRole resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const practitionerRole = new PractitionerRoleBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PractitionerRoleBuilder extends DomainResourceBuilder<PractitionerRole, IPractitionerRole> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this practitioner role record is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set period
   * The period during which the practitioner is authorized to perform in these role(s)
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set practitioner
   * Practitioner that provides services for the organization
   */
  setPractitioner(practitioner: IReference<'Practitioner'>): this {
    this.data.practitioner = practitioner;
    return this;
  }

  /**
   * Set organization
   * Organization where the roles are available
   */
  setOrganization(organization: IReference<'Organization'>): this {
    this.data.organization = organization;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifiers for a role/location
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add code
   * Roles which this practitioner may perform
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  /**
   * Add specialty
   * Specific specialty of the practitioner
   */
  addSpecialty(specialty: ICodeableConcept): this {
    return this.addToArray('specialty', specialty);
  }

  /**
   * Add location
   * Location(s) where the practitioner provides care
   */
  addLocation(location: IReference<'Location'>): this {
    return this.addToArray('location', location);
  }

  /**
   * Add healthcareService
   * Healthcare services provided for this role's Organization/Location(s)
   */
  addHealthcareService(healthcareService: IReference<'HealthcareService'>): this {
    return this.addToArray('healthcareService', healthcareService);
  }

  /**
   * Add contact
   * Official contact details relating to this PractitionerRole
   */
  addContact(contact: IExtendedContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add characteristic
   * Collection of characteristics (attributes)
   */
  addCharacteristic(characteristic: ICodeableConcept): this {
    return this.addToArray('characteristic', characteristic);
  }

  /**
   * Add communication
   * A language the practitioner (in this role) can use in patient communication
   */
  addCommunication(communication: ICodeableConcept): this {
    return this.addToArray('communication', communication);
  }

  /**
   * Add availability
   * Times the Practitioner is available at this location and/or healthcare service (including exceptions)
   */
  addAvailability(availability: IAvailability): this {
    return this.addToArray('availability', availability);
  }

  /**
   * Add endpoint
   * Endpoints for interacting with the practitioner in this role
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PractitionerRole instance
   */
  build(): PractitionerRole {
    return new PractitionerRole(this.data);
  }

  /**
   * Build and validate the PractitionerRole instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PractitionerRole> {
    const practitionerRole = this.build();
    await practitionerRole.validateOrThrow();
    return practitionerRole;
  }
}
