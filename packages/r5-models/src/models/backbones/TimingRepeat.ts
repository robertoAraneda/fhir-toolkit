import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DaysOfWeekType,
  EventTimingType,
  IDuration,
  IElement,
  IPeriod,
  IRange,
  ITimingRepeat,
  UnitsOfTimeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TimingRepeat */
const TIMING_REPEAT_PROPERTIES = [
  'boundsDuration',
  'boundsRange',
  'boundsPeriod',
  'count',
  '_count',
  'countMax',
  '_countMax',
  'duration',
  '_duration',
  'durationMax',
  '_durationMax',
  'durationUnit',
  '_durationUnit',
  'frequency',
  '_frequency',
  'frequencyMax',
  '_frequencyMax',
  'period',
  '_period',
  'periodMax',
  '_periodMax',
  'periodUnit',
  '_periodUnit',
  'dayOfWeek',
  '_dayOfWeek',
  'timeOfDay',
  '_timeOfDay',
  'when',
  '_when',
  'offset',
  '_offset',
] as const;

/**
 * TimingRepeat - When the event is to occur
 *
 * @see https://hl7.org/fhir/R5/timingrepeat.html
 *
 * @example
 * const timingRepeat = new TimingRepeat({
 *   // ... properties
 * });
 */
export class TimingRepeat extends BackboneElement implements ITimingRepeat {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Length/Range of lengths, or (Start and/or end) limits */
  boundsDuration?: IDuration;

  /** Length/Range of lengths, or (Start and/or end) limits */
  boundsRange?: IRange;

  /** Length/Range of lengths, or (Start and/or end) limits */
  boundsPeriod?: IPeriod;

  /** Number of times to repeat */
  count?: number;

  /** Extension for count */
  _count?: IElement;

  /** Maximum number of times to repeat */
  countMax?: number;

  /** Extension for countMax */
  _countMax?: IElement;

  /** How long when it happens */
  duration?: number;

  /** Extension for duration */
  _duration?: IElement;

  /** How long when it happens (Max) */
  durationMax?: number;

  /** Extension for durationMax */
  _durationMax?: IElement;

  /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
  durationUnit?: UnitsOfTimeType;

  /** Extension for durationUnit */
  _durationUnit?: IElement;

  /** Indicates the number of repetitions that should occur within a period. I.e. Event occurs frequency times per period */
  frequency?: number;

  /** Extension for frequency */
  _frequency?: IElement;

  /** Event occurs up to frequencyMax times per period */
  frequencyMax?: number;

  /** Extension for frequencyMax */
  _frequencyMax?: IElement;

  /** The duration to which the frequency applies. I.e. Event occurs frequency times per period */
  period?: number;

  /** Extension for period */
  _period?: IElement;

  /** Upper limit of period (3-4 hours) */
  periodMax?: number;

  /** Extension for periodMax */
  _periodMax?: IElement;

  /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
  periodUnit?: UnitsOfTimeType;

  /** Extension for periodUnit */
  _periodUnit?: IElement;

  /** mon | tue | wed | thu | fri | sat | sun */
  dayOfWeek?: DaysOfWeekType[];

  /** Extension for dayOfWeek */
  _dayOfWeek?: IElement;

  /** Time of day for action */
  timeOfDay?: string[];

  /** Extension for timeOfDay */
  _timeOfDay?: IElement;

  /** Code for time period of occurrence */
  when?: EventTimingType[];

  /** Extension for when */
  _when?: IElement;

  /** Minutes from event (before or after) */
  offset?: number;

  /** Extension for offset */
  _offset?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITimingRepeat>) {
    super(data);
    if (data) {
      this.assignProps(data, TIMING_REPEAT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TimingRepeat from a JSON object
   */
  static fromJSON(json: ITimingRepeat): TimingRepeat {
    return new TimingRepeat(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TimingRepeat with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITimingRepeat>): TimingRepeat {
    return new TimingRepeat({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TimingRepeat by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITimingRepeat) => Partial<ITimingRepeat>): TimingRepeat {
    const currentData = this.toJSON();
    return new TimingRepeat({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITimingRepeat)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITimingRepeat {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TIMING_REPEAT_PROPERTIES);
    return result as ITimingRepeat;
  }

  /**
   * Create a deep clone of this TimingRepeat
   */
  clone(): TimingRepeat {
    return new TimingRepeat(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TimingRepeat
   */
  toString(): string {
    const parts: string[] = ['TimingRepeat'];
    return parts.join(', ');
  }
}
