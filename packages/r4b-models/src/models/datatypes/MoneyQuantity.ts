import { Element } from '../base/Element.js';
import type {
  IElement,
  IExtension,
  IMoneyQuantity,
  QuantityComparatorType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MoneyQuantity */
const MONEY_QUANTITY_PROPERTIES = [
  'id',
  'extension',
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
 * MoneyQuantity - There SHALL be a code if there is a value and it SHALL be an expression of currency.  If system is present, it SHALL be ISO 4217 (system = "urn:iso:std:iso:4217" - currency).
 *
 * @see https://hl7.org/fhir/R4/moneyquantity.html
 *
 * @example
 * const moneyQuantity = new MoneyQuantity({
 *   // ... properties
 * });
 */
export class MoneyQuantity extends Element implements IMoneyQuantity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Numerical value (with implicit precision) */
  value?: number;

  /** Extension for value */
  _value?: IElement;

  /** < | <= | >= | > - how to understand the value */
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

  constructor(data?: Partial<IMoneyQuantity>) {
    super(data);
    if (data) {
      this.assignProps(data, MONEY_QUANTITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MoneyQuantity from a JSON object
   */
  static fromJSON(json: IMoneyQuantity): MoneyQuantity {
    return new MoneyQuantity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MoneyQuantity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMoneyQuantity>): MoneyQuantity {
    return new MoneyQuantity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MoneyQuantity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMoneyQuantity) => Partial<IMoneyQuantity>): MoneyQuantity {
    const currentData = this.toJSON();
    return new MoneyQuantity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMoneyQuantity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMoneyQuantity {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, MONEY_QUANTITY_PROPERTIES);
    return result as IMoneyQuantity;
  }

  /**
   * Create a deep clone of this MoneyQuantity
   */
  clone(): MoneyQuantity {
    return new MoneyQuantity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MoneyQuantity
   */
  toString(): string {
    const parts: string[] = ['MoneyQuantity'];
    return parts.join(', ');
  }
}
