import type { IElement } from '../../base/index.js';
import type { IExtension } from './IExtension.js';
import type { IQuantity } from './IQuantity.js';
import type { QuantityComparatorType } from '../../valuesets/index.js';

/**
 * SimpleQuantity Interface
 * 
 * The comparator is not used on a SimpleQuantity
 * 
 *
 * @see https://hl7.org/fhir/R4/simplequantity.html
 */
export interface ISimpleQuantity extends IQuantity {
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
