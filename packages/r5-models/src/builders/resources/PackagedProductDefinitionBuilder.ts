import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { PackagedProductDefinition } from '../../models/resources/PackagedProductDefinition.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMarketingStatus,
  IPackagedProductDefinition,
  IPackagedProductDefinitionLegalStatusOfSupply,
  IPackagedProductDefinitionPackaging,
  IPackagedProductDefinitionPackagingProperty,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PackagedProductDefinitionBuilder - Fluent builder for PackagedProductDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinition = new PackagedProductDefinitionBuilder()
 *   .setId('123')
 *   .setName(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PackagedProductDefinitionBuilder extends DomainResourceBuilder<PackagedProductDefinition, IPackagedProductDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * A name for this package. Typically as listed in a drug formulary, catalogue, inventory etc
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set type
   * A high level category e.g. medicinal product, raw material, shipping container etc
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set status
   * The status within the lifecycle of this item. High level - not intended to duplicate details elsewhere e.g. legal status, or authorization/marketing status
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusDate
   * The date at which the given status became applicable
   */
  setStatusDate(statusDate: string): this {
    this.data.statusDate = statusDate;
    return this;
  }

  /**
   * Set description
   * Textual description. Note that this is not the name of the package or product
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set copackagedIndicator
   * Identifies if the drug product is supplied with another item such as a diluent or adjuvant
   */
  setCopackagedIndicator(copackagedIndicator: boolean): this {
    this.data.copackagedIndicator = copackagedIndicator;
    return this;
  }

  /**
   * Set packaging
   * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
   */
  setPackaging(packaging: IPackagedProductDefinitionPackaging): this {
    this.data.packaging = packaging;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * A unique identifier for this package as whole - not for the content of the package
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add packageFor
   * The product that this is a pack for
   */
  addPackageFor(packageFor: IReference<'MedicinalProductDefinition'>): this {
    return this.addToArray('packageFor', packageFor);
  }

  /**
   * Add containedItemQuantity
   * A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. See also packaging.containedItem.amount (especially the long definition)
   */
  addContainedItemQuantity(containedItemQuantity: IQuantity): this {
    return this.addToArray('containedItemQuantity', containedItemQuantity);
  }

  /**
   * Add legalStatusOfSupply
   * The legal status of supply of the packaged item as classified by the regulator
   */
  addLegalStatusOfSupply(legalStatusOfSupply: IPackagedProductDefinitionLegalStatusOfSupply): this {
    return this.addToArray('legalStatusOfSupply', legalStatusOfSupply);
  }

  /**
   * Add marketingStatus
   * Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated
   */
  addMarketingStatus(marketingStatu: IMarketingStatus): this {
    return this.addToArray('marketingStatus', marketingStatu);
  }

  /**
   * Add manufacturer
   * Manufacturer of this package type (multiple means these are all possible manufacturers)
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add attachedDocument
   * Additional information or supporting documentation about the packaged product
   */
  addAttachedDocument(attachedDocument: IReference<'DocumentReference'>): this {
    return this.addToArray('attachedDocument', attachedDocument);
  }

  /**
   * Add characteristic
   * Allows the key features to be recorded, such as "hospital pack", "nurse prescribable"
   */
  addCharacteristic(characteristic: IPackagedProductDefinitionPackagingProperty): this {
    return this.addToArray('characteristic', characteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinition instance
   */
  build(): PackagedProductDefinition {
    return new PackagedProductDefinition(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinition> {
    const packagedProductDefinition = this.build();
    await packagedProductDefinition.validateOrThrow();
    return packagedProductDefinition;
  }
}
