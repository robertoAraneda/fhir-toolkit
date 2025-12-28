import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CommonLanguagesType,
  ICoding,
  IElement,
  IInventoryItemName,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryItemName */
const INVENTORY_ITEM_NAME_PROPERTIES = [
  'nameType',
  'language',
  '_language',
  'name',
  '_name',
] as const;

/**
 * InventoryItemName - The item name(s) - the brand name, or common name, functional name, generic name or others
 *
 * @see https://hl7.org/fhir/R5/inventoryitemname.html
 *
 * @example
 * const inventoryItemName = new InventoryItemName({
 *   // ... properties
 * });
 */
export class InventoryItemName extends BackboneElement implements IInventoryItemName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of name e.g. 'brand-name', 'functional-name', 'common-name' */
  nameType: ICoding;

  /** The language used to express the item name */
  language: CommonLanguagesType;

  /** Extension for language */
  _language?: IElement;

  /** The name or designation of the item */
  name: string;

  /** Extension for name */
  _name?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryItemName>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_ITEM_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryItemName from a JSON object
   */
  static fromJSON(json: IInventoryItemName): InventoryItemName {
    return new InventoryItemName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryItemName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryItemName>): InventoryItemName {
    return new InventoryItemName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryItemName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryItemName) => Partial<IInventoryItemName>): InventoryItemName {
    const currentData = this.toJSON();
    return new InventoryItemName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryItemName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryItemName {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVENTORY_ITEM_NAME_PROPERTIES);
    return result as IInventoryItemName;
  }

  /**
   * Create a deep clone of this InventoryItemName
   */
  clone(): InventoryItemName {
    return new InventoryItemName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryItemName
   */
  toString(): string {
    const parts: string[] = ['InventoryItemName'];
    return parts.join(', ');
  }
}
