import type { IDataType, IElement } from '../../base/index.js';

/**
 * Money Interface
 * 
 * An amount of economic utility in some recognized currency.
 * 
 *
 * @see https://hl7.org/fhir/R4/money.html
 */
export interface IMoney extends IDataType {
  /**
   * Numerical value (with implicit precision)
   */
  value?: number;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * ISO 4217 Currency Code
   */
  currency?: string;
  /**
   * Extension for currency
   */
  _currency?: IElement;

}
