import { DomainResource } from '../base/DomainResource.js';
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
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Device */
const DEVICE_PROPERTIES = [
  'identifier',
  'displayName',
  '_displayName',
  'definition',
  'udiCarrier',
  'status',
  '_status',
  'availabilityStatus',
  'biologicalSourceEvent',
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
  'name',
  'modelNumber',
  '_modelNumber',
  'partNumber',
  '_partNumber',
  'category',
  'type',
  'version',
  'conformsTo',
  'property',
  'mode',
  'cycle',
  'duration',
  'owner',
  'contact',
  'location',
  'url',
  '_url',
  'endpoint',
  'gateway',
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

  /** The name used to display by default when the device is referenced */
  displayName?: string;

  /** Extension for displayName */
  _displayName?: IElement;

  /** The reference to the definition for the device */
  definition?: ICodeableReference;

  /** Unique Device Identifier (UDI) Barcode string */
  udiCarrier?: IDeviceUdiCarrier[];

  /** active | inactive | entered-in-error */
  status?: FHIRDeviceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** lost | damaged | destroyed | available */
  availabilityStatus?: ICodeableConcept;

  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled */
  biologicalSourceEvent?: IIdentifier;

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

  /** The name or names of the device as known to the manufacturer and/or patient */
  name?: IDeviceName[];

  /** The manufacturer's model number for the device */
  modelNumber?: string;

  /** Extension for modelNumber */
  _modelNumber?: IElement;

  /** The part number or catalog number of the device */
  partNumber?: string;

  /** Extension for partNumber */
  _partNumber?: IElement;

  /** Indicates a high-level grouping of the device */
  category?: ICodeableConcept[];

  /** The kind or type of device */
  type?: ICodeableConcept[];

  /** The actual design of the device or software version running on the device */
  version?: IDeviceVersion[];

  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device */
  conformsTo?: IDeviceConformsTo[];

  /** Inherent, essentially fixed, characteristics of the device.  e.g., time properties, size, material, etc. */
  property?: IDeviceProperty[];

  /** The designated condition for performing a task */
  mode?: ICodeableConcept;

  /** The series of occurrences that repeats during the operation of the device */
  cycle?: ICount;

  /** A measurement of time during the device's operation (e.g., days, hours, mins, etc.) */
  duration?: IDuration;

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

  /** Technical endpoints providing access to electronic services provided by the device */
  endpoint?: IReference<'Endpoint'>[];

  /** Linked device acting as a communication/data collector, translator or controller */
  gateway?: ICodeableReference[];

  /** Device notes and comments */
  note?: IAnnotation[];

  /** Safety Characteristics of Device */
  safety?: ICodeableConcept[];

  /** The higher level or encompassing device that this device is a logical part of */
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
