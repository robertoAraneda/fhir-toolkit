import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DaysOfWeekType,
  IElement,
  IPractitionerRoleAvailableTime,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PractitionerRoleAvailableTime */
const PRACTITIONER_ROLE_AVAILABLE_TIME_PROPERTIES = [
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
 * PractitionerRoleAvailableTime - Times the Service Site is available
 *
 * @see https://hl7.org/fhir/R4/practitionerroleavailabletime.html
 *
 * @example
 * const practitionerRoleAvailableTime = new PractitionerRoleAvailableTime({
 *   // ... properties
 * });
 */
export class PractitionerRoleAvailableTime extends BackboneElement implements IPractitionerRoleAvailableTime {

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

  constructor(data?: Partial<IPractitionerRoleAvailableTime>) {
    super(data);
    if (data) {
      this.assignProps(data, PRACTITIONER_ROLE_AVAILABLE_TIME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PractitionerRoleAvailableTime from a JSON object
   */
  static fromJSON(json: IPractitionerRoleAvailableTime): PractitionerRoleAvailableTime {
    return new PractitionerRoleAvailableTime(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PractitionerRoleAvailableTime with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPractitionerRoleAvailableTime>): PractitionerRoleAvailableTime {
    return new PractitionerRoleAvailableTime({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PractitionerRoleAvailableTime by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPractitionerRoleAvailableTime) => Partial<IPractitionerRoleAvailableTime>): PractitionerRoleAvailableTime {
    const currentData = this.toJSON();
    return new PractitionerRoleAvailableTime({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPractitionerRoleAvailableTime)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPractitionerRoleAvailableTime {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PRACTITIONER_ROLE_AVAILABLE_TIME_PROPERTIES);
    return result as IPractitionerRoleAvailableTime;
  }

  /**
   * Create a deep clone of this PractitionerRoleAvailableTime
   */
  clone(): PractitionerRoleAvailableTime {
    return new PractitionerRoleAvailableTime(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PractitionerRoleAvailableTime
   */
  toString(): string {
    const parts: string[] = ['PractitionerRoleAvailableTime'];
    return parts.join(', ');
  }
}
