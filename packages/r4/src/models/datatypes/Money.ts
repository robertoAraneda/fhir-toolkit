import { Element } from '../base/Element.js';
import type {
  IElement,
  IMoney,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Money */
const MONEY_PROPERTIES = [
  'value',
  '_value',
  'currency',
  '_currency',
] as const;

/**
 * Money - An amount of economic utility in some recognized currency.
 *
 * @see https://hl7.org/fhir/R4/money.html
 *
 * @example
 * const money = new Money({
 *   // ... properties
 * });
 */
export class Money extends Element implements IMoney {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Numerical value (with implicit precision) */
  value?: number;

  /** Extension for value */
  _value?: IElement;

  /** ISO 4217 Currency Code */
  currency?: string;

  /** Extension for currency */
  _currency?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMoney>) {
    super(data);
    if (data) {
      this.assignProps(data, MONEY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Money from a JSON object
   */
  static fromJSON(json: IMoney): Money {
    return new Money(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Money with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMoney>): Money {
    return new Money({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Money by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMoney) => Partial<IMoney>): Money {
    const currentData = this.toJSON();
    return new Money({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMoney)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMoney {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, MONEY_PROPERTIES);
    return result as IMoney;
  }

  /**
   * Create a deep clone of this Money
   */
  clone(): Money {
    return new Money(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Money
   */
  toString(): string {
    const parts: string[] = ['Money'];
    return parts.join(', ');
  }
}
