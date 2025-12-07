import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IEpisodeOfCareDiagnosis,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EpisodeOfCareDiagnosis */
const EPISODE_OF_CARE_DIAGNOSIS_PROPERTIES = [
  'condition',
  'use',
] as const;

/**
 * EpisodeOfCareDiagnosis - The list of medical conditions that were addressed during the episode of care
 *
 * @see https://hl7.org/fhir/R4/episodeofcarediagnosis.html
 *
 * @example
 * const episodeOfCareDiagnosis = new EpisodeOfCareDiagnosis({
 *   // ... properties
 * });
 */
export class EpisodeOfCareDiagnosis extends BackboneElement implements IEpisodeOfCareDiagnosis {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The medical condition that was addressed during the episode of care */
  condition?: ICodeableReference[];

  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) */
  use?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEpisodeOfCareDiagnosis>) {
    super(data);
    if (data) {
      this.assignProps(data, EPISODE_OF_CARE_DIAGNOSIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EpisodeOfCareDiagnosis from a JSON object
   */
  static fromJSON(json: IEpisodeOfCareDiagnosis): EpisodeOfCareDiagnosis {
    return new EpisodeOfCareDiagnosis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EpisodeOfCareDiagnosis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEpisodeOfCareDiagnosis>): EpisodeOfCareDiagnosis {
    return new EpisodeOfCareDiagnosis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EpisodeOfCareDiagnosis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEpisodeOfCareDiagnosis) => Partial<IEpisodeOfCareDiagnosis>): EpisodeOfCareDiagnosis {
    const currentData = this.toJSON();
    return new EpisodeOfCareDiagnosis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEpisodeOfCareDiagnosis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEpisodeOfCareDiagnosis {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EPISODE_OF_CARE_DIAGNOSIS_PROPERTIES);
    return result as IEpisodeOfCareDiagnosis;
  }

  /**
   * Create a deep clone of this EpisodeOfCareDiagnosis
   */
  clone(): EpisodeOfCareDiagnosis {
    return new EpisodeOfCareDiagnosis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EpisodeOfCareDiagnosis
   */
  toString(): string {
    const parts: string[] = ['EpisodeOfCareDiagnosis'];
    return parts.join(', ');
  }
}
