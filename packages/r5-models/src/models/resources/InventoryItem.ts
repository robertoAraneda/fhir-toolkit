import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
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

/** Properties specific to InventoryItem */
const INVENTORY_ITEM_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'category',
  'code',
  'name',
  'responsibleOrganization',
  'description',
  'inventoryStatus',
  'baseUnit',
  'netContent',
  'association',
  'characteristic',
  'instance',
  'productReference',
] as const;

/**
 * InventoryItem - A functional description of an inventory item used in inventory and supply-related workflows.
 *
 * @see https://hl7.org/fhir/R4/inventoryitem.html
 *
 * @example
 * const inventoryItem = new InventoryItem({
 *   resourceType: 'InventoryItem',
 *   // ... properties
 * });
 */
export class InventoryItem extends DomainResource implements IInventoryItem {
  readonly resourceType = 'InventoryItem' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for the inventory item */
  identifier?: IIdentifier[];

  /** active | inactive | entered-in-error | unknown */
  status: InventoryItemStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Category or class of the item */
  category?: ICodeableConcept[];

  /** Code designating the specific type of item */
  code?: ICodeableConcept[];

  /** The item name(s) - the brand name, or common name, functional name, generic name or others */
  name?: IInventoryItemName[];

  /** Organization(s) responsible for the product */
  responsibleOrganization?: IInventoryItemResponsibleOrganization[];

  /** Descriptive characteristics of the item */
  description?: IInventoryItemDescription;

  /** The usage status like recalled, in use, discarded */
  inventoryStatus?: ICodeableConcept[];

  /** The base unit of measure - the unit in which the product is used or counted */
  baseUnit?: ICodeableConcept;

  /** Net content or amount present in the item */
  netContent?: IQuantity;

  /** Association with other items or products */
  association?: IInventoryItemAssociation[];

  /** Characteristic of the item */
  characteristic?: IInventoryItemCharacteristic[];

  /** Instances or occurrences of the product */
  instance?: IInventoryItemInstance;

  /** Link to a product resource used in clinical workflows */
  productReference?: IReference<'Medication' | 'Device' | 'NutritionProduct' | 'BiologicallyDerivedProduct'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryItem>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryItem from a JSON object
   */
  static fromJSON(json: IInventoryItem): InventoryItem {
    return new InventoryItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryItem>): InventoryItem {
    return new InventoryItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryItem) => Partial<IInventoryItem>): InventoryItem {
    const currentData = this.toJSON();
    return new InventoryItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryItem {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, INVENTORY_ITEM_PROPERTIES);
    return result as IInventoryItem;
  }

  /**
   * Create a deep clone of this InventoryItem
   */
  clone(): InventoryItem {
    return new InventoryItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryItem
   */
  toString(): string {
    const parts: string[] = ['InventoryItem'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
