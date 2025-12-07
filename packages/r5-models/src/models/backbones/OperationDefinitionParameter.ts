import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IOperationDefinitionParameter,
  IOperationDefinitionParameterBinding,
  IOperationDefinitionParameterReferencedFrom,
  OperationParameterScopeType,
  OperationParameterUseType,
  SearchParamTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to OperationDefinitionParameter */
const OPERATION_DEFINITION_PARAMETER_PROPERTIES = [
  'name',
  '_name',
  'use',
  '_use',
  'scope',
  '_scope',
  'min',
  '_min',
  'max',
  '_max',
  'documentation',
  '_documentation',
  'type',
  '_type',
  'allowedType',
  '_allowedType',
  'targetProfile',
  '_targetProfile',
  'searchType',
  '_searchType',
  'binding',
  'referencedFrom',
  'part',
] as const;

/**
 * OperationDefinitionParameter - Parameters for the operation/query
 *
 * @see https://hl7.org/fhir/R4/operationdefinitionparameter.html
 *
 * @example
 * const operationDefinitionParameter = new OperationDefinitionParameter({
 *   // ... properties
 * });
 */
export class OperationDefinitionParameter extends BackboneElement implements IOperationDefinitionParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name in Parameters.parameter.name or in URL */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** in | out */
  use: OperationParameterUseType;

  /** Extension for use */
  _use?: IElement;

  /** instance | type | system */
  scope?: OperationParameterScopeType[];

  /** Extension for scope */
  _scope?: IElement;

  /** Minimum Cardinality */
  min: number;

  /** Extension for min */
  _min?: IElement;

  /** Maximum Cardinality (a number or *) */
  max: string;

  /** Extension for max */
  _max?: IElement;

  /** Description of meaning/use */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** What type this parameter has */
  type?: string;

  /** Extension for type */
  _type?: IElement;

  /** Allowed sub-type this parameter can have (if type is abstract) */
  allowedType?: string[];

  /** Extension for allowedType */
  _allowedType?: IElement;

  /** If type is Reference | canonical, allowed targets. If type is 'Resource', then this constrains the allowed resource types */
  targetProfile?: string[];

  /** Extension for targetProfile */
  _targetProfile?: IElement;

  /** number | date | string | token | reference | composite | quantity | uri | special */
  searchType?: SearchParamTypeType;

  /** Extension for searchType */
  _searchType?: IElement;

  /** ValueSet details if this is coded */
  binding?: IOperationDefinitionParameterBinding;

  /** References to this parameter */
  referencedFrom?: IOperationDefinitionParameterReferencedFrom[];

  /** Parts of a nested Parameter */
  part?: IOperationDefinitionParameter[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOperationDefinitionParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, OPERATION_DEFINITION_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OperationDefinitionParameter from a JSON object
   */
  static fromJSON(json: IOperationDefinitionParameter): OperationDefinitionParameter {
    return new OperationDefinitionParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OperationDefinitionParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOperationDefinitionParameter>): OperationDefinitionParameter {
    return new OperationDefinitionParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OperationDefinitionParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOperationDefinitionParameter) => Partial<IOperationDefinitionParameter>): OperationDefinitionParameter {
    const currentData = this.toJSON();
    return new OperationDefinitionParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOperationDefinitionParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOperationDefinitionParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OPERATION_DEFINITION_PARAMETER_PROPERTIES);
    return result as IOperationDefinitionParameter;
  }

  /**
   * Create a deep clone of this OperationDefinitionParameter
   */
  clone(): OperationDefinitionParameter {
    return new OperationDefinitionParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OperationDefinitionParameter
   */
  toString(): string {
    const parts: string[] = ['OperationDefinitionParameter'];
    return parts.join(', ');
  }
}
