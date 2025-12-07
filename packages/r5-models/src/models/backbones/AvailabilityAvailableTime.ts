import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DaysOfWeekType,
  IAvailabilityAvailableTime,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AvailabilityAvailableTime */
const AVAILABILITY_AVAILABLE_TIME_PROPERTIES = [
  'daysOfWeek',
  '_daysOfWeek',
  'allDay',
  '_allDay',
  'availableStartTime',
  '_availableStartTime',
  'availableEndTime',
  '_availableEndTime',
] as const;

/**
 * AvailabilityAvailableTime - Times the {item} is available
 *
 * @see https://hl7.org/fhir/R4/availabilityavailabletime.html
 *
 * @example
 * const availabilityAvailableTime = new AvailabilityAvailableTime({
 *   // ... properties
 * });
 */
export class AvailabilityAvailableTime extends BackboneElement implements IAvailabilityAvailableTime {

  // ============================================================================
  // Properties
  // ============================================================================

  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: DaysOfWeekType[];

  /** Extension for daysOfWeek */
  _daysOfWeek?: IElement;

  /** Always available? i.e. 24 hour service */
  allDay?: boolean;

  /** Extension for allDay */
  _allDay?: IElement;

  /** Opening time of day (ignored if allDay = true) */
  availableStartTime?: string;

  /** Extension for availableStartTime */
  _availableStartTime?: IElement;

  /** Closing time of day (ignored if allDay = true) */
  availableEndTime?: string;

  /** Extension for availableEndTime */
  _availableEndTime?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAvailabilityAvailableTime>) {
    super(data);
    if (data) {
      this.assignProps(data, AVAILABILITY_AVAILABLE_TIME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AvailabilityAvailableTime from a JSON object
   */
  static fromJSON(json: IAvailabilityAvailableTime): AvailabilityAvailableTime {
    return new AvailabilityAvailableTime(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AvailabilityAvailableTime with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAvailabilityAvailableTime>): AvailabilityAvailableTime {
    return new AvailabilityAvailableTime({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AvailabilityAvailableTime by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAvailabilityAvailableTime) => Partial<IAvailabilityAvailableTime>): AvailabilityAvailableTime {
    const currentData = this.toJSON();
    return new AvailabilityAvailableTime({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAvailabilityAvailableTime)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAvailabilityAvailableTime {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, AVAILABILITY_AVAILABLE_TIME_PROPERTIES);
    return result as IAvailabilityAvailableTime;
  }

  /**
   * Create a deep clone of this AvailabilityAvailableTime
   */
  clone(): AvailabilityAvailableTime {
    return new AvailabilityAvailableTime(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AvailabilityAvailableTime
   */
  toString(): string {
    const parts: string[] = ['AvailabilityAvailableTime'];
    return parts.join(', ');
  }
}
