import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * OperationDefinitionOverload Interface
 * 
 * Define overloaded variants for when  generating code
 * 
 *
 * @see https://hl7.org/fhir/R4/operationdefinitionoverload.html
 */
export interface IOperationDefinitionOverload extends IBackboneElement {
  /**
   * Name of parameter to include in overload
   */
  parameterName?: string[];
  /**
   * Extension for parameterName
   */
  _parameterName?: IElement;

  /**
   * Comments to go on overload
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

}
