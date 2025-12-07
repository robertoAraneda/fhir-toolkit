import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  IAnnotation,
  ICodeableConcept,
  IDuration,
  IElement,
  IInventoryItemCharacteristic,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r5-types';

/** Properties specific to InventoryItemCharacteristic */
const INVENTORY_ITEM_CHARACTERISTIC_PROPERTIES = [
  'characteristicType',
  'valueString',
  '_valueString',
  'valueInteger',
  '_valueInteger',
  'valueDecimal',
  '_valueDecimal',
  'valueBoolean',
  '_valueBoolean',
  'valueUrl',
  '_valueUrl',
  'valueDateTime',
  '_valueDateTime',
  'valueQuantity',
  'valueRange',
  'valueRatio',
  'valueAnnotation',
  'valueAddress',
  'valueDuration',
  'valueCodeableConcept',
] as const;

/**
 * InventoryItemCharacteristic - Characteristic of the item
 *
 * @see https://hl7.org/fhir/R4/inventoryitemcharacteristic.html
 *
 * @example
 * const inventoryItemCharacteristic = new InventoryItemCharacteristic({
 *   // ... properties
 * });
 */
export class InventoryItemCharacteristic extends BackboneElement implements IInventoryItemCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The characteristic that is being defined */
  characteristicType: ICodeableConcept;

  /** The value of the attribute */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** The value of the attribute */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** The value of the attribute */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** The value of the attribute */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** The value of the attribute */
  valueUrl?: string;

  /** Extension for valueUrl */
  _valueUrl?: IElement;

  /** The value of the attribute */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** The value of the attribute */
  valueQuantity?: IQuantity;

  /** The value of the attribute */
  valueRange?: IRange;

  /** The value of the attribute */
  valueRatio?: IRatio;

  /** The value of the attribute */
  valueAnnotation?: IAnnotation;

  /** The value of the attribute */
  valueAddress?: IAddress;

  /** The value of the attribute */
  valueDuration?: IDuration;

  /** The value of the attribute */
  valueCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInventoryItemCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, INVENTORY_ITEM_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InventoryItemCharacteristic from a JSON object
   */
  static fromJSON(json: IInventoryItemCharacteristic): InventoryItemCharacteristic {
    return new InventoryItemCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InventoryItemCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInventoryItemCharacteristic>): InventoryItemCharacteristic {
    return new InventoryItemCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InventoryItemCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInventoryItemCharacteristic) => Partial<IInventoryItemCharacteristic>): InventoryItemCharacteristic {
    const currentData = this.toJSON();
    return new InventoryItemCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInventoryItemCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInventoryItemCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVENTORY_ITEM_CHARACTERISTIC_PROPERTIES);
    return result as IInventoryItemCharacteristic;
  }

  /**
   * Create a deep clone of this InventoryItemCharacteristic
   */
  clone(): InventoryItemCharacteristic {
    return new InventoryItemCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InventoryItemCharacteristic
   */
  toString(): string {
    const parts: string[] = ['InventoryItemCharacteristic'];
    return parts.join(', ');
  }
}
