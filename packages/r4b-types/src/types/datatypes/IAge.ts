import type { IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';
import type { QuantityComparatorType } from '../../valuesets/index.js';

/**
 * Age Interface
 * 
 * A duration of time during which an organism (or a process) has existed.
 * 
 *
 * @see https://hl7.org/fhir/R4B/age.html
 */
export interface IAge extends IQuantity {
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
