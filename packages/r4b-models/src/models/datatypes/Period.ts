import { Element } from '../base/Element.js';
import type {
  IElement,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Period */
const PERIOD_PROPERTIES = [
  'start',
  '_start',
  'end',
  '_end',
] as const;

/**
 * Period - A time period defined by a start and end date and optionally time.
 *
 * @see https://hl7.org/fhir/R4/period.html
 *
 * @example
 * const period = new Period({
 *   // ... properties
 * });
 */
export class Period extends Element implements IPeriod {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Starting time with inclusive boundary */
  start?: string;

  /** Extension for start */
  _start?: IElement;

  /** End time with inclusive boundary, if not ongoing */
  end?: string;

  /** Extension for end */
  _end?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPeriod>) {
    super(data);
    if (data) {
      this.assignProps(data, PERIOD_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Period from a JSON object
   */
  static fromJSON(json: IPeriod): Period {
    return new Period(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Period with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPeriod>): Period {
    return new Period({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Period by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPeriod) => Partial<IPeriod>): Period {
    const currentData = this.toJSON();
    return new Period({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPeriod)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPeriod {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, PERIOD_PROPERTIES);
    return result as IPeriod;
  }

  /**
   * Create a deep clone of this Period
   */
  clone(): Period {
    return new Period(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Period
   */
  toString(): string {
    const parts: string[] = ['Period'];
    return parts.join(', ');
  }
}
