import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DaysOfWeekType,
  IElement,
  ILocationHoursOfOperation,
} from '@fhir-toolkit/r4-types';

/** Properties specific to LocationHoursOfOperation */
const LOCATION_HOURS_OF_OPERATION_PROPERTIES = [
  'daysOfWeek',
  '_daysOfWeek',
  'allDay',
  '_allDay',
  'openingTime',
  '_openingTime',
  'closingTime',
  '_closingTime',
] as const;

/**
 * LocationHoursOfOperation - What days/times during a week is this location usually open
 *
 * @see https://hl7.org/fhir/R4/locationhoursofoperation.html
 *
 * @example
 * const locationHoursOfOperation = new LocationHoursOfOperation({
 *   // ... properties
 * });
 */
export class LocationHoursOfOperation extends BackboneElement implements ILocationHoursOfOperation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: DaysOfWeekType[];

  /** Extension for daysOfWeek */
  _daysOfWeek?: IElement;

  /** The Location is open all day */
  allDay?: boolean;

  /** Extension for allDay */
  _allDay?: IElement;

  /** Time that the Location opens */
  openingTime?: string;

  /** Extension for openingTime */
  _openingTime?: IElement;

  /** Time that the Location closes */
  closingTime?: string;

  /** Extension for closingTime */
  _closingTime?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ILocationHoursOfOperation>) {
    super(data);
    if (data) {
      this.assignProps(data, LOCATION_HOURS_OF_OPERATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create LocationHoursOfOperation from a JSON object
   */
  static fromJSON(json: ILocationHoursOfOperation): LocationHoursOfOperation {
    return new LocationHoursOfOperation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new LocationHoursOfOperation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ILocationHoursOfOperation>): LocationHoursOfOperation {
    return new LocationHoursOfOperation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new LocationHoursOfOperation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ILocationHoursOfOperation) => Partial<ILocationHoursOfOperation>): LocationHoursOfOperation {
    const currentData = this.toJSON();
    return new LocationHoursOfOperation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ILocationHoursOfOperation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ILocationHoursOfOperation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, LOCATION_HOURS_OF_OPERATION_PROPERTIES);
    return result as ILocationHoursOfOperation;
  }

  /**
   * Create a deep clone of this LocationHoursOfOperation
   */
  clone(): LocationHoursOfOperation {
    return new LocationHoursOfOperation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the LocationHoursOfOperation
   */
  toString(): string {
    const parts: string[] = ['LocationHoursOfOperation'];
    return parts.join(', ');
  }
}
