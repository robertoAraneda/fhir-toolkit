import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IInventoryItemAssociation } from '../backbones/IInventoryItemAssociation.js';
import type { IInventoryItemCharacteristic } from '../backbones/IInventoryItemCharacteristic.js';
import type { IInventoryItemDescription } from '../backbones/IInventoryItemDescription.js';
import type { IInventoryItemInstance } from '../backbones/IInventoryItemInstance.js';
import type { IInventoryItemName } from '../backbones/IInventoryItemName.js';
import type { IInventoryItemResponsibleOrganization } from '../backbones/IInventoryItemResponsibleOrganization.js';
import type { InventoryItemStatusType } from '../../valuesets/index.js';

/**
 * InventoryItem Interface
 * 
 * A functional description of an inventory item used in inventory and supply-related workflows.
 * 
 *
 * @see https://hl7.org/fhir/R4/inventoryitem.html
 */
export interface IInventoryItem extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'InventoryItem';

  /**
   * Business identifier for the inventory item
   */
  identifier?: IIdentifier[];

  /**
   * active | inactive | entered-in-error | unknown
   */
  status: InventoryItemStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Category or class of the item
   */
  category?: ICodeableConcept[];

  /**
   * Code designating the specific type of item
   */
  code?: ICodeableConcept[];

  /**
   * The item name(s) - the brand name, or common name, functional name, generic name or others
   */
  name?: IInventoryItemName[];

  /**
   * Organization(s) responsible for the product
   */
  responsibleOrganization?: IInventoryItemResponsibleOrganization[];

  /**
   * Descriptive characteristics of the item
   */
  description?: IInventoryItemDescription;

  /**
   * The usage status like recalled, in use, discarded
   */
  inventoryStatus?: ICodeableConcept[];

  /**
   * The base unit of measure - the unit in which the product is used or counted
   */
  baseUnit?: ICodeableConcept;

  /**
   * Net content or amount present in the item
   */
  netContent?: IQuantity;

  /**
   * Association with other items or products
   */
  association?: IInventoryItemAssociation[];

  /**
   * Characteristic of the item
   */
  characteristic?: IInventoryItemCharacteristic[];

  /**
   * Instances or occurrences of the product
   */
  instance?: IInventoryItemInstance;

  /**
   * Link to a product resource used in clinical workflows
   */
  productReference?: IReference<'Medication' | 'Device' | 'NutritionProduct' | 'BiologicallyDerivedProduct'>;

}
