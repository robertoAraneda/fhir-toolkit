import type { IElement } from '../../base/index.js';
import type { OperationParameterUseType } from '../../valuesets/index.js';

/**
 * ParameterDefinition Interface
 * 
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 * 
 *
 * @see https://hl7.org/fhir/R4B/parameterdefinition.html
 */
export interface IParameterDefinition extends IElement {
  /**
   * Name used to access the parameter value
   */
  name?: string;
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
   * Minimum cardinality
   */
  min?: number;
  /**
   * Extension for min
   */
  _min?: IElement;

  /**
   * Maximum cardinality (a number of *)
   */
  max?: string;
  /**
   * Extension for max
   */
  _max?: IElement;

  /**
   * A brief description of the parameter
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * What type of value
   */
  type: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * What profile the value is expected to be
   */
  profile?: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

}
