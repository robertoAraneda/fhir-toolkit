import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IDeviceDeviceName } from '../backbones/IDeviceDeviceName.js';
import type { IDeviceProperty } from '../backbones/IDeviceProperty.js';
import type { IDeviceSpecialization } from '../backbones/IDeviceSpecialization.js';
import type { IDeviceUdiCarrier } from '../backbones/IDeviceUdiCarrier.js';
import type { IDeviceVersion } from '../backbones/IDeviceVersion.js';
import type { FHIRDeviceStatusType } from '../../valuesets/index.js';

/**
 * Device Interface
 * 
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 * 
 *
 * @see https://hl7.org/fhir/R4B/device.html
 */
export interface IDevice extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Device';

  /**
   * Instance identifier
   */
  identifier?: IIdentifier[];

  /**
   * The reference to the definition for the device
   */
  definition?: IReference<'DeviceDefinition'>;

  /**
   * Unique Device Identifier (UDI) Barcode string
   */
  udiCarrier?: IDeviceUdiCarrier[];

  /**
   * active | inactive | entered-in-error | unknown
   */
  status?: FHIRDeviceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off
   */
  statusReason?: ICodeableConcept[];

  /**
   * The distinct identification string
   */
  distinctIdentifier?: string;
  /**
   * Extension for distinctIdentifier
   */
  _distinctIdentifier?: IElement;

  /**
   * Name of device manufacturer
   */
  manufacturer?: string;
  /**
   * Extension for manufacturer
   */
  _manufacturer?: IElement;

  /**
   * Date when the device was made
   */
  manufactureDate?: string;
  /**
   * Extension for manufactureDate
   */
  _manufactureDate?: IElement;

  /**
   * Date and time of expiry of this device (if applicable)
   */
  expirationDate?: string;
  /**
   * Extension for expirationDate
   */
  _expirationDate?: IElement;

  /**
   * Lot number of manufacture
   */
  lotNumber?: string;
  /**
   * Extension for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * Serial number assigned by the manufacturer
   */
  serialNumber?: string;
  /**
   * Extension for serialNumber
   */
  _serialNumber?: IElement;

  /**
   * The name of the device as given by the manufacturer
   */
  deviceName?: IDeviceDeviceName[];

  /**
   * The manufacturer's model number for the device
   */
  modelNumber?: string;
  /**
   * Extension for modelNumber
   */
  _modelNumber?: IElement;

  /**
   * The part number or catalog number of the device
   */
  partNumber?: string;
  /**
   * Extension for partNumber
   */
  _partNumber?: IElement;

  /**
   * The kind or type of device
   */
  type?: ICodeableConcept;

  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
   */
  specialization?: IDeviceSpecialization[];

  /**
   * The actual design of the device or software version running on the device
   */
  version?: IDeviceVersion[];

  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
   */
  property?: IDeviceProperty[];

  /**
   * Patient to whom Device is affixed
   */
  patient?: IReference<'Patient'>;

  /**
   * Organization responsible for device
   */
  owner?: IReference<'Organization'>;

  /**
   * Details for human/organization for support
   */
  contact?: IContactPoint[];

  /**
   * Where the device is found
   */
  location?: IReference<'Location'>;

  /**
   * Network address to contact device
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Device notes and comments
   */
  note?: IAnnotation[];

  /**
   * Safety Characteristics of Device
   */
  safety?: ICodeableConcept[];

  /**
   * The device that this device is attached to or is part of
   */
  parent?: IReference<'Device'>;

}
