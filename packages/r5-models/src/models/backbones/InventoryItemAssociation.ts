import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IInventoryItemAssociation,
  IRatio,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryItemAssociation */
const INVENTORY_ITEM_ASSOCIATION_PROPERTIES = [
  'associationType',
  'relatedItem',
  'quantity',
] as const;

/**
 * InventoryItemAssociation - Association with other items or products
 *
 * @see https://hl7.org/fhir/R5/inventoryitemassociation.html
 *
 * @example
 * const inventoryItemAssociation = new InventoryItemAssociation({
 *   // ... properties
 * });
 */
export class InventoryItemAssociation extends BackboneElement implements IInventoryItemAssociation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of association between the device and the other item */
  associationType: ICodeableConcept;

  /** The related item or product */
  relatedItem: IReference<'InventoryItem' | 'Medication' | 'MedicationKnowledge' | 'Device' | 'DeviceDefinition' | 'NutritionProduct' | 'BiologicallyDerivedProduct'>;

  /** The quantity of the product in this product */
  quantity: IRatio;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryItemAssociation>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_ITEM_ASSOCIATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryItemAssociation from a JSON object
   */
  static fromJSON(json: IInventoryItemAssociation): InventoryItemAssociation {
    return new InventoryItemAssociation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryItemAssociation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryItemAssociation>): InventoryItemAssociation {
    return new InventoryItemAssociation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryItemAssociation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryItemAssociation) => Partial<IInventoryItemAssociation>): InventoryItemAssociation {
    const currentData = this.toJSON();
    return new InventoryItemAssociation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryItemAssociation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryItemAssociation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVENTORY_ITEM_ASSOCIATION_PROPERTIES);
    return result as IInventoryItemAssociation;
  }

  /**
   * Create a deep clone of this InventoryItemAssociation
   */
  clone(): InventoryItemAssociation {
    return new InventoryItemAssociation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryItemAssociation
   */
  toString(): string {
    const parts: string[] = ['InventoryItemAssociation'];
    return parts.join(', ');
  }
}
