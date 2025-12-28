import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IEncounterReason,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EncounterReason */
const ENCOUNTER_REASON_PROPERTIES = [
  'use',
  'value',
] as const;

/**
 * EncounterReason - The list of medical reasons that are expected to be addressed during the episode of care
 *
 * @see https://hl7.org/fhir/R5/encounterreason.html
 *
 * @example
 * const encounterReason = new EncounterReason({
 *   // ... properties
 * });
 */
export class EncounterReason extends BackboneElement implements IEncounterReason {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What the reason value should be used for/as */
  use?: ICodeableConcept[];

  /** Reason the encounter takes place (core or reference) */
  value?: ICodeableReference[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterReason>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_REASON_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterReason from a JSON object
   */
  static fromJSON(json: IEncounterReason): EncounterReason {
    return new EncounterReason(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterReason with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterReason>): EncounterReason {
    return new EncounterReason({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterReason by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterReason) => Partial<IEncounterReason>): EncounterReason {
    const currentData = this.toJSON();
    return new EncounterReason({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterReason)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterReason {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_REASON_PROPERTIES);
    return result as IEncounterReason;
  }

  /**
   * Create a deep clone of this EncounterReason
   */
  clone(): EncounterReason {
    return new EncounterReason(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterReason
   */
  toString(): string {
    const parts: string[] = ['EncounterReason'];
    return parts.join(', ');
  }
}
