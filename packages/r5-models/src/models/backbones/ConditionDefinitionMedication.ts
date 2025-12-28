import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IConditionDefinitionMedication,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConditionDefinitionMedication */
const CONDITION_DEFINITION_MEDICATION_PROPERTIES = [
  'category',
  'code',
] as const;

/**
 * ConditionDefinitionMedication - Medications particularly relevant for this condition
 *
 * @see https://hl7.org/fhir/R5/conditiondefinitionmedication.html
 *
 * @example
 * const conditionDefinitionMedication = new ConditionDefinitionMedication({
 *   // ... properties
 * });
 */
export class ConditionDefinitionMedication extends BackboneElement implements IConditionDefinitionMedication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Category that is relevant */
  category?: ICodeableConcept;

  /** Code for relevant Medication */
  code?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConditionDefinitionMedication>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_DEFINITION_MEDICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionDefinitionMedication from a JSON object
   */
  static fromJSON(json: IConditionDefinitionMedication): ConditionDefinitionMedication {
    return new ConditionDefinitionMedication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionDefinitionMedication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionDefinitionMedication>): ConditionDefinitionMedication {
    return new ConditionDefinitionMedication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionDefinitionMedication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionDefinitionMedication) => Partial<IConditionDefinitionMedication>): ConditionDefinitionMedication {
    const currentData = this.toJSON();
    return new ConditionDefinitionMedication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionDefinitionMedication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionDefinitionMedication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONDITION_DEFINITION_MEDICATION_PROPERTIES);
    return result as IConditionDefinitionMedication;
  }

  /**
   * Create a deep clone of this ConditionDefinitionMedication
   */
  clone(): ConditionDefinitionMedication {
    return new ConditionDefinitionMedication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionDefinitionMedication
   */
  toString(): string {
    const parts: string[] = ['ConditionDefinitionMedication'];
    return parts.join(', ');
  }
}
