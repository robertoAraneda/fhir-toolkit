import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IOperationDefinitionParameterBinding } from './IOperationDefinitionParameterBinding.js';
import type { IOperationDefinitionParameterReferencedFrom } from './IOperationDefinitionParameterReferencedFrom.js';
import type { OperationParameterUseType, SearchParamTypeType } from '../../valuesets/index.js';

/**
 * OperationDefinitionParameter Interface
 * 
 * Parameters for the operation/query
 * 
 *
 * @see https://hl7.org/fhir/R4/operationdefinitionparameter.html
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
   * If type is Reference | canonical, allowed targets
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
