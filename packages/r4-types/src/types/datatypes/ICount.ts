import type { IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';
import type { QuantityComparatorType } from '../../valuesets/index.js';

/**
 * Count Interface
 * 
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 * 
 *
 * @see https://hl7.org/fhir/R4/count.html
 */
export interface ICount extends IQuantity {
  /**
   * Numerical value (with implicit precision)
   */
  value?: number;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * < | <= | >= | > - how to understand the value
   */
  comparator?: QuantityComparatorType;
  /**
   * Extension for comparator
   */
  _comparator?: IElement;

  /**
   * Unit representation
   */
  unit?: string;
  /**
   * Extension for unit
   */
  _unit?: IElement;

  /**
   * System that defines coded unit form
   */
  system?: string;
  /**
   * Extension for system
   */
  _system?: IElement;

  /**
   * Coded form of the unit
   */
  code?: string;
  /**
   * Extension for code
   */
  _code?: IElement;

}
