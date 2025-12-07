import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IEncounterDiagnosis,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EncounterDiagnosis */
const ENCOUNTER_DIAGNOSIS_PROPERTIES = [
  'condition',
  'use',
  'rank',
  '_rank',
] as const;

/**
 * EncounterDiagnosis - The list of diagnosis relevant to this encounter
 *
 * @see https://hl7.org/fhir/R4/encounterdiagnosis.html
 *
 * @example
 * const encounterDiagnosis = new EncounterDiagnosis({
 *   // ... properties
 * });
 */
export class EncounterDiagnosis extends BackboneElement implements IEncounterDiagnosis {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The diagnosis or procedure relevant to the encounter */
  condition: IReference<'Condition' | 'Procedure'>;

  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) */
  use?: ICodeableConcept;

  /** Ranking of the diagnosis (for each role type) */
  rank?: number;

  /** Extension for rank */
  _rank?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterDiagnosis>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_DIAGNOSIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterDiagnosis from a JSON object
   */
  static fromJSON(json: IEncounterDiagnosis): EncounterDiagnosis {
    return new EncounterDiagnosis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterDiagnosis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterDiagnosis>): EncounterDiagnosis {
    return new EncounterDiagnosis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterDiagnosis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterDiagnosis) => Partial<IEncounterDiagnosis>): EncounterDiagnosis {
    const currentData = this.toJSON();
    return new EncounterDiagnosis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterDiagnosis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterDiagnosis {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_DIAGNOSIS_PROPERTIES);
    return result as IEncounterDiagnosis;
  }

  /**
   * Create a deep clone of this EncounterDiagnosis
   */
  clone(): EncounterDiagnosis {
    return new EncounterDiagnosis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterDiagnosis
   */
  toString(): string {
    const parts: string[] = ['EncounterDiagnosis'];
    return parts.join(', ');
  }
}
