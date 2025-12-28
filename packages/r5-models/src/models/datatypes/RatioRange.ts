import { Element } from '../base/Element.js';
import type {
  IQuantity,
  IRatioRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RatioRange */
const RATIO_RANGE_PROPERTIES = [
  'lowNumerator',
  'highNumerator',
  'denominator',
] as const;

/**
 * RatioRange - A range of ratios expressed as a low and high numerator and a denominator.
 *
 * @see https://hl7.org/fhir/R5/ratiorange.html
 *
 * @example
 * const ratioRange = new RatioRange({
 *   // ... properties
 * });
 */
export class RatioRange extends Element implements IRatioRange {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Low Numerator limit */
  lowNumerator?: IQuantity;

  /** High Numerator limit */
  highNumerator?: IQuantity;

  /** Denominator value */
  denominator?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRatioRange>) {
    super(data);
    if (data) {
      this.assignProps(data, RATIO_RANGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RatioRange from a JSON object
   */
  static fromJSON(json: IRatioRange): RatioRange {
    return new RatioRange(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RatioRange with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRatioRange>): RatioRange {
    return new RatioRange({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RatioRange by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRatioRange) => Partial<IRatioRange>): RatioRange {
    const currentData = this.toJSON();
    return new RatioRange({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRatioRange)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRatioRange {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, RATIO_RANGE_PROPERTIES);
    return result as IRatioRange;
  }

  /**
   * Create a deep clone of this RatioRange
   */
  clone(): RatioRange {
    return new RatioRange(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RatioRange
   */
  toString(): string {
    const parts: string[] = ['RatioRange'];
    return parts.join(', ');
  }
}
