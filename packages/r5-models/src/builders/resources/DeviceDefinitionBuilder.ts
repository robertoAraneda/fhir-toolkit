import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceDefinition } from '../../models/resources/DeviceDefinition.js';
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
  IIdentifier,
  IProductShelfLife,
  IReference,
} from '@fhir-toolkit/r5-types';

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
 *   .setDescription(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceDefinitionBuilder extends DomainResourceBuilder<DeviceDefinition, IDeviceDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Additional information to describe the device
   */
  setDescription(description: string): this {
    this.data.description = description;
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
   * Set manufacturer
   * Name of device manufacturer
   */
  setManufacturer(manufacturer: IReference<'Organization'>): this {
    this.data.manufacturer = manufacturer;
    return this;
  }

  /**
   * Set modelNumber
   * The catalog or model number for the device for example as defined by the manufacturer
   */
  setModelNumber(modelNumber: string): this {
    this.data.modelNumber = modelNumber;
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
   * Set guideline
   * Information aimed at providing directions for the usage of this model of device
   */
  setGuideline(guideline: IDeviceDefinitionGuideline): this {
    this.data.guideline = guideline;
    return this;
  }

  /**
   * Set correctiveAction
   * Tracking of latest field safety corrective action
   */
  setCorrectiveAction(correctiveAction: IDeviceDefinitionCorrectiveAction): this {
    this.data.correctiveAction = correctiveAction;
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
   * Add udiDeviceIdentifier
   * Unique Device Identifier (UDI) Barcode string
   */
  addUdiDeviceIdentifier(udiDeviceIdentifier: IDeviceDefinitionUdiDeviceIdentifier): this {
    return this.addToArray('udiDeviceIdentifier', udiDeviceIdentifier);
  }

  /**
   * Add regulatoryIdentifier
   * Regulatory identifier(s) associated with this device
   */
  addRegulatoryIdentifier(regulatoryIdentifier: IDeviceDefinitionRegulatoryIdentifier): this {
    return this.addToArray('regulatoryIdentifier', regulatoryIdentifier);
  }

  /**
   * Add deviceName
   * The name or names of the device as given by the manufacturer
   */
  addDeviceName(deviceName: IDeviceDefinitionDeviceName): this {
    return this.addToArray('deviceName', deviceName);
  }

  /**
   * Add classification
   * What kind of device or device system this is
   */
  addClassification(classification: IDeviceDefinitionClassification): this {
    return this.addToArray('classification', classification);
  }

  /**
   * Add conformsTo
   * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
   */
  addConformsTo(conformsTo: IDeviceDefinitionConformsTo): this {
    return this.addToArray('conformsTo', conformsTo);
  }

  /**
   * Add hasPart
   * A device, part of the current one
   */
  addHasPart(hasPart: IDeviceDefinitionHasPart): this {
    return this.addToArray('hasPart', hasPart);
  }

  /**
   * Add packaging
   * Information about the packaging of the device, i.e. how the device is packaged
   */
  addPackaging(packaging: IDeviceDefinitionPackaging): this {
    return this.addToArray('packaging', packaging);
  }

  /**
   * Add version
   * The version of the device or software
   */
  addVersion(version: IDeviceDefinitionVersion): this {
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
   * Add property
   * Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc
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
   * Add link
   * An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device
   */
  addLink(link: IDeviceDefinitionLink): this {
    return this.addToArray('link', link);
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

  /**
   * Add productionIdentifierInUDI
   * lot-number | manufactured-date | serial-number | expiration-date | biological-source | software-version
   */
  addProductionIdentifierInUDI(productionIdentifierInUDI: DeviceProductionIdentifierInUDIType): this {
    return this.addToArray('productionIdentifierInUDI', productionIdentifierInUDI);
  }

  /**
   * Add chargeItem
   * Billing code or reference associated with the device
   */
  addChargeItem(chargeItem: IDeviceDefinitionChargeItem): this {
    return this.addToArray('chargeItem', chargeItem);
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
