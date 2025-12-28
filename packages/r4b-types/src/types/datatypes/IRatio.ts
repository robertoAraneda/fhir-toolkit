import type { IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';

/**
 * Ratio Interface
 * 
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 * 
 *
 * @see https://hl7.org/fhir/R4B/ratio.html
 */
export interface IRatio extends IElement {
  /**
   * Numerator value
   */
  numerator?: IQuantity;

  /**
   * Denominator value
   */
  denominator?: IQuantity;

}
