import type { ICodeableConcept, IDataType, IElement } from '../../base/index.js';
import type { IMoney } from './IMoney.js';
import type { PriceComponentTypeType } from '../../valuesets/index.js';

/**
 * MonetaryComponent Interface
 * 
 * Availability data for an {item}.
 * 
 *
 * @see https://hl7.org/fhir/R5/monetarycomponent.html
 */
export interface IMonetaryComponent extends IDataType {
  /**
   * base | surcharge | deduction | discount | tax | informational
   */
  type: PriceComponentTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: ICodeableConcept;

  /**
   * Factor used for calculating this component
   */
  factor?: number;
  /**
   * Extension for factor
   */
  _factor?: IElement;

  /**
   * Explicit value amount to be used
   */
  amount?: IMoney;

}
