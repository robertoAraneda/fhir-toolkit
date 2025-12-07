import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IConditionDefinitionObservation,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConditionDefinitionObservation */
const CONDITION_DEFINITION_OBSERVATION_PROPERTIES = [
  'category',
  'code',
] as const;

/**
 * ConditionDefinitionObservation - Observations particularly relevant to this condition
 *
 * @see https://hl7.org/fhir/R4/conditiondefinitionobservation.html
 *
 * @example
 * const conditionDefinitionObservation = new ConditionDefinitionObservation({
 *   // ... properties
 * });
 */
export class ConditionDefinitionObservation extends BackboneElement implements IConditionDefinitionObservation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Category that is relevant */
  category?: ICodeableConcept;

  /** Code for relevant Observation */
  code?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConditionDefinitionObservation>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_DEFINITION_OBSERVATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionDefinitionObservation from a JSON object
   */
  static fromJSON(json: IConditionDefinitionObservation): ConditionDefinitionObservation {
    return new ConditionDefinitionObservation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionDefinitionObservation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionDefinitionObservation>): ConditionDefinitionObservation {
    return new ConditionDefinitionObservation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionDefinitionObservation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionDefinitionObservation) => Partial<IConditionDefinitionObservation>): ConditionDefinitionObservation {
    const currentData = this.toJSON();
    return new ConditionDefinitionObservation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionDefinitionObservation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionDefinitionObservation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONDITION_DEFINITION_OBSERVATION_PROPERTIES);
    return result as IConditionDefinitionObservation;
  }

  /**
   * Create a deep clone of this ConditionDefinitionObservation
   */
  clone(): ConditionDefinitionObservation {
    return new ConditionDefinitionObservation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionDefinitionObservation
   */
  toString(): string {
    const parts: string[] = ['ConditionDefinitionObservation'];
    return parts.join(', ');
  }
}
