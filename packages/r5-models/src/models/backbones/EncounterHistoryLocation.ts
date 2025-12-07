import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IEncounterHistoryLocation,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EncounterHistoryLocation */
const ENCOUNTER_HISTORY_LOCATION_PROPERTIES = [
  'location',
  'form',
] as const;

/**
 * EncounterHistoryLocation - Location of the patient at this point in the encounter
 *
 * @see https://hl7.org/fhir/R4/encounterhistorylocation.html
 *
 * @example
 * const encounterHistoryLocation = new EncounterHistoryLocation({
 *   // ... properties
 * });
 */
export class EncounterHistoryLocation extends BackboneElement implements IEncounterHistoryLocation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Location the encounter takes place */
  location: IReference<'Location'>;

  /** The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.) */
  form?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterHistoryLocation>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_HISTORY_LOCATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterHistoryLocation from a JSON object
   */
  static fromJSON(json: IEncounterHistoryLocation): EncounterHistoryLocation {
    return new EncounterHistoryLocation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterHistoryLocation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterHistoryLocation>): EncounterHistoryLocation {
    return new EncounterHistoryLocation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterHistoryLocation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterHistoryLocation) => Partial<IEncounterHistoryLocation>): EncounterHistoryLocation {
    const currentData = this.toJSON();
    return new EncounterHistoryLocation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterHistoryLocation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterHistoryLocation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_HISTORY_LOCATION_PROPERTIES);
    return result as IEncounterHistoryLocation;
  }

  /**
   * Create a deep clone of this EncounterHistoryLocation
   */
  clone(): EncounterHistoryLocation {
    return new EncounterHistoryLocation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterHistoryLocation
   */
  toString(): string {
    const parts: string[] = ['EncounterHistoryLocation'];
    return parts.join(', ');
  }
}
