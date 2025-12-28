import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConditionPreconditionTypeType,
  ICodeableConcept,
  IConditionDefinitionPrecondition,
  IElement,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConditionDefinitionPrecondition */
const CONDITION_DEFINITION_PRECONDITION_PROPERTIES = [
  'type',
  '_type',
  'code',
  'valueCodeableConcept',
  'valueQuantity',
] as const;

/**
 * ConditionDefinitionPrecondition - Observation that suggets this condition
 *
 * @see https://hl7.org/fhir/R5/conditiondefinitionprecondition.html
 *
 * @example
 * const conditionDefinitionPrecondition = new ConditionDefinitionPrecondition({
 *   // ... properties
 * });
 */
export class ConditionDefinitionPrecondition extends BackboneElement implements IConditionDefinitionPrecondition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** sensitive | specific */
  type: ConditionPreconditionTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Code for relevant Observation */
  code: ICodeableConcept;

  /** Value of Observation */
  valueCodeableConcept?: ICodeableConcept;

  /** Value of Observation */
  valueQuantity?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConditionDefinitionPrecondition>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_DEFINITION_PRECONDITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionDefinitionPrecondition from a JSON object
   */
  static fromJSON(json: IConditionDefinitionPrecondition): ConditionDefinitionPrecondition {
    return new ConditionDefinitionPrecondition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionDefinitionPrecondition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionDefinitionPrecondition>): ConditionDefinitionPrecondition {
    return new ConditionDefinitionPrecondition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionDefinitionPrecondition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionDefinitionPrecondition) => Partial<IConditionDefinitionPrecondition>): ConditionDefinitionPrecondition {
    const currentData = this.toJSON();
    return new ConditionDefinitionPrecondition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionDefinitionPrecondition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionDefinitionPrecondition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONDITION_DEFINITION_PRECONDITION_PROPERTIES);
    return result as IConditionDefinitionPrecondition;
  }

  /**
   * Create a deep clone of this ConditionDefinitionPrecondition
   */
  clone(): ConditionDefinitionPrecondition {
    return new ConditionDefinitionPrecondition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionDefinitionPrecondition
   */
  toString(): string {
    const parts: string[] = ['ConditionDefinitionPrecondition'];
    return parts.join(', ');
  }
}
