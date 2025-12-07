import { Element } from '../base/Element.js';
import type {
  IDuration,
  IElement,
  QuantityComparatorType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Duration */
const DURATION_PROPERTIES = [
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
 * Duration - A length of time.
 *
 * @see https://hl7.org/fhir/R4/duration.html
 *
 * @example
 * const duration = new Duration({
 *   // ... properties
 * });
 */
export class Duration extends Element implements IDuration {

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

  constructor(data?: Partial<IDuration>) {
    super(data);
    if (data) {
      this.assignProps(data, DURATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Duration from a JSON object
   */
  static fromJSON(json: IDuration): Duration {
    return new Duration(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Duration with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDuration>): Duration {
    return new Duration({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Duration by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDuration) => Partial<IDuration>): Duration {
    const currentData = this.toJSON();
    return new Duration({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDuration)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDuration {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, DURATION_PROPERTIES);
    return result as IDuration;
  }

  /**
   * Create a deep clone of this Duration
   */
  clone(): Duration {
    return new Duration(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Duration
   */
  toString(): string {
    const parts: string[] = ['Duration'];
    return parts.join(', ');
  }
}
