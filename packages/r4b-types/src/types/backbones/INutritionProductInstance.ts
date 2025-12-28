import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * NutritionProductInstance Interface
 * 
 * One or several physical instances or occurrences of the nutrition product
 * 
 *
 * @see https://hl7.org/fhir/R4B/nutritionproductinstance.html
 */
export interface INutritionProductInstance extends IBackboneElement {
  /**
   * The amount of items or instances
   */
  quantity?: IQuantity;

  /**
   * The identifier for the physical instance, typically a serial number
   */
  identifier?: IIdentifier[];

  /**
   * The identification of the batch or lot of the product
   */
  lotNumber?: string;
  /**
   * Extension for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * The expiry date or date and time for the product
   */
  expiry?: string;
  /**
   * Extension for expiry
   */
  _expiry?: IElement;

  /**
   * The date until which the product is expected to be good for consumption
   */
  useBy?: string;
  /**
   * Extension for useBy
   */
  _useBy?: IElement;

}
