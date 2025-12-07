import type { IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';

/**
 * RatioRange Interface
 * 
 * A range of ratios expressed as a low and high numerator and a denominator.
 * 
 *
 * @see https://hl7.org/fhir/R4/ratiorange.html
 */
export interface IRatioRange extends IElement {
  /**
   * Low Numerator limit
   */
  lowNumerator?: IQuantity;

  /**
   * High Numerator limit
   */
  highNumerator?: IQuantity;

  /**
   * Denominator value
   */
  denominator?: IQuantity;

}
