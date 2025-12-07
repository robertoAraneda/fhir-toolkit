import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { PractitionerRole } from '../../models/resources/PractitionerRole.js';
import type {
  ICodeableConcept,
  IContactPoint,
  IIdentifier,
  IPeriod,
  IPractitionerRole,
  IPractitionerRoleAvailableTime,
  IPractitionerRoleNotAvailable,
  IReference,
} from '@fhir-toolkit/r4b-types';

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
   * Practitioner that is able to provide the defined services for the organization
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

  /**
   * Set availabilityExceptions
   * Description of availability exceptions
   */
  setAvailabilityExceptions(availabilityExceptions: string): this {
    this.data.availabilityExceptions = availabilityExceptions;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifiers that are specific to a role/location
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
   * The location(s) at which this practitioner provides care
   */
  addLocation(location: IReference<'Location'>): this {
    return this.addToArray('location', location);
  }

  /**
   * Add healthcareService
   * The list of healthcare services that this worker provides for this role's Organization/Location(s)
   */
  addHealthcareService(healthcareService: IReference<'HealthcareService'>): this {
    return this.addToArray('healthcareService', healthcareService);
  }

  /**
   * Add telecom
   * Contact details that are specific to the role/location/service
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  /**
   * Add availableTime
   * Times the Service Site is available
   */
  addAvailableTime(availableTime: IPractitionerRoleAvailableTime): this {
    return this.addToArray('availableTime', availableTime);
  }

  /**
   * Add notAvailable
   * Not available during this time due to provided reason
   */
  addNotAvailable(notAvailable: IPractitionerRoleNotAvailable): this {
    return this.addToArray('notAvailable', notAvailable);
  }

  /**
   * Add endpoint
   * Technical endpoints providing access to services operated for the practitioner with this role
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
