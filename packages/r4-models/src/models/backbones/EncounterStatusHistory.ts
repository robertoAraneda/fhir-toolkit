import { BackboneElement } from '../base/BackboneElement.js';
import type {
  EncounterStatusType,
  IElement,
  IEncounterStatusHistory,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EncounterStatusHistory */
const ENCOUNTER_STATUS_HISTORY_PROPERTIES = [
  'status',
  '_status',
  'period',
] as const;

/**
 * EncounterStatusHistory - List of past encounter statuses
 *
 * @see https://hl7.org/fhir/R4/encounterstatushistory.html
 *
 * @example
 * const encounterStatusHistory = new EncounterStatusHistory({
 *   // ... properties
 * });
 */
export class EncounterStatusHistory extends BackboneElement implements IEncounterStatusHistory {

  // ============================================================================
  // Properties
  // ============================================================================

  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
  status: EncounterStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The time that the episode was in the specified status */
  period: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterStatusHistory>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_STATUS_HISTORY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterStatusHistory from a JSON object
   */
  static fromJSON(json: IEncounterStatusHistory): EncounterStatusHistory {
    return new EncounterStatusHistory(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterStatusHistory with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterStatusHistory>): EncounterStatusHistory {
    return new EncounterStatusHistory({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterStatusHistory by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterStatusHistory) => Partial<IEncounterStatusHistory>): EncounterStatusHistory {
    const currentData = this.toJSON();
    return new EncounterStatusHistory({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterStatusHistory)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterStatusHistory {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_STATUS_HISTORY_PROPERTIES);
    return result as IEncounterStatusHistory;
  }

  /**
   * Create a deep clone of this EncounterStatusHistory
   */
  clone(): EncounterStatusHistory {
    return new EncounterStatusHistory(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterStatusHistory
   */
  toString(): string {
    const parts: string[] = ['EncounterStatusHistory'];
    return parts.join(', ');
  }
}
