import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IIdentifier,
  IInventoryItemInstance,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryItemInstance */
const INVENTORY_ITEM_INSTANCE_PROPERTIES = [
  'identifier',
  'lotNumber',
  '_lotNumber',
  'expiry',
  '_expiry',
  'subject',
  'location',
] as const;

/**
 * InventoryItemInstance - Instances or occurrences of the product
 *
 * @see https://hl7.org/fhir/R4/inventoryiteminstance.html
 *
 * @example
 * const inventoryItemInstance = new InventoryItemInstance({
 *   // ... properties
 * });
 */
export class InventoryItemInstance extends BackboneElement implements IInventoryItemInstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The identifier for the physical instance, typically a serial number */
  identifier?: IIdentifier[];

  /** The lot or batch number of the item */
  lotNumber?: string;

  /** Extension for lotNumber */
  _lotNumber?: IElement;

  /** The expiry date or date and time for the product */
  expiry?: string;

  /** Extension for expiry */
  _expiry?: IElement;

  /** The subject that the item is associated with */
  subject?: IReference<'Patient' | 'Organization'>;

  /** The location that the item is associated with */
  location?: IReference<'Location'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryItemInstance>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_ITEM_INSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryItemInstance from a JSON object
   */
  static fromJSON(json: IInventoryItemInstance): InventoryItemInstance {
    return new InventoryItemInstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryItemInstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryItemInstance>): InventoryItemInstance {
    return new InventoryItemInstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryItemInstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryItemInstance) => Partial<IInventoryItemInstance>): InventoryItemInstance {
    const currentData = this.toJSON();
    return new InventoryItemInstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryItemInstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryItemInstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVENTORY_ITEM_INSTANCE_PROPERTIES);
    return result as IInventoryItemInstance;
  }

  /**
   * Create a deep clone of this InventoryItemInstance
   */
  clone(): InventoryItemInstance {
    return new InventoryItemInstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryItemInstance
   */
  toString(): string {
    const parts: string[] = ['InventoryItemInstance'];
    return parts.join(', ');
  }
}
