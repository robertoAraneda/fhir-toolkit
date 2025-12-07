import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ITiming } from '../datatypes/ITiming.js';

/**
 * NutritionIntakeConsumedItem Interface
 * 
 * What food or fluid product or item was consumed
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionintakeconsumeditem.html
 */
export interface INutritionIntakeConsumedItem extends IBackboneElement {
  /**
   * The type of food or fluid product
   */
  type: ICodeableConcept;

  /**
   * Code that identifies the food or fluid product that was consumed
   */
  nutritionProduct: ICodeableReference;

  /**
   * Scheduled frequency of consumption
   */
  schedule?: ITiming;

  /**
   * Quantity of the specified food
   */
  amount?: IQuantity;

  /**
   * Rate at which enteral feeding was administered
   */
  rate?: IQuantity;

  /**
   * Flag to indicate if the food or fluid item was refused or otherwise not consumed
   */
  notConsumed?: boolean;
  /**
   * Extension for notConsumed
   */
  _notConsumed?: IElement;

  /**
   * Reason food or fluid was not consumed
   */
  notConsumedReason?: ICodeableConcept;

}
