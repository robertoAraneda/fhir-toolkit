import type { IElement } from '../../base/index.js';
import type { IExtension } from './IExtension.js';
import type { IQuantity } from './IQuantity.js';
import type { QuantityComparatorType } from '../../valuesets/index.js';

/**
 * MoneyQuantity Interface
 * 
 * There SHALL be a code if there is a value and it SHALL be an expression of currency.  If system is present, it SHALL be ISO 4217 (system = "urn:iso:std:iso:4217" - currency).
 * 
 *
 * @see https://hl7.org/fhir/R4/moneyquantity.html
 */
export interface IMoneyQuantity extends IQuantity {
  /**
   * Unique id for inter-element referencing
   */
  id?: string;

  /**
   * Additional content defined by implementations
   */
  extension?: IExtension[];

  /**
   * Numerical value (with implicit precision)
   */
  value?: number;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * < | <= | >= | > | ad - how to understand the value
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
