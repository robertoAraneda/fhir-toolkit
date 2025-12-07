import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * CompartmentDefinitionResource Interface
 * 
 * How a resource is related to the compartment
 * 
 *
 * @see https://hl7.org/fhir/R4/compartmentdefinitionresource.html
 */
export interface ICompartmentDefinitionResource extends IBackboneElement {
  /**
   * Name of resource type
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Search Parameter Name, or chained parameters
   */
  param?: string[];
  /**
   * Extension for param
   */
  _param?: IElement;

  /**
   * Additional documentation about the resource and compartment
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * Search Param for interpreting $everything.start
   */
  startParam?: string;
  /**
   * Extension for startParam
   */
  _startParam?: IElement;

  /**
   * Search Param for interpreting $everything.end
   */
  endParam?: string;
  /**
   * Extension for endParam
   */
  _endParam?: IElement;

}
