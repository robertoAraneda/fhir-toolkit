import { DomainResource } from '../base/DomainResource.js';
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
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Device */
const DEVICE_PROPERTIES = [
  'identifier',
  'definition',
  'udiCarrier',
  'status',
  '_status',
  'statusReason',
  'distinctIdentifier',
  '_distinctIdentifier',
  'manufacturer',
  '_manufacturer',
  'manufactureDate',
  '_manufactureDate',
  'expirationDate',
  '_expirationDate',
  'lotNumber',
  '_lotNumber',
  'serialNumber',
  '_serialNumber',
  'deviceName',
  'modelNumber',
  '_modelNumber',
  'partNumber',
  '_partNumber',
  'type',
  'specialization',
  'version',
  'property',
  'patient',
  'owner',
  'contact',
  'location',
  'url',
  '_url',
  'note',
  'safety',
  'parent',
] as const;

/**
 * Device - A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 *
 * @see https://hl7.org/fhir/R4/device.html
 *
 * @example
 * const device = new Device({
 *   resourceType: 'Device',
 *   // ... properties
 * });
 */
export class Device extends DomainResource implements IDevice {
  readonly resourceType = 'Device' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Instance identifier */
  identifier?: IIdentifier[];

  /** The reference to the definition for the device */
  definition?: IReference<'DeviceDefinition'>;

  /** Unique Device Identifier (UDI) Barcode string */
  udiCarrier?: IDeviceUdiCarrier[];

  /** active | inactive | entered-in-error | unknown */
  status?: FHIRDeviceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off */
  statusReason?: ICodeableConcept[];

  /** The distinct identification string */
  distinctIdentifier?: string;

  /** Extension for distinctIdentifier */
  _distinctIdentifier?: IElement;

  /** Name of device manufacturer */
  manufacturer?: string;

  /** Extension for manufacturer */
  _manufacturer?: IElement;

  /** Date when the device was made */
  manufactureDate?: string;

  /** Extension for manufactureDate */
  _manufactureDate?: IElement;

  /** Date and time of expiry of this device (if applicable) */
  expirationDate?: string;

  /** Extension for expirationDate */
  _expirationDate?: IElement;

  /** Lot number of manufacture */
  lotNumber?: string;

  /** Extension for lotNumber */
  _lotNumber?: IElement;

  /** Serial number assigned by the manufacturer */
  serialNumber?: string;

  /** Extension for serialNumber */
  _serialNumber?: IElement;

  /** The name of the device as given by the manufacturer */
  deviceName?: IDeviceDeviceName[];

  /** The model number for the device */
  modelNumber?: string;

  /** Extension for modelNumber */
  _modelNumber?: IElement;

  /** The part number of the device */
  partNumber?: string;

  /** Extension for partNumber */
  _partNumber?: IElement;

  /** The kind or type of device */
  type?: ICodeableConcept;

  /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
  specialization?: IDeviceSpecialization[];

  /** The actual design of the device or software version running on the device */
  version?: IDeviceVersion[];

  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
  property?: IDeviceProperty[];

  /** Patient to whom Device is affixed */
  patient?: IReference<'Patient'>;

  /** Organization responsible for device */
  owner?: IReference<'Organization'>;

  /** Details for human/organization for support */
  contact?: IContactPoint[];

  /** Where the device is found */
  location?: IReference<'Location'>;

  /** Network address to contact device */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Device notes and comments */
  note?: IAnnotation[];

  /** Safety Characteristics of Device */
  safety?: ICodeableConcept[];

  /** The parent device */
  parent?: IReference<'Device'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDevice>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Device from a JSON object
   */
  static fromJSON(json: IDevice): Device {
    return new Device(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Device with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDevice>): Device {
    return new Device({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Device by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDevice) => Partial<IDevice>): Device {
    const currentData = this.toJSON();
    return new Device({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDevice)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDevice {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DEVICE_PROPERTIES);
    return result as IDevice;
  }

  /**
   * Create a deep clone of this Device
   */
  clone(): Device {
    return new Device(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Device
   */
  toString(): string {
    const parts: string[] = ['Device'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
