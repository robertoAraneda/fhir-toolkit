import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CommonLanguagesType,
  IElement,
  IInventoryItemDescription,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryItemDescription */
const INVENTORY_ITEM_DESCRIPTION_PROPERTIES = [
  'language',
  '_language',
  'description',
  '_description',
] as const;

/**
 * InventoryItemDescription - Descriptive characteristics of the item
 *
 * @see https://hl7.org/fhir/R5/inventoryitemdescription.html
 *
 * @example
 * const inventoryItemDescription = new InventoryItemDescription({
 *   // ... properties
 * });
 */
export class InventoryItemDescription extends BackboneElement implements IInventoryItemDescription {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The language that is used in the item description */
  language?: CommonLanguagesType;

  /** Extension for language */
  _language?: IElement;

  /** Textual description of the item */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryItemDescription>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_ITEM_DESCRIPTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryItemDescription from a JSON object
   */
  static fromJSON(json: IInventoryItemDescription): InventoryItemDescription {
    return new InventoryItemDescription(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryItemDescription with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryItemDescription>): InventoryItemDescription {
    return new InventoryItemDescription({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryItemDescription by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryItemDescription) => Partial<IInventoryItemDescription>): InventoryItemDescription {
    const currentData = this.toJSON();
    return new InventoryItemDescription({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryItemDescription)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryItemDescription {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVENTORY_ITEM_DESCRIPTION_PROPERTIES);
    return result as IInventoryItemDescription;
  }

  /**
   * Create a deep clone of this InventoryItemDescription
   */
  clone(): InventoryItemDescription {
    return new InventoryItemDescription(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryItemDescription
   */
  toString(): string {
    const parts: string[] = ['InventoryItemDescription'];
    return parts.join(', ');
  }
}
