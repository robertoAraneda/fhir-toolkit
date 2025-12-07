import { Element } from '../base/Element.js';
import type {
  IDistance,
  IElement,
  QuantityComparatorType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Distance */
const DISTANCE_PROPERTIES = [
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
 * Distance - A length - a value with a unit that is a physical distance.
 *
 * @see https://hl7.org/fhir/R4/distance.html
 *
 * @example
 * const distance = new Distance({
 *   // ... properties
 * });
 */
export class Distance extends Element implements IDistance {

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

  constructor(data?: Partial<IDistance>) {
    super(data);
    if (data) {
      this.assignProps(data, DISTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Distance from a JSON object
   */
  static fromJSON(json: IDistance): Distance {
    return new Distance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Distance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDistance>): Distance {
    return new Distance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Distance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDistance) => Partial<IDistance>): Distance {
    const currentData = this.toJSON();
    return new Distance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDistance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDistance {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, DISTANCE_PROPERTIES);
    return result as IDistance;
  }

  /**
   * Create a deep clone of this Distance
   */
  clone(): Distance {
    return new Distance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Distance
   */
  toString(): string {
    const parts: string[] = ['Distance'];
    return parts.join(', ');
  }
}
