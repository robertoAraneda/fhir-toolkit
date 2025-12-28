import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IQuantity,
  IReference,
  ISupplyDeliverySuppliedItem,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SupplyDeliverySuppliedItem */
const SUPPLY_DELIVERY_SUPPLIED_ITEM_PROPERTIES = [
  'quantity',
  'itemCodeableConcept',
  'itemReference',
] as const;

/**
 * SupplyDeliverySuppliedItem - The item that is delivered or supplied
 *
 * @see https://hl7.org/fhir/R4B/supplydeliverysupplieditem.html
 *
 * @example
 * const supplyDeliverySuppliedItem = new SupplyDeliverySuppliedItem({
 *   // ... properties
 * });
 */
export class SupplyDeliverySuppliedItem extends BackboneElement implements ISupplyDeliverySuppliedItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Amount dispensed */
  quantity?: IQuantity;

  /** Medication, Substance, or Device supplied */
  itemCodeableConcept?: ICodeableConcept;

  /** Medication, Substance, or Device supplied */
  itemReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISupplyDeliverySuppliedItem>) {
    super(data);
    if (data) {
      this.assignProps(data, SUPPLY_DELIVERY_SUPPLIED_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SupplyDeliverySuppliedItem from a JSON object
   */
  static fromJSON(json: ISupplyDeliverySuppliedItem): SupplyDeliverySuppliedItem {
    return new SupplyDeliverySuppliedItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SupplyDeliverySuppliedItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISupplyDeliverySuppliedItem>): SupplyDeliverySuppliedItem {
    return new SupplyDeliverySuppliedItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SupplyDeliverySuppliedItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISupplyDeliverySuppliedItem) => Partial<ISupplyDeliverySuppliedItem>): SupplyDeliverySuppliedItem {
    const currentData = this.toJSON();
    return new SupplyDeliverySuppliedItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISupplyDeliverySuppliedItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISupplyDeliverySuppliedItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUPPLY_DELIVERY_SUPPLIED_ITEM_PROPERTIES);
    return result as ISupplyDeliverySuppliedItem;
  }

  /**
   * Create a deep clone of this SupplyDeliverySuppliedItem
   */
  clone(): SupplyDeliverySuppliedItem {
    return new SupplyDeliverySuppliedItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SupplyDeliverySuppliedItem
   */
  toString(): string {
    const parts: string[] = ['SupplyDeliverySuppliedItem'];
    return parts.join(', ');
  }
}
