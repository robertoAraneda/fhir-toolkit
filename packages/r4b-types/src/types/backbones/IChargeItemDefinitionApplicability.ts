import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ChargeItemDefinitionApplicability Interface
 * 
 * Whether or not the billing code is applicable
 * 
 *
 * @see https://hl7.org/fhir/R4/chargeitemdefinitionapplicability.html
 */
export interface IChargeItemDefinitionApplicability extends IBackboneElement {
  /**
   * Natural language description of the condition
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Language of the expression
   */
  language?: string;
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * Boolean-valued expression
   */
  expression?: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

}
