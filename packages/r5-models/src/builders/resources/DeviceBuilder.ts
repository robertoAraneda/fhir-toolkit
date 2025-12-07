import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Device } from '../../models/resources/Device.js';
import type {
  FHIRDeviceStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IContactPoint,
  ICount,
  IDevice,
  IDeviceConformsTo,
  IDeviceName,
  IDeviceProperty,
  IDeviceUdiCarrier,
  IDeviceVersion,
  IDuration,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceBuilder - Fluent builder for Device resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const device = new DeviceBuilder()
 *   .setId('123')
 *   .setDisplayName(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceBuilder extends DomainResourceBuilder<Device, IDevice> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set displayName
   * The name used to display by default when the device is referenced
   */
  setDisplayName(displayName: string): this {
    this.data.displayName = displayName;
    return this;
  }

  /**
   * Set definition
   * The reference to the definition for the device
   */
  setDefinition(definition: ICodeableReference): this {
    this.data.definition = definition;
    return this;
  }

  /**
   * Set status
   * active | inactive | entered-in-error
   */
  setStatus(status: FHIRDeviceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set availabilityStatus
   * lost | damaged | destroyed | available
   */
  setAvailabilityStatus(availabilityStatus: ICodeableConcept): this {
    this.data.availabilityStatus = availabilityStatus;
    return this;
  }

  /**
   * Set biologicalSourceEvent
   * An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled
   */
  setBiologicalSourceEvent(biologicalSourceEvent: IIdentifier): this {
    this.data.biologicalSourceEvent = biologicalSourceEvent;
    return this;
  }

  /**
   * Set manufacturer
   * Name of device manufacturer
   */
  setManufacturer(manufacturer: string): this {
    this.data.manufacturer = manufacturer;
    return this;
  }

  /**
   * Set manufactureDate
   * Date when the device was made
   */
  setManufactureDate(manufactureDate: string): this {
    this.data.manufactureDate = manufactureDate;
    return this;
  }

  /**
   * Set expirationDate
   * Date and time of expiry of this device (if applicable)
   */
  setExpirationDate(expirationDate: string): this {
    this.data.expirationDate = expirationDate;
    return this;
  }

  /**
   * Set lotNumber
   * Lot number of manufacture
   */
  setLotNumber(lotNumber: string): this {
    this.data.lotNumber = lotNumber;
    return this;
  }

  /**
   * Set serialNumber
   * Serial number assigned by the manufacturer
   */
  setSerialNumber(serialNumber: string): this {
    this.data.serialNumber = serialNumber;
    return this;
  }

  /**
   * Set modelNumber
   * The manufacturer's model number for the device
   */
  setModelNumber(modelNumber: string): this {
    this.data.modelNumber = modelNumber;
    return this;
  }

  /**
   * Set partNumber
   * The part number or catalog number of the device
   */
  setPartNumber(partNumber: string): this {
    this.data.partNumber = partNumber;
    return this;
  }

  /**
   * Set mode
   * The designated condition for performing a task
   */
  setMode(mode: ICodeableConcept): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set cycle
   * The series of occurrences that repeats during the operation of the device
   */
  setCycle(cycle: ICount): this {
    this.data.cycle = cycle;
    return this;
  }

  /**
   * Set duration
   * A measurement of time during the device's operation (e.g., days, hours, mins, etc.)
   */
  setDuration(duration: IDuration): this {
    this.data.duration = duration;
    return this;
  }

  /**
   * Set owner
   * Organization responsible for device
   */
  setOwner(owner: IReference<'Organization'>): this {
    this.data.owner = owner;
    return this;
  }

  /**
   * Set location
   * Where the device is found
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set url
   * Network address to contact device
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set parent
   * The higher level or encompassing device that this device is a logical part of
   */
  setParent(parent: IReference<'Device'>): this {
    this.data.parent = parent;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Instance identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add udiCarrier
   * Unique Device Identifier (UDI) Barcode string
   */
  addUdiCarrier(udiCarrier: IDeviceUdiCarrier): this {
    return this.addToArray('udiCarrier', udiCarrier);
  }

  /**
   * Add name
   * The name or names of the device as known to the manufacturer and/or patient
   */
  addName(name: IDeviceName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add category
   * Indicates a high-level grouping of the device
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add type
   * The kind or type of device
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add version
   * The actual design of the device or software version running on the device
   */
  addVersion(version: IDeviceVersion): this {
    return this.addToArray('version', version);
  }

  /**
   * Add conformsTo
   * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
   */
  addConformsTo(conformsTo: IDeviceConformsTo): this {
    return this.addToArray('conformsTo', conformsTo);
  }

  /**
   * Add property
   * Inherent, essentially fixed, characteristics of the device.  e.g., time properties, size, material, etc.
   */
  addProperty(property: IDeviceProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add contact
   * Details for human/organization for support
   */
  addContact(contact: IContactPoint): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add endpoint
   * Technical endpoints providing access to electronic services provided by the device
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  /**
   * Add gateway
   * Linked device acting as a communication/data collector, translator or controller
   */
  addGateway(gateway: ICodeableReference): this {
    return this.addToArray('gateway', gateway);
  }

  /**
   * Add note
   * Device notes and comments
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add safety
   * Safety Characteristics of Device
   */
  addSafety(safety: ICodeableConcept): this {
    return this.addToArray('safety', safety);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Device instance
   */
  build(): Device {
    return new Device(this.data);
  }

  /**
   * Build and validate the Device instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Device> {
    const device = this.build();
    await device.validateOrThrow();
    return device;
  }
}
