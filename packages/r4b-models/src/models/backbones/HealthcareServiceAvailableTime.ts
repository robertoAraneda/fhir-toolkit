import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DaysOfWeekType,
  IElement,
  IHealthcareServiceAvailableTime,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to HealthcareServiceAvailableTime */
const HEALTHCARE_SERVICE_AVAILABLE_TIME_PROPERTIES = [
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
 * HealthcareServiceAvailableTime - Times the Service Site is available
 *
 * @see https://hl7.org/fhir/R4/healthcareserviceavailabletime.html
 *
 * @example
 * const healthcareServiceAvailableTime = new HealthcareServiceAvailableTime({
 *   // ... properties
 * });
 */
export class HealthcareServiceAvailableTime extends BackboneElement implements IHealthcareServiceAvailableTime {

  // ============================================================================
  // Properties
  // ============================================================================

  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: DaysOfWeekType[];

  /** Extension for daysOfWeek */
  _daysOfWeek?: IElement;

  /** Always available? e.g. 24 hour service */
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

  constructor(data?: Partial<IHealthcareServiceAvailableTime>) {
    super(data);
    if (data) {
      this.assignProps(data, HEALTHCARE_SERVICE_AVAILABLE_TIME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create HealthcareServiceAvailableTime from a JSON object
   */
  static fromJSON(json: IHealthcareServiceAvailableTime): HealthcareServiceAvailableTime {
    return new HealthcareServiceAvailableTime(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new HealthcareServiceAvailableTime with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IHealthcareServiceAvailableTime>): HealthcareServiceAvailableTime {
    return new HealthcareServiceAvailableTime({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new HealthcareServiceAvailableTime by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IHealthcareServiceAvailableTime) => Partial<IHealthcareServiceAvailableTime>): HealthcareServiceAvailableTime {
    const currentData = this.toJSON();
    return new HealthcareServiceAvailableTime({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IHealthcareServiceAvailableTime)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IHealthcareServiceAvailableTime {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, HEALTHCARE_SERVICE_AVAILABLE_TIME_PROPERTIES);
    return result as IHealthcareServiceAvailableTime;
  }

  /**
   * Create a deep clone of this HealthcareServiceAvailableTime
   */
  clone(): HealthcareServiceAvailableTime {
    return new HealthcareServiceAvailableTime(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the HealthcareServiceAvailableTime
   */
  toString(): string {
    const parts: string[] = ['HealthcareServiceAvailableTime'];
    return parts.join(', ');
  }
}
