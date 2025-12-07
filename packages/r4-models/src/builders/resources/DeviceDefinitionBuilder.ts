import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceDefinition } from '../../models/resources/DeviceDefinition.js';
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
  IIdentifier,
  IProdCharacteristic,
  IProductShelfLife,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * DeviceDefinitionBuilder - Fluent builder for DeviceDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinition = new DeviceDefinitionBuilder()
 *   .setId('123')
 *   .setModelNumber(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceDefinitionBuilder extends DomainResourceBuilder<DeviceDefinition, IDeviceDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set modelNumber
   * The model number for the device
   */
  setModelNumber(modelNumber: string): this {
    this.data.modelNumber = modelNumber;
    return this;
  }

  /**
   * Set type
   * What kind of device or device system this is
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set physicalCharacteristics
   * Dimensions, color etc.
   */
  setPhysicalCharacteristics(physicalCharacteristics: IProdCharacteristic): this {
    this.data.physicalCharacteristics = physicalCharacteristics;
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
   * Set url
   * Network address to contact device
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set onlineInformation
   * Access to on-line information
   */
  setOnlineInformation(onlineInformation: string): this {
    this.data.onlineInformation = onlineInformation;
    return this;
  }

  /**
   * Set quantity
   * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product)
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set parentDevice
   * The parent device it can be part of
   */
  setParentDevice(parentDevice: IReference<'DeviceDefinition'>): this {
    this.data.parentDevice = parentDevice;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set manufacturer choice type
   * @param type - 'String' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setManufacturer('String', value)
   */
  setManufacturer<T extends 'String' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `manufacturer${type}` as keyof IDeviceDefinition;
    const otherKeys: (keyof IDeviceDefinition)[] = [];
    if (type !== 'String') {
      otherKeys.push('manufacturerString' as keyof IDeviceDefinition);
      otherKeys.push('_manufacturerString' as keyof IDeviceDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('manufacturerReference' as keyof IDeviceDefinition);
      otherKeys.push('_manufacturerReference' as keyof IDeviceDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
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
   * Add udiDeviceIdentifier
   * Unique Device Identifier (UDI) Barcode string
   */
  addUdiDeviceIdentifier(udiDeviceIdentifier: IDeviceDefinitionUdiDeviceIdentifier): this {
    return this.addToArray('udiDeviceIdentifier', udiDeviceIdentifier);
  }

  /**
   * Add deviceName
   * A name given to the device to identify it
   */
  addDeviceName(deviceName: IDeviceDefinitionDeviceName): this {
    return this.addToArray('deviceName', deviceName);
  }

  /**
   * Add specialization
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
   */
  addSpecialization(specialization: IDeviceDefinitionSpecialization): this {
    return this.addToArray('specialization', specialization);
  }

  /**
   * Add version
   * Available versions
   */
  addVersion(version: string): this {
    return this.addToArray('version', version);
  }

  /**
   * Add safety
   * Safety characteristics of the device
   */
  addSafety(safety: ICodeableConcept): this {
    return this.addToArray('safety', safety);
  }

  /**
   * Add shelfLifeStorage
   * Shelf Life and storage information
   */
  addShelfLifeStorage(shelfLifeStorage: IProductShelfLife): this {
    return this.addToArray('shelfLifeStorage', shelfLifeStorage);
  }

  /**
   * Add languageCode
   * Language code for the human-readable text strings produced by the device (all supported)
   */
  addLanguageCode(languageCode: ICodeableConcept): this {
    return this.addToArray('languageCode', languageCode);
  }

  /**
   * Add capability
   * Device capabilities
   */
  addCapability(capability: IDeviceDefinitionCapability): this {
    return this.addToArray('capability', capability);
  }

  /**
   * Add property
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
   */
  addProperty(property: IDeviceDefinitionProperty): this {
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
   * Add material
   * A substance used to create the material(s) of which the device is made
   */
  addMaterial(material: IDeviceDefinitionMaterial): this {
    return this.addToArray('material', material);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinition instance
   */
  build(): DeviceDefinition {
    return new DeviceDefinition(this.data);
  }

  /**
   * Build and validate the DeviceDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinition> {
    const deviceDefinition = this.build();
    await deviceDefinition.validateOrThrow();
    return deviceDefinition;
  }
}
