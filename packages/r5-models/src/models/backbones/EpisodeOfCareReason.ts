import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IEpisodeOfCareReason,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EpisodeOfCareReason */
const EPISODE_OF_CARE_REASON_PROPERTIES = [
  'use',
  'value',
] as const;

/**
 * EpisodeOfCareReason - The list of medical reasons that are expected to be addressed during the episode of care
 *
 * @see https://hl7.org/fhir/R4/episodeofcarereason.html
 *
 * @example
 * const episodeOfCareReason = new EpisodeOfCareReason({
 *   // ... properties
 * });
 */
export class EpisodeOfCareReason extends BackboneElement implements IEpisodeOfCareReason {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What the reason value should be used for/as */
  use?: ICodeableConcept;

  /** Medical reason to be addressed */
  value?: ICodeableReference[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEpisodeOfCareReason>) {
    super(data);
    if (data) {
      this.assignProps(data, EPISODE_OF_CARE_REASON_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EpisodeOfCareReason from a JSON object
   */
  static fromJSON(json: IEpisodeOfCareReason): EpisodeOfCareReason {
    return new EpisodeOfCareReason(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EpisodeOfCareReason with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEpisodeOfCareReason>): EpisodeOfCareReason {
    return new EpisodeOfCareReason({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EpisodeOfCareReason by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEpisodeOfCareReason) => Partial<IEpisodeOfCareReason>): EpisodeOfCareReason {
    const currentData = this.toJSON();
    return new EpisodeOfCareReason({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEpisodeOfCareReason)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEpisodeOfCareReason {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EPISODE_OF_CARE_REASON_PROPERTIES);
    return result as IEpisodeOfCareReason;
  }

  /**
   * Create a deep clone of this EpisodeOfCareReason
   */
  clone(): EpisodeOfCareReason {
    return new EpisodeOfCareReason(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EpisodeOfCareReason
   */
  toString(): string {
    const parts: string[] = ['EpisodeOfCareReason'];
    return parts.join(', ');
  }
}
