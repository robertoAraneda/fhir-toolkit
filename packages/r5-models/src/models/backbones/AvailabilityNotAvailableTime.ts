import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAvailabilityNotAvailableTime,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AvailabilityNotAvailableTime */
const AVAILABILITY_NOT_AVAILABLE_TIME_PROPERTIES = [
  'description',
  '_description',
  'during',
] as const;

/**
 * AvailabilityNotAvailableTime - Not available during this time due to provided reason
 *
 * @see https://hl7.org/fhir/R4/availabilitynotavailabletime.html
 *
 * @example
 * const availabilityNotAvailableTime = new AvailabilityNotAvailableTime({
 *   // ... properties
 * });
 */
export class AvailabilityNotAvailableTime extends BackboneElement implements IAvailabilityNotAvailableTime {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reason presented to the user explaining why time not available */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Service not available during this period */
  during?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAvailabilityNotAvailableTime>) {
    super(data);
    if (data) {
      this.assignProps(data, AVAILABILITY_NOT_AVAILABLE_TIME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AvailabilityNotAvailableTime from a JSON object
   */
  static fromJSON(json: IAvailabilityNotAvailableTime): AvailabilityNotAvailableTime {
    return new AvailabilityNotAvailableTime(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AvailabilityNotAvailableTime with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAvailabilityNotAvailableTime>): AvailabilityNotAvailableTime {
    return new AvailabilityNotAvailableTime({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AvailabilityNotAvailableTime by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAvailabilityNotAvailableTime) => Partial<IAvailabilityNotAvailableTime>): AvailabilityNotAvailableTime {
    const currentData = this.toJSON();
    return new AvailabilityNotAvailableTime({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAvailabilityNotAvailableTime)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAvailabilityNotAvailableTime {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, AVAILABILITY_NOT_AVAILABLE_TIME_PROPERTIES);
    return result as IAvailabilityNotAvailableTime;
  }

  /**
   * Create a deep clone of this AvailabilityNotAvailableTime
   */
  clone(): AvailabilityNotAvailableTime {
    return new AvailabilityNotAvailableTime(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AvailabilityNotAvailableTime
   */
  toString(): string {
    const parts: string[] = ['AvailabilityNotAvailableTime'];
    return parts.join(', ');
  }
}
