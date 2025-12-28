import { Element } from '../base/Element.js';
import type {
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Range */
const RANGE_PROPERTIES = [
  'low',
  'high',
] as const;

/**
 * Range - A set of ordered Quantities defined by a low and high limit.
 *
 * @see https://hl7.org/fhir/R5/range.html
 *
 * @example
 * const range = new Range({
 *   // ... properties
 * });
 */
export class Range extends Element implements IRange {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Low limit */
  low?: IQuantity;

  /** High limit */
  high?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRange>) {
    super(data);
    if (data) {
      this.assignProps(data, RANGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Range from a JSON object
   */
  static fromJSON(json: IRange): Range {
    return new Range(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Range with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRange>): Range {
    return new Range({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Range by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRange) => Partial<IRange>): Range {
    const currentData = this.toJSON();
    return new Range({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRange)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRange {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, RANGE_PROPERTIES);
    return result as IRange;
  }

  /**
   * Create a deep clone of this Range
   */
  clone(): Range {
    return new Range(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Range
   */
  toString(): string {
    const parts: string[] = ['Range'];
    return parts.join(', ');
  }
}
