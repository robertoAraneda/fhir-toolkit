import type { IDataType } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';

/**
 * Ratio Interface
 * 
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 * 
 *
 * @see https://hl7.org/fhir/R4/ratio.html
 */
export interface IRatio extends IDataType {
  /**
   * Numerator value
   */
  numerator?: IQuantity;

  /**
   * Denominator value
   */
  denominator?: IQuantity;

}
