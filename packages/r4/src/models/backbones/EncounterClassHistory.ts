import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IEncounterClassHistory,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EncounterClassHistory */
const ENCOUNTER_CLASS_HISTORY_PROPERTIES = [
  'class',
  'period',
] as const;

/**
 * EncounterClassHistory - List of past encounter classes
 *
 * @see https://hl7.org/fhir/R4/encounterclasshistory.html
 *
 * @example
 * const encounterClassHistory = new EncounterClassHistory({
 *   // ... properties
 * });
 */
export class EncounterClassHistory extends BackboneElement implements IEncounterClassHistory {

  // ============================================================================
  // Properties
  // ============================================================================

  /** inpatient | outpatient | ambulatory | emergency + */
  class: ICoding;

  /** The time that the episode was in the specified class */
  period: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterClassHistory>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_CLASS_HISTORY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterClassHistory from a JSON object
   */
  static fromJSON(json: IEncounterClassHistory): EncounterClassHistory {
    return new EncounterClassHistory(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterClassHistory with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterClassHistory>): EncounterClassHistory {
    return new EncounterClassHistory({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterClassHistory by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterClassHistory) => Partial<IEncounterClassHistory>): EncounterClassHistory {
    const currentData = this.toJSON();
    return new EncounterClassHistory({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterClassHistory)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterClassHistory {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_CLASS_HISTORY_PROPERTIES);
    return result as IEncounterClassHistory;
  }

  /**
   * Create a deep clone of this EncounterClassHistory
   */
  clone(): EncounterClassHistory {
    return new EncounterClassHistory(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterClassHistory
   */
  toString(): string {
    const parts: string[] = ['EncounterClassHistory'];
    return parts.join(', ');
  }
}
