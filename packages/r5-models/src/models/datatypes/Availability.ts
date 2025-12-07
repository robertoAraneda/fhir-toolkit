import { Element } from '../base/Element.js';
import type {
  IAvailability,
  IAvailabilityAvailableTime,
  IAvailabilityNotAvailableTime,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Availability */
const AVAILABILITY_PROPERTIES = [
  'availableTime',
  'notAvailableTime',
] as const;

/**
 * Availability - Availability data for an {item}.
 *
 * @see https://hl7.org/fhir/R4/availability.html
 *
 * @example
 * const availability = new Availability({
 *   // ... properties
 * });
 */
export class Availability extends Element implements IAvailability {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Times the {item} is available */
  availableTime?: IAvailabilityAvailableTime[];

  /** Not available during this time due to provided reason */
  notAvailableTime?: IAvailabilityNotAvailableTime[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAvailability>) {
    super(data);
    if (data) {
      this.assignProps(data, AVAILABILITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Availability from a JSON object
   */
  static fromJSON(json: IAvailability): Availability {
    return new Availability(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Availability with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAvailability>): Availability {
    return new Availability({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Availability by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAvailability) => Partial<IAvailability>): Availability {
    const currentData = this.toJSON();
    return new Availability({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAvailability)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAvailability {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, AVAILABILITY_PROPERTIES);
    return result as IAvailability;
  }

  /**
   * Create a deep clone of this Availability
   */
  clone(): Availability {
    return new Availability(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Availability
   */
  toString(): string {
    const parts: string[] = ['Availability'];
    return parts.join(', ');
  }
}
