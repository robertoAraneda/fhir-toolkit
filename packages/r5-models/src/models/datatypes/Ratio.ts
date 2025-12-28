import { Element } from '../base/Element.js';
import type {
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Ratio */
const RATIO_PROPERTIES = [
  'numerator',
  'denominator',
] as const;

/**
 * Ratio - A relationship of two Quantity values - expressed as a numerator and a denominator.
 *
 * @see https://hl7.org/fhir/R5/ratio.html
 *
 * @example
 * const ratio = new Ratio({
 *   // ... properties
 * });
 */
export class Ratio extends Element implements IRatio {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Numerator value */
  numerator?: IQuantity;

  /** Denominator value */
  denominator?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRatio>) {
    super(data);
    if (data) {
      this.assignProps(data, RATIO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Ratio from a JSON object
   */
  static fromJSON(json: IRatio): Ratio {
    return new Ratio(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Ratio with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRatio>): Ratio {
    return new Ratio({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Ratio by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRatio) => Partial<IRatio>): Ratio {
    const currentData = this.toJSON();
    return new Ratio({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRatio)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRatio {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, RATIO_PROPERTIES);
    return result as IRatio;
  }

  /**
   * Create a deep clone of this Ratio
   */
  clone(): Ratio {
    return new Ratio(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Ratio
   */
  toString(): string {
    const parts: string[] = ['Ratio'];
    return parts.join(', ');
  }
}
