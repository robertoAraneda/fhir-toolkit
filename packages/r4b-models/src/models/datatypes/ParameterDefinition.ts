import { Element } from '../base/Element.js';
import type {
  IElement,
  IParameterDefinition,
  OperationParameterUseType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ParameterDefinition */
const PARAMETER_DEFINITION_PROPERTIES = [
  'name',
  '_name',
  'use',
  '_use',
  'min',
  '_min',
  'max',
  '_max',
  'documentation',
  '_documentation',
  'type',
  '_type',
  'profile',
  '_profile',
] as const;

/**
 * ParameterDefinition - The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 *
 * @see https://hl7.org/fhir/R4B/parameterdefinition.html
 *
 * @example
 * const parameterDefinition = new ParameterDefinition({
 *   // ... properties
 * });
 */
export class ParameterDefinition extends Element implements IParameterDefinition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name used to access the parameter value */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** in | out */
  use: OperationParameterUseType;

  /** Extension for use */
  _use?: IElement;

  /** Minimum cardinality */
  min?: number;

  /** Extension for min */
  _min?: IElement;

  /** Maximum cardinality (a number of *) */
  max?: string;

  /** Extension for max */
  _max?: IElement;

  /** A brief description of the parameter */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** What type of value */
  type: string;

  /** Extension for type */
  _type?: IElement;

  /** What profile the value is expected to be */
  profile?: string;

  /** Extension for profile */
  _profile?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IParameterDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, PARAMETER_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ParameterDefinition from a JSON object
   */
  static fromJSON(json: IParameterDefinition): ParameterDefinition {
    return new ParameterDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ParameterDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IParameterDefinition>): ParameterDefinition {
    return new ParameterDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ParameterDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IParameterDefinition) => Partial<IParameterDefinition>): ParameterDefinition {
    const currentData = this.toJSON();
    return new ParameterDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IParameterDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IParameterDefinition {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, PARAMETER_DEFINITION_PROPERTIES);
    return result as IParameterDefinition;
  }

  /**
   * Create a deep clone of this ParameterDefinition
   */
  clone(): ParameterDefinition {
    return new ParameterDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ParameterDefinition
   */
  toString(): string {
    const parts: string[] = ['ParameterDefinition'];
    return parts.join(', ');
  }
}
