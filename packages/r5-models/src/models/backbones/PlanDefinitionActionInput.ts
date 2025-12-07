import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDataRequirement,
  IElement,
  IPlanDefinitionActionInput,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PlanDefinitionActionInput */
const PLAN_DEFINITION_ACTION_INPUT_PROPERTIES = [
  'title',
  '_title',
  'requirement',
  'relatedData',
  '_relatedData',
] as const;

/**
 * PlanDefinitionActionInput - Input data requirements
 *
 * @see https://hl7.org/fhir/R4/plandefinitionactioninput.html
 *
 * @example
 * const planDefinitionActionInput = new PlanDefinitionActionInput({
 *   // ... properties
 * });
 */
export class PlanDefinitionActionInput extends BackboneElement implements IPlanDefinitionActionInput {

  // ============================================================================
  // Properties
  // ============================================================================

  /** User-visible title */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** What data is provided */
  requirement?: IDataRequirement;

  /** What data is provided */
  relatedData?: string;

  /** Extension for relatedData */
  _relatedData?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionActionInput>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTION_INPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionActionInput from a JSON object
   */
  static fromJSON(json: IPlanDefinitionActionInput): PlanDefinitionActionInput {
    return new PlanDefinitionActionInput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionActionInput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionActionInput>): PlanDefinitionActionInput {
    return new PlanDefinitionActionInput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionActionInput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionActionInput) => Partial<IPlanDefinitionActionInput>): PlanDefinitionActionInput {
    const currentData = this.toJSON();
    return new PlanDefinitionActionInput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionActionInput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionActionInput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTION_INPUT_PROPERTIES);
    return result as IPlanDefinitionActionInput;
  }

  /**
   * Create a deep clone of this PlanDefinitionActionInput
   */
  clone(): PlanDefinitionActionInput {
    return new PlanDefinitionActionInput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionActionInput
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionActionInput'];
    return parts.join(', ');
  }
}
