import { Element } from '../base/Element.js';
import type {
  IAge,
  IElement,
  QuantityComparatorType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Age */
const AGE_PROPERTIES = [
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
 * Age - A duration of time during which an organism (or a process) has existed.
 *
 * @see https://hl7.org/fhir/R5/age.html
 *
 * @example
 * const age = new Age({
 *   // ... properties
 * });
 */
export class Age extends Element implements IAge {

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

  constructor(data?: Partial<IAge>) {
    super(data);
    if (data) {
      this.assignProps(data, AGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Age from a JSON object
   */
  static fromJSON(json: IAge): Age {
    return new Age(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Age with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAge>): Age {
    return new Age({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Age by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAge) => Partial<IAge>): Age {
    const currentData = this.toJSON();
    return new Age({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAge)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAge {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, AGE_PROPERTIES);
    return result as IAge;
  }

  /**
   * Create a deep clone of this Age
   */
  clone(): Age {
    return new Age(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Age
   */
  toString(): string {
    const parts: string[] = ['Age'];
    return parts.join(', ');
  }
}
