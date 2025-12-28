import { BackboneElement } from '../base/BackboneElement.js';
import type {
  EpisodeOfCareStatusType,
  IElement,
  IEpisodeOfCareStatusHistory,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EpisodeOfCareStatusHistory */
const EPISODE_OF_CARE_STATUS_HISTORY_PROPERTIES = [
  'status',
  '_status',
  'period',
] as const;

/**
 * EpisodeOfCareStatusHistory - Past list of status codes (the current status may be included to cover the start date of the status)
 *
 * @see https://hl7.org/fhir/R4B/episodeofcarestatushistory.html
 *
 * @example
 * const episodeOfCareStatusHistory = new EpisodeOfCareStatusHistory({
 *   // ... properties
 * });
 */
export class EpisodeOfCareStatusHistory extends BackboneElement implements IEpisodeOfCareStatusHistory {

  // ============================================================================
  // Properties
  // ============================================================================

  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
  status: EpisodeOfCareStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Duration the EpisodeOfCare was in the specified status */
  period: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEpisodeOfCareStatusHistory>) {
    super(data);
    if (data) {
      this.assignProps(data, EPISODE_OF_CARE_STATUS_HISTORY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EpisodeOfCareStatusHistory from a JSON object
   */
  static fromJSON(json: IEpisodeOfCareStatusHistory): EpisodeOfCareStatusHistory {
    return new EpisodeOfCareStatusHistory(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EpisodeOfCareStatusHistory with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEpisodeOfCareStatusHistory>): EpisodeOfCareStatusHistory {
    return new EpisodeOfCareStatusHistory({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EpisodeOfCareStatusHistory by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEpisodeOfCareStatusHistory) => Partial<IEpisodeOfCareStatusHistory>): EpisodeOfCareStatusHistory {
    const currentData = this.toJSON();
    return new EpisodeOfCareStatusHistory({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEpisodeOfCareStatusHistory)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEpisodeOfCareStatusHistory {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EPISODE_OF_CARE_STATUS_HISTORY_PROPERTIES);
    return result as IEpisodeOfCareStatusHistory;
  }

  /**
   * Create a deep clone of this EpisodeOfCareStatusHistory
   */
  clone(): EpisodeOfCareStatusHistory {
    return new EpisodeOfCareStatusHistory(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EpisodeOfCareStatusHistory
   */
  toString(): string {
    const parts: string[] = ['EpisodeOfCareStatusHistory'];
    return parts.join(', ');
  }
}
