import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IElement,
  ITiming,
  ITimingRepeat,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Timing */
const TIMING_PROPERTIES = [
  'event',
  '_event',
  'repeat',
  'code',
] as const;

/**
 * Timing - Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 *
 * @see https://hl7.org/fhir/R4/timing.html
 *
 * @example
 * const timing = new Timing({
 *   // ... properties
 * });
 */
export class Timing extends Element implements ITiming {

  // ============================================================================
  // Properties
  // ============================================================================

  /** When the event occurs */
  event?: string[];

  /** Extension for event */
  _event?: IElement;

  /** When the event is to occur */
  repeat?: ITimingRepeat;

  /** BID | TID | QID | AM | PM | QD | QOD | + */
  code?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITiming>) {
    super(data);
    if (data) {
      this.assignProps(data, TIMING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Timing from a JSON object
   */
  static fromJSON(json: ITiming): Timing {
    return new Timing(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Timing with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITiming>): Timing {
    return new Timing({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Timing by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITiming) => Partial<ITiming>): Timing {
    const currentData = this.toJSON();
    return new Timing({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITiming)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITiming {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, TIMING_PROPERTIES);
    return result as ITiming;
  }

  /**
   * Create a deep clone of this Timing
   */
  clone(): Timing {
    return new Timing(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Timing
   */
  toString(): string {
    const parts: string[] = ['Timing'];
    return parts.join(', ');
  }
}
