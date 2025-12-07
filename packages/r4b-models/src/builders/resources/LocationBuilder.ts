import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Location } from '../../models/resources/Location.js';
import type {
  IAddress,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IIdentifier,
  ILocation,
  ILocationHoursOfOperation,
  ILocationPosition,
  IReference,
  LocationModeType,
  LocationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * LocationBuilder - Fluent builder for Location resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const location = new LocationBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class LocationBuilder extends DomainResourceBuilder<Location, ILocation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | suspended | inactive
   */
  setStatus(status: LocationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set operationalStatus
   * The operational status of the location (typically only for a bed/room)
   */
  setOperationalStatus(operationalStatus: ICoding): this {
    this.data.operationalStatus = operationalStatus;
    return this;
  }

  /**
   * Set name
   * Name of the location as used by humans
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Additional details about the location that could be displayed as further information to identify the location beyond its name
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set mode
   * instance | kind
   */
  setMode(mode: LocationModeType): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set address
   * Physical location
   */
  setAddress(address: IAddress): this {
    this.data.address = address;
    return this;
  }

  /**
   * Set physicalType
   * Physical form of the location
   */
  setPhysicalType(physicalType: ICodeableConcept): this {
    this.data.physicalType = physicalType;
    return this;
  }

  /**
   * Set position
   * The absolute geographic location
   */
  setPosition(position: ILocationPosition): this {
    this.data.position = position;
    return this;
  }

  /**
   * Set managingOrganization
   * Organization responsible for provisioning and upkeep
   */
  setManagingOrganization(managingOrganization: IReference<'Organization'>): this {
    this.data.managingOrganization = managingOrganization;
    return this;
  }

  /**
   * Set partOf
   * Another Location this one is physically a part of
   */
  setPartOf(partOf: IReference<'Location'>): this {
    this.data.partOf = partOf;
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
   * Unique code or number identifying the location to its users
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add alias
   * A list of alternate names that the location is known as, or was known as, in the past
   */
  addAlias(alia: string): this {
    return this.addToArray('alias', alia);
  }

  /**
   * Add type
   * Type of function performed
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add telecom
   * Contact details of the location
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  /**
   * Add hoursOfOperation
   * What days/times during a week is this location usually open
   */
  addHoursOfOperation(hoursOfOperation: ILocationHoursOfOperation): this {
    return this.addToArray('hoursOfOperation', hoursOfOperation);
  }

  /**
   * Add endpoint
   * Technical endpoints providing access to services operated for the location
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Location instance
   */
  build(): Location {
    return new Location(this.data);
  }

  /**
   * Build and validate the Location instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Location> {
    const location = this.build();
    await location.validateOrThrow();
    return location;
  }
}
