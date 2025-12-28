import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactPoint,
  IDeviceDefinition,
  IDeviceDefinitionCapability,
  IDeviceDefinitionDeviceName,
  IDeviceDefinitionMaterial,
  IDeviceDefinitionProperty,
  IDeviceDefinitionSpecialization,
  IDeviceDefinitionUdiDeviceIdentifier,
  IElement,
  IIdentifier,
  IProdCharacteristic,
  IProductShelfLife,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DeviceDefinition */
const DEVICE_DEFINITION_PROPERTIES = [
  'identifier',
  'udiDeviceIdentifier',
  'manufacturerString',
  '_manufacturerString',
  'manufacturerReference',
  'deviceName',
  'modelNumber',
  '_modelNumber',
  'type',
  'specialization',
  'version',
  '_version',
  'safety',
  'shelfLifeStorage',
  'physicalCharacteristics',
  'languageCode',
  'capability',
  'property',
  'owner',
  'contact',
  'url',
  '_url',
  'onlineInformation',
  '_onlineInformation',
  'note',
  'quantity',
  'parentDevice',
  'material',
] as const;

/**
 * DeviceDefinition - The characteristics, operational status and capabilities of a medical-related component of a medical device.
 *
 * @see https://hl7.org/fhir/R4B/devicedefinition.html
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

  /** Instance identifier */
  identifier?: IIdentifier[];

  /** Unique Device Identifier (UDI) Barcode string */
  udiDeviceIdentifier?: IDeviceDefinitionUdiDeviceIdentifier[];

  /** Name of device manufacturer */
  manufacturerString?: string;

  /** Extension for manufacturerString */
  _manufacturerString?: IElement;

  /** Name of device manufacturer */
  manufacturerReference?: IReference;

  /** A name given to the device to identify it */
  deviceName?: IDeviceDefinitionDeviceName[];

  /** The model number for the device */
  modelNumber?: string;

  /** Extension for modelNumber */
  _modelNumber?: IElement;

  /** What kind of device or device system this is */
  type?: ICodeableConcept;

  /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
  specialization?: IDeviceDefinitionSpecialization[];

  /** Available versions */
  version?: string[];

  /** Extension for version */
  _version?: IElement;

  /** Safety characteristics of the device */
  safety?: ICodeableConcept[];

  /** Shelf Life and storage information */
  shelfLifeStorage?: IProductShelfLife[];

  /** Dimensions, color etc. */
  physicalCharacteristics?: IProdCharacteristic;

  /** Language code for the human-readable text strings produced by the device (all supported) */
  languageCode?: ICodeableConcept[];

  /** Device capabilities */
  capability?: IDeviceDefinitionCapability[];

  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
  property?: IDeviceDefinitionProperty[];

  /** Organization responsible for device */
  owner?: IReference<'Organization'>;

  /** Details for human/organization for support */
  contact?: IContactPoint[];

  /** Network address to contact device */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Access to on-line information */
  onlineInformation?: string;

  /** Extension for onlineInformation */
  _onlineInformation?: IElement;

  /** Device notes and comments */
  note?: IAnnotation[];

  /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) */
  quantity?: IQuantity;

  /** The parent device it can be part of */
  parentDevice?: IReference<'DeviceDefinition'>;

  /** A substance used to create the material(s) of which the device is made */
  material?: IDeviceDefinitionMaterial[];

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
