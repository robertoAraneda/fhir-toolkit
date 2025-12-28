import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * SubscriptionParameter Interface
 * 
 * Channel type
 * 
 *
 * @see https://hl7.org/fhir/R5/subscriptionparameter.html
 */
export interface ISubscriptionParameter extends IBackboneElement {
  /**
   * Name (key) of the parameter
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Value of the parameter to use or pass through
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
