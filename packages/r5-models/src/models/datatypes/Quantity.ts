import { Element } from '../base/Element.js';
import type {
  IElement,
  IQuantity,
  QuantityComparatorType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Quantity */
const QUANTITY_PROPERTIES = [
  'value',
  '_value',
  'comparator',
  '_comparator',
  'unit',
  '_unit',
  'system',
  '_system',
  'code',
  '_code',
] as const;

/**
 * Quantity - A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 *
 * @see https://hl7.org/fhir/R4/quantity.html
 *
 * @example
 * const quantity = new Quantity({
 *   // ... properties
 * });
 */
export class Quantity extends Element implements IQuantity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Numerical value (with implicit precision) */
  value?: number;

  /** Extension for value */
  _value?: IElement;

  /** < | <= | >= | > | ad - how to understand the value */
  comparator?: QuantityComparatorType;

  /** Extension for comparator */
  _comparator?: IElement;

  /** Unit representation */
  unit?: string;

  /** Extension for unit */
  _unit?: IElement;

  /** System that defines coded unit form */
  system?: string;

  /** Extension for system */
  _system?: IElement;

  /** Coded form of the unit */
  code?: string;

  /** Extension for code */
  _code?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IQuantity>) {
    super(data);
    if (data) {
      this.assignProps(data, QUANTITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Quantity from a JSON object
   */
  static fromJSON(json: IQuantity): Quantity {
    return new Quantity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Quantity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IQuantity>): Quantity {
    return new Quantity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Quantity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IQuantity) => Partial<IQuantity>): Quantity {
    const currentData = this.toJSON();
    return new Quantity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IQuantity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IQuantity {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, QUANTITY_PROPERTIES);
    return result as IQuantity;
  }

  /**
   * Create a deep clone of this Quantity
   */
  clone(): Quantity {
    return new Quantity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Quantity
   */
  toString(): string {
    const parts: string[] = ['Quantity'];
    return parts.join(', ');
  }
}
