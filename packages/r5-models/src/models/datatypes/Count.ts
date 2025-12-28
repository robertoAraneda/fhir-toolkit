import { Element } from '../base/Element.js';
import type {
  ICount,
  IElement,
  QuantityComparatorType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Count */
const COUNT_PROPERTIES = [
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
 * Count - A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 *
 * @see https://hl7.org/fhir/R5/count.html
 *
 * @example
 * const count = new Count({
 *   // ... properties
 * });
 */
export class Count extends Element implements ICount {

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

  constructor(data?: Partial<ICount>) {
    super(data);
    if (data) {
      this.assignProps(data, COUNT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Count from a JSON object
   */
  static fromJSON(json: ICount): Count {
    return new Count(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Count with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICount>): Count {
    return new Count({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Count by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICount) => Partial<ICount>): Count {
    const currentData = this.toJSON();
    return new Count({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICount)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICount {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, COUNT_PROPERTIES);
    return result as ICount;
  }

  /**
   * Create a deep clone of this Count
   */
  clone(): Count {
    return new Count(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Count
   */
  toString(): string {
    const parts: string[] = ['Count'];
    return parts.join(', ');
  }
}
