import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ILocationPosition,
} from '@fhir-toolkit/r4-types';

/** Properties specific to LocationPosition */
const LOCATION_POSITION_PROPERTIES = [
  'longitude',
  '_longitude',
  'latitude',
  '_latitude',
  'altitude',
  '_altitude',
] as const;

/**
 * LocationPosition - The absolute geographic location
 *
 * @see https://hl7.org/fhir/R4/locationposition.html
 *
 * @example
 * const locationPosition = new LocationPosition({
 *   // ... properties
 * });
 */
export class LocationPosition extends BackboneElement implements ILocationPosition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Longitude with WGS84 datum */
  longitude: number;

  /** Extension for longitude */
  _longitude?: IElement;

  /** Latitude with WGS84 datum */
  latitude: number;

  /** Extension for latitude */
  _latitude?: IElement;

  /** Altitude with WGS84 datum */
  altitude?: number;

  /** Extension for altitude */
  _altitude?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ILocationPosition>) {
    super(data);
    if (data) {
      this.assignProps(data, LOCATION_POSITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create LocationPosition from a JSON object
   */
  static fromJSON(json: ILocationPosition): LocationPosition {
    return new LocationPosition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new LocationPosition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ILocationPosition>): LocationPosition {
    return new LocationPosition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new LocationPosition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ILocationPosition) => Partial<ILocationPosition>): LocationPosition {
    const currentData = this.toJSON();
    return new LocationPosition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ILocationPosition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ILocationPosition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, LOCATION_POSITION_PROPERTIES);
    return result as ILocationPosition;
  }

  /**
   * Create a deep clone of this LocationPosition
   */
  clone(): LocationPosition {
    return new LocationPosition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the LocationPosition
   */
  toString(): string {
    const parts: string[] = ['LocationPosition'];
    return parts.join(', ');
  }
}
