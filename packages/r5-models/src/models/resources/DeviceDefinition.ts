import { DomainResource } from '../base/DomainResource.js';
import type {
  DeviceProductionIdentifierInUDIType,
  IAnnotation,
  ICodeableConcept,
  IContactPoint,
  IDeviceDefinition,
  IDeviceDefinitionChargeItem,
  IDeviceDefinitionClassification,
  IDeviceDefinitionConformsTo,
  IDeviceDefinitionCorrectiveAction,
  IDeviceDefinitionDeviceName,
  IDeviceDefinitionGuideline,
  IDeviceDefinitionHasPart,
  IDeviceDefinitionLink,
  IDeviceDefinitionMaterial,
  IDeviceDefinitionPackaging,
  IDeviceDefinitionProperty,
  IDeviceDefinitionRegulatoryIdentifier,
  IDeviceDefinitionUdiDeviceIdentifier,
  IDeviceDefinitionVersion,
  IElement,
  IIdentifier,
  IProductShelfLife,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinition */
const DEVICE_DEFINITION_PROPERTIES = [
  'description',
  '_description',
  'identifier',
  'udiDeviceIdentifier',
  'regulatoryIdentifier',
  'partNumber',
  '_partNumber',
  'manufacturer',
  'deviceName',
  'modelNumber',
  '_modelNumber',
  'classification',
  'conformsTo',
  'hasPart',
  'packaging',
  'version',
  'safety',
  'shelfLifeStorage',
  'languageCode',
  'property',
  'owner',
  'contact',
  'link',
  'note',
  'material',
  'productionIdentifierInUDI',
  '_productionIdentifierInUDI',
  'guideline',
  'correctiveAction',
  'chargeItem',
] as const;

/**
 * DeviceDefinition - The characteristics, operational status and capabilities of a medical-related component of a medical device.
 *
 * @see https://hl7.org/fhir/R4/devicedefinition.html
 *
 * @example
 * const deviceDefinition = new DeviceDefinition({
 *   // ... properties
 * });
 */
export class DeviceDefinition extends DomainResource implements IDeviceDefinition {
  readonly resourceType = 'DeviceDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Additional information to describe the device */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Instance identifier */
  identifier?: IIdentifier[];

  /** Unique Device Identifier (UDI) Barcode string */
  udiDeviceIdentifier?: IDeviceDefinitionUdiDeviceIdentifier[];

  /** Regulatory identifier(s) associated with this device */
  regulatoryIdentifier?: IDeviceDefinitionRegulatoryIdentifier[];

  /** The part number or catalog number of the device */
  partNumber?: string;

  /** Extension for partNumber */
  _partNumber?: IElement;

  /** Name of device manufacturer */
  manufacturer?: IReference<'Organization'>;

  /** The name or names of the device as given by the manufacturer */
  deviceName?: IDeviceDefinitionDeviceName[];

  /** The catalog or model number for the device for example as defined by the manufacturer */
  modelNumber?: string;

  /** Extension for modelNumber */
  _modelNumber?: IElement;

  /** What kind of device or device system this is */
  classification?: IDeviceDefinitionClassification[];

  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device */
  conformsTo?: IDeviceDefinitionConformsTo[];

  /** A device, part of the current one */
  hasPart?: IDeviceDefinitionHasPart[];

  /** Information about the packaging of the device, i.e. how the device is packaged */
  packaging?: IDeviceDefinitionPackaging[];

  /** The version of the device or software */
  version?: IDeviceDefinitionVersion[];

  /** Safety characteristics of the device */
  safety?: ICodeableConcept[];

  /** Shelf Life and storage information */
  shelfLifeStorage?: IProductShelfLife[];

  /** Language code for the human-readable text strings produced by the device (all supported) */
  languageCode?: ICodeableConcept[];

  /** Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc */
  property?: IDeviceDefinitionProperty[];

  /** Organization responsible for device */
  owner?: IReference<'Organization'>;

  /** Details for human/organization for support */
  contact?: IContactPoint[];

  /** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device */
  link?: IDeviceDefinitionLink[];

  /** Device notes and comments */
  note?: IAnnotation[];

  /** A substance used to create the material(s) of which the device is made */
  material?: IDeviceDefinitionMaterial[];

  /** lot-number | manufactured-date | serial-number | expiration-date | biological-source | software-version */
  productionIdentifierInUDI?: DeviceProductionIdentifierInUDIType[];

  /** Extension for productionIdentifierInUDI */
  _productionIdentifierInUDI?: IElement;

  /** Information aimed at providing directions for the usage of this model of device */
  guideline?: IDeviceDefinitionGuideline;

  /** Tracking of latest field safety corrective action */
  correctiveAction?: IDeviceDefinitionCorrectiveAction;

  /** Billing code or reference associated with the device */
  chargeItem?: IDeviceDefinitionChargeItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDeviceDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinition from a JSON object
   */
  static fromJSON(json: IDeviceDefinition): DeviceDefinition {
    return new DeviceDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinition>): DeviceDefinition {
    return new DeviceDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinition) => Partial<IDeviceDefinition>): DeviceDefinition {
    const currentData = this.toJSON();
    return new DeviceDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_PROPERTIES);
    return result as IDeviceDefinition;
  }

  /**
   * Create a deep clone of this DeviceDefinition
   */
  clone(): DeviceDefinition {
    return new DeviceDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinition
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
