import type { IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';
import type { QuantityComparatorType } from '../../valuesets/index.js';

/**
 * Distance Interface
 * 
 * A length - a value with a unit that is a physical distance.
 * 
 *
 * @see https://hl7.org/fhir/R4B/distance.html
 */
export interface IDistance extends IQuantity {
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
