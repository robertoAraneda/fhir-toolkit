import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IProdCharacteristic } from '../datatypes/IProdCharacteristic.js';
import type { IProductShelfLife } from '../datatypes/IProductShelfLife.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IDeviceDefinitionCapability } from '../backbones/IDeviceDefinitionCapability.js';
import type { IDeviceDefinitionDeviceName } from '../backbones/IDeviceDefinitionDeviceName.js';
import type { IDeviceDefinitionMaterial } from '../backbones/IDeviceDefinitionMaterial.js';
import type { IDeviceDefinitionProperty } from '../backbones/IDeviceDefinitionProperty.js';
import type { IDeviceDefinitionSpecialization } from '../backbones/IDeviceDefinitionSpecialization.js';
import type { IDeviceDefinitionUdiDeviceIdentifier } from '../backbones/IDeviceDefinitionUdiDeviceIdentifier.js';

/**
 * DeviceDefinition Interface
 * 
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * 
 *
 * @see https://hl7.org/fhir/R4B/devicedefinition.html
 */
export interface IDeviceDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DeviceDefinition';

  /**
   * Instance identifier
   */
  identifier?: IIdentifier[];

  /**
   * Unique Device Identifier (UDI) Barcode string
   */
  udiDeviceIdentifier?: IDeviceDefinitionUdiDeviceIdentifier[];

  /**
   * Name of device manufacturer
   */
  manufacturerString?: string;
  /**
   * Extension for manufacturerString
   */
  _manufacturerString?: IElement;

  /**
   * Name of device manufacturer
   */
  manufacturerReference?: IReference;

  /**
   * A name given to the device to identify it
   */
  deviceName?: IDeviceDefinitionDeviceName[];

  /**
   * The model number for the device
   */
  modelNumber?: string;
  /**
   * Extension for modelNumber
   */
  _modelNumber?: IElement;

  /**
   * What kind of device or device system this is
   */
  type?: ICodeableConcept;

  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
   */
  specialization?: IDeviceDefinitionSpecialization[];

  /**
   * Available versions
   */
  version?: string[];
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Safety characteristics of the device
   */
  safety?: ICodeableConcept[];

  /**
   * Shelf Life and storage information
   */
  shelfLifeStorage?: IProductShelfLife[];

  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: IProdCharacteristic;

  /**
   * Language code for the human-readable text strings produced by the device (all supported)
   */
  languageCode?: ICodeableConcept[];

  /**
   * Device capabilities
   */
  capability?: IDeviceDefinitionCapability[];

  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
   */
  property?: IDeviceDefinitionProperty[];

  /**
   * Organization responsible for device
   */
  owner?: IReference<'Organization'>;

  /**
   * Details for human/organization for support
   */
  contact?: IContactPoint[];

  /**
   * Network address to contact device
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Access to on-line information
   */
  onlineInformation?: string;
  /**
   * Extension for onlineInformation
   */
  _onlineInformation?: IElement;

  /**
   * Device notes and comments
   */
  note?: IAnnotation[];

  /**
   * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product)
   */
  quantity?: IQuantity;

  /**
   * The parent device it can be part of
   */
  parentDevice?: IReference<'DeviceDefinition'>;

  /**
   * A substance used to create the material(s) of which the device is made
   */
  material?: IDeviceDefinitionMaterial[];

}
