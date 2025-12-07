import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { InventoryItem } from '../../models/resources/InventoryItem.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IInventoryItem,
  IInventoryItemAssociation,
  IInventoryItemCharacteristic,
  IInventoryItemDescription,
  IInventoryItemInstance,
  IInventoryItemName,
  IInventoryItemResponsibleOrganization,
  IQuantity,
  IReference,
  InventoryItemStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryItemBuilder - Fluent builder for InventoryItem resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryItem = new InventoryItemBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class InventoryItemBuilder extends DomainResourceBuilder<InventoryItem, IInventoryItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | inactive | entered-in-error | unknown
   */
  setStatus(status: InventoryItemStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set description
   * Descriptive characteristics of the item
   */
  setDescription(description: IInventoryItemDescription): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set baseUnit
   * The base unit of measure - the unit in which the product is used or counted
   */
  setBaseUnit(baseUnit: ICodeableConcept): this {
    this.data.baseUnit = baseUnit;
    return this;
  }

  /**
   * Set netContent
   * Net content or amount present in the item
   */
  setNetContent(netContent: IQuantity): this {
    this.data.netContent = netContent;
    return this;
  }

  /**
   * Set instance
   * Instances or occurrences of the product
   */
  setInstance(instance: IInventoryItemInstance): this {
    this.data.instance = instance;
    return this;
  }

  /**
   * Set productReference
   * Link to a product resource used in clinical workflows
   */
  setProductReference(productReference: IReference<'Medication' | 'Device' | 'NutritionProduct' | 'BiologicallyDerivedProduct'>): this {
    this.data.productReference = productReference;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for the inventory item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * Category or class of the item
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add code
   * Code designating the specific type of item
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  /**
   * Add name
   * The item name(s) - the brand name, or common name, functional name, generic name or others
   */
  addName(name: IInventoryItemName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add responsibleOrganization
   * Organization(s) responsible for the product
   */
  addResponsibleOrganization(responsibleOrganization: IInventoryItemResponsibleOrganization): this {
    return this.addToArray('responsibleOrganization', responsibleOrganization);
  }

  /**
   * Add inventoryStatus
   * The usage status like recalled, in use, discarded
   */
  addInventoryStatus(inventoryStatu: ICodeableConcept): this {
    return this.addToArray('inventoryStatus', inventoryStatu);
  }

  /**
   * Add association
   * Association with other items or products
   */
  addAssociation(association: IInventoryItemAssociation): this {
    return this.addToArray('association', association);
  }

  /**
   * Add characteristic
   * Characteristic of the item
   */
  addCharacteristic(characteristic: IInventoryItemCharacteristic): this {
    return this.addToArray('characteristic', characteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryItem instance
   */
  build(): InventoryItem {
    return new InventoryItem(this.data);
  }

  /**
   * Build and validate the InventoryItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryItem> {
    const inventoryItem = this.build();
    await inventoryItem.validateOrThrow();
    return inventoryItem;
  }
}
