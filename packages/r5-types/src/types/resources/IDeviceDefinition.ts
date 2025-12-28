import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IProductShelfLife } from '../datatypes/IProductShelfLife.js';
import type { IDeviceDefinitionChargeItem } from '../backbones/IDeviceDefinitionChargeItem.js';
import type { IDeviceDefinitionClassification } from '../backbones/IDeviceDefinitionClassification.js';
import type { IDeviceDefinitionConformsTo } from '../backbones/IDeviceDefinitionConformsTo.js';
import type { IDeviceDefinitionCorrectiveAction } from '../backbones/IDeviceDefinitionCorrectiveAction.js';
import type { IDeviceDefinitionDeviceName } from '../backbones/IDeviceDefinitionDeviceName.js';
import type { IDeviceDefinitionGuideline } from '../backbones/IDeviceDefinitionGuideline.js';
import type { IDeviceDefinitionHasPart } from '../backbones/IDeviceDefinitionHasPart.js';
import type { IDeviceDefinitionLink } from '../backbones/IDeviceDefinitionLink.js';
import type { IDeviceDefinitionMaterial } from '../backbones/IDeviceDefinitionMaterial.js';
import type { IDeviceDefinitionPackaging } from '../backbones/IDeviceDefinitionPackaging.js';
import type { IDeviceDefinitionProperty } from '../backbones/IDeviceDefinitionProperty.js';
import type { IDeviceDefinitionRegulatoryIdentifier } from '../backbones/IDeviceDefinitionRegulatoryIdentifier.js';
import type { IDeviceDefinitionUdiDeviceIdentifier } from '../backbones/IDeviceDefinitionUdiDeviceIdentifier.js';
import type { IDeviceDefinitionVersion } from '../backbones/IDeviceDefinitionVersion.js';
import type { DeviceProductionIdentifierInUDIType } from '../../valuesets/index.js';

/**
 * DeviceDefinition Interface
 * 
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinition.html
 */
export interface IDeviceDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DeviceDefinition';

  /**
   * Additional information to describe the device
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Instance identifier
   */
  identifier?: IIdentifier[];

  /**
   * Unique Device Identifier (UDI) Barcode string
   */
  udiDeviceIdentifier?: IDeviceDefinitionUdiDeviceIdentifier[];

  /**
   * Regulatory identifier(s) associated with this device
   */
  regulatoryIdentifier?: IDeviceDefinitionRegulatoryIdentifier[];

  /**
   * The part number or catalog number of the device
   */
  partNumber?: string;
  /**
   * Extension for partNumber
   */
  _partNumber?: IElement;

  /**
   * Name of device manufacturer
   */
  manufacturer?: IReference<'Organization'>;

  /**
   * The name or names of the device as given by the manufacturer
   */
  deviceName?: IDeviceDefinitionDeviceName[];

  /**
   * The catalog or model number for the device for example as defined by the manufacturer
   */
  modelNumber?: string;
  /**
   * Extension for modelNumber
   */
  _modelNumber?: IElement;

  /**
   * What kind of device or device system this is
   */
  classification?: IDeviceDefinitionClassification[];

  /**
   * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
   */
  conformsTo?: IDeviceDefinitionConformsTo[];

  /**
   * A device, part of the current one
   */
  hasPart?: IDeviceDefinitionHasPart[];

  /**
   * Information about the packaging of the device, i.e. how the device is packaged
   */
  packaging?: IDeviceDefinitionPackaging[];

  /**
   * The version of the device or software
   */
  version?: IDeviceDefinitionVersion[];

  /**
   * Safety characteristics of the device
   */
  safety?: ICodeableConcept[];

  /**
   * Shelf Life and storage information
   */
  shelfLifeStorage?: IProductShelfLife[];

  /**
   * Language code for the human-readable text strings produced by the device (all supported)
   */
  languageCode?: ICodeableConcept[];

  /**
   * Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc
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
   * An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device
   */
  link?: IDeviceDefinitionLink[];

  /**
   * Device notes and comments
   */
  note?: IAnnotation[];

  /**
   * A substance used to create the material(s) of which the device is made
   */
  material?: IDeviceDefinitionMaterial[];

  /**
   * lot-number | manufactured-date | serial-number | expiration-date | biological-source | software-version
   */
  productionIdentifierInUDI?: DeviceProductionIdentifierInUDIType[];
  /**
   * Extension for productionIdentifierInUDI
   */
  _productionIdentifierInUDI?: IElement;

  /**
   * Information aimed at providing directions for the usage of this model of device
   */
  guideline?: IDeviceDefinitionGuideline;

  /**
   * Tracking of latest field safety corrective action
   */
  correctiveAction?: IDeviceDefinitionCorrectiveAction;

  /**
   * Billing code or reference associated with the device
   */
  chargeItem?: IDeviceDefinitionChargeItem[];

}
