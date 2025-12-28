import type { IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';

/**
 * Range Interface
 * 
 * A set of ordered Quantities defined by a low and high limit.
 * 
 *
 * @see https://hl7.org/fhir/R4B/range.html
 */
export interface IRange extends IElement {
  /**
   * Low limit
   */
  low?: IQuantity;

  /**
   * High limit
   */
  high?: IQuantity;

}
