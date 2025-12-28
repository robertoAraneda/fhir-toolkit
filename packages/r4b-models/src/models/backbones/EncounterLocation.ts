import { BackboneElement } from '../base/BackboneElement.js';
import type {
  EncounterLocationStatusType,
  ICodeableConcept,
  IElement,
  IEncounterLocation,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EncounterLocation */
const ENCOUNTER_LOCATION_PROPERTIES = [
  'location',
  'status',
  '_status',
  'physicalType',
  'period',
] as const;

/**
 * EncounterLocation - List of locations where the patient has been
 *
 * @see https://hl7.org/fhir/R4B/encounterlocation.html
 *
 * @example
 * const encounterLocation = new EncounterLocation({
 *   // ... properties
 * });
 */
export class EncounterLocation extends BackboneElement implements IEncounterLocation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Location the encounter takes place */
  location: IReference<'Location'>;

  /** planned | active | reserved | completed */
  status?: EncounterLocationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The physical type of the location (usually the level in the location hierachy - bed room ward etc.) */
  physicalType?: ICodeableConcept;

  /** Time period during which the patient was present at the location */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterLocation>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_LOCATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterLocation from a JSON object
   */
  static fromJSON(json: IEncounterLocation): EncounterLocation {
    return new EncounterLocation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterLocation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterLocation>): EncounterLocation {
    return new EncounterLocation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterLocation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterLocation) => Partial<IEncounterLocation>): EncounterLocation {
    const currentData = this.toJSON();
    return new EncounterLocation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterLocation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterLocation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_LOCATION_PROPERTIES);
    return result as IEncounterLocation;
  }

  /**
   * Create a deep clone of this EncounterLocation
   */
  clone(): EncounterLocation {
    return new EncounterLocation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterLocation
   */
  toString(): string {
    const parts: string[] = ['EncounterLocation'];
    return parts.join(', ');
  }
}
