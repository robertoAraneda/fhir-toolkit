import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDataRequirement,
  IElement,
  IPlanDefinitionActionOutput,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PlanDefinitionActionOutput */
const PLAN_DEFINITION_ACTION_OUTPUT_PROPERTIES = [
  'title',
  '_title',
  'requirement',
  'relatedData',
  '_relatedData',
] as const;

/**
 * PlanDefinitionActionOutput - Output data definition
 *
 * @see https://hl7.org/fhir/R5/plandefinitionactionoutput.html
 *
 * @example
 * const planDefinitionActionOutput = new PlanDefinitionActionOutput({
 *   // ... properties
 * });
 */
export class PlanDefinitionActionOutput extends BackboneElement implements IPlanDefinitionActionOutput {

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

  constructor(data?: Partial<IPlanDefinitionActionOutput>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTION_OUTPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionActionOutput from a JSON object
   */
  static fromJSON(json: IPlanDefinitionActionOutput): PlanDefinitionActionOutput {
    return new PlanDefinitionActionOutput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionActionOutput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionActionOutput>): PlanDefinitionActionOutput {
    return new PlanDefinitionActionOutput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionActionOutput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionActionOutput) => Partial<IPlanDefinitionActionOutput>): PlanDefinitionActionOutput {
    const currentData = this.toJSON();
    return new PlanDefinitionActionOutput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionActionOutput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionActionOutput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTION_OUTPUT_PROPERTIES);
    return result as IPlanDefinitionActionOutput;
  }

  /**
   * Create a deep clone of this PlanDefinitionActionOutput
   */
  clone(): PlanDefinitionActionOutput {
    return new PlanDefinitionActionOutput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionActionOutput
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionActionOutput'];
    return parts.join(', ');
  }
}
