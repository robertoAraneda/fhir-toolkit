import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { HealthcareService } from '../../models/resources/HealthcareService.js';
import type {
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHealthcareService,
  IHealthcareServiceAvailableTime,
  IHealthcareServiceEligibility,
  IHealthcareServiceNotAvailable,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * HealthcareServiceBuilder - Fluent builder for HealthcareService resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const healthcareService = new HealthcareServiceBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class HealthcareServiceBuilder extends DomainResourceBuilder<HealthcareService, IHealthcareService> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this HealthcareService record is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set providedBy
   * Organization that provides this service
   */
  setProvidedBy(providedBy: IReference<'Organization'>): this {
    this.data.providedBy = providedBy;
    return this;
  }

  /**
   * Set name
   * Description of service as presented to a consumer while searching
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set comment
   * Additional description and/or any specific issues not covered elsewhere
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  /**
   * Set extraDetails
   * Extra details about the service that can't be placed in the other fields
   */
  setExtraDetails(extraDetails: string): this {
    this.data.extraDetails = extraDetails;
    return this;
  }

  /**
   * Set photo
   * Facilitates quick identification of the service
   */
  setPhoto(photo: IAttachment): this {
    this.data.photo = photo;
    return this;
  }

  /**
   * Set appointmentRequired
   * If an appointment is required for access to this service
   */
  setAppointmentRequired(appointmentRequired: boolean): this {
    this.data.appointmentRequired = appointmentRequired;
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
   * External identifiers for this item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * Broad category of service being performed or delivered
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add type
   * Type of service that may be delivered or performed
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add specialty
   * Specialties handled by the HealthcareService
   */
  addSpecialty(specialty: ICodeableConcept): this {
    return this.addToArray('specialty', specialty);
  }

  /**
   * Add location
   * Location(s) where service may be provided
   */
  addLocation(location: IReference<'Location'>): this {
    return this.addToArray('location', location);
  }

  /**
   * Add telecom
   * Contacts related to the healthcare service
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  /**
   * Add coverageArea
   * Location(s) service is intended for/available to
   */
  addCoverageArea(coverageArea: IReference<'Location'>): this {
    return this.addToArray('coverageArea', coverageArea);
  }

  /**
   * Add serviceProvisionCode
   * Conditions under which service is available/offered
   */
  addServiceProvisionCode(serviceProvisionCode: ICodeableConcept): this {
    return this.addToArray('serviceProvisionCode', serviceProvisionCode);
  }

  /**
   * Add eligibility
   * Specific eligibility requirements required to use the service
   */
  addEligibility(eligibility: IHealthcareServiceEligibility): this {
    return this.addToArray('eligibility', eligibility);
  }

  /**
   * Add program
   * Programs that this service is applicable to
   */
  addProgram(program: ICodeableConcept): this {
    return this.addToArray('program', program);
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
   * The language that this service is offered in
   */
  addCommunication(communication: ICodeableConcept): this {
    return this.addToArray('communication', communication);
  }

  /**
   * Add referralMethod
   * Ways that the service accepts referrals
   */
  addReferralMethod(referralMethod: ICodeableConcept): this {
    return this.addToArray('referralMethod', referralMethod);
  }

  /**
   * Add availableTime
   * Times the Service Site is available
   */
  addAvailableTime(availableTime: IHealthcareServiceAvailableTime): this {
    return this.addToArray('availableTime', availableTime);
  }

  /**
   * Add notAvailable
   * Not available during this time due to provided reason
   */
  addNotAvailable(notAvailable: IHealthcareServiceNotAvailable): this {
    return this.addToArray('notAvailable', notAvailable);
  }

  /**
   * Add endpoint
   * Technical endpoints providing access to electronic services operated for the healthcare service
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the HealthcareService instance
   */
  build(): HealthcareService {
    return new HealthcareService(this.data);
  }

  /**
   * Build and validate the HealthcareService instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<HealthcareService> {
    const healthcareService = this.build();
    await healthcareService.validateOrThrow();
    return healthcareService;
  }
}
