import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Device } from '../../models/resources/Device.js';
import type {
  FHIRDeviceStatusType,
  IAnnotation,
  ICodeableConcept,
  IContactPoint,
  IDevice,
  IDeviceDeviceName,
  IDeviceProperty,
  IDeviceSpecialization,
  IDeviceUdiCarrier,
  IDeviceVersion,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

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
 *   .setDefinition(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceBuilder extends DomainResourceBuilder<Device, IDevice> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set definition
   * The reference to the definition for the device
   */
  setDefinition(definition: IReference<'DeviceDefinition'>): this {
    this.data.definition = definition;
    return this;
  }

  /**
   * Set status
   * active | inactive | entered-in-error | unknown
   */
  setStatus(status: FHIRDeviceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set distinctIdentifier
   * The distinct identification string
   */
  setDistinctIdentifier(distinctIdentifier: string): this {
    this.data.distinctIdentifier = distinctIdentifier;
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
   * The model number for the device
   */
  setModelNumber(modelNumber: string): this {
    this.data.modelNumber = modelNumber;
    return this;
  }

  /**
   * Set partNumber
   * The part number of the device
   */
  setPartNumber(partNumber: string): this {
    this.data.partNumber = partNumber;
    return this;
  }

  /**
   * Set type
   * The kind or type of device
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set patient
   * Patient to whom Device is affixed
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
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
   * The parent device
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
   * Add statusReason
   * online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off
   */
  addStatusReason(statusReason: ICodeableConcept): this {
    return this.addToArray('statusReason', statusReason);
  }

  /**
   * Add deviceName
   * The name of the device as given by the manufacturer
   */
  addDeviceName(deviceName: IDeviceDeviceName): this {
    return this.addToArray('deviceName', deviceName);
  }

  /**
   * Add specialization
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
   */
  addSpecialization(specialization: IDeviceSpecialization): this {
    return this.addToArray('specialization', specialization);
  }

  /**
   * Add version
   * The actual design of the device or software version running on the device
   */
  addVersion(version: IDeviceVersion): this {
    return this.addToArray('version', version);
  }

  /**
   * Add property
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
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
