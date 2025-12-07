import type { IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SubstanceAmountReferenceRange Interface
 * 
 * Reference range of possible or expected values
 * 
 *
 * @see https://hl7.org/fhir/R4/substanceamountreferencerange.html
 */
export interface ISubstanceAmountReferenceRange extends IElement {
  /**
   * Lower limit possible or expected
   */
  lowLimit?: IQuantity;

  /**
   * Upper limit possible or expected
   */
  highLimit?: IQuantity;

}
