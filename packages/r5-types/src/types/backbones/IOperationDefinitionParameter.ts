import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IOperationDefinitionParameterBinding } from './IOperationDefinitionParameterBinding.js';
import type { IOperationDefinitionParameterReferencedFrom } from './IOperationDefinitionParameterReferencedFrom.js';
import type { OperationParameterScopeType, OperationParameterUseType, SearchParamTypeType } from '../../valuesets/index.js';

/**
 * OperationDefinitionParameter Interface
 * 
 * Parameters for the operation/query
 * 
 *
 * @see https://hl7.org/fhir/R5/operationdefinitionparameter.html
 */
export interface IOperationDefinitionParameter extends IBackboneElement {
  /**
   * Name in Parameters.parameter.name or in URL
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * in | out
   */
  use: OperationParameterUseType;
  /**
   * Extension for use
   */
  _use?: IElement;

  /**
   * instance | type | system
   */
  scope?: OperationParameterScopeType[];
  /**
   * Extension for scope
   */
  _scope?: IElement;

  /**
   * Minimum Cardinality
   */
  min: number;
  /**
   * Extension for min
   */
  _min?: IElement;

  /**
   * Maximum Cardinality (a number or *)
   */
  max: string;
  /**
   * Extension for max
   */
  _max?: IElement;

  /**
   * Description of meaning/use
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * What type this parameter has
   */
  type?: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Allowed sub-type this parameter can have (if type is abstract)
   */
  allowedType?: string[];
  /**
   * Extension for allowedType
   */
  _allowedType?: IElement;

  /**
   * If type is Reference | canonical, allowed targets. If type is 'Resource', then this constrains the allowed resource types
   */
  targetProfile?: string[];
  /**
   * Extension for targetProfile
   */
  _targetProfile?: IElement;

  /**
   * number | date | string | token | reference | composite | quantity | uri | special
   */
  searchType?: SearchParamTypeType;
  /**
   * Extension for searchType
   */
  _searchType?: IElement;

  /**
   * ValueSet details if this is coded
   */
  binding?: IOperationDefinitionParameterBinding;

  /**
   * References to this parameter
   */
  referencedFrom?: IOperationDefinitionParameterReferencedFrom[];

  /**
   * Parts of a nested Parameter
   */
  part?: IOperationDefinitionParameter[];

}
