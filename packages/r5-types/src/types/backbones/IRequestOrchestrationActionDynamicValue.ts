import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';

/**
 * RequestOrchestrationActionDynamicValue Interface
 * 
 * Dynamic aspects of the definition
 * 
 *
 * @see https://hl7.org/fhir/R5/requestorchestrationactiondynamicvalue.html
 */
export interface IRequestOrchestrationActionDynamicValue extends IBackboneElement {
  /**
   * The path to the element to be set dynamically
   */
  path?: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * An expression that provides the dynamic value for the customization
   */
  expression?: IExpression;

}
