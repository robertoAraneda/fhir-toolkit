import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * MedicationIngredient Interface
 * 
 * Active or inactive ingredient
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationingredient.html
 */
export interface IMedicationIngredient extends IBackboneElement {
  /**
   * The ingredient (substance or medication) that the ingredient.strength relates to
   */
  item: ICodeableReference;

  /**
   * Active ingredient indicator
   */
  isActive?: boolean;
  /**
   * Extension for isActive
   */
  _isActive?: IElement;

  /**
   * Quantity of ingredient present
   */
  strengthRatio?: IRatio;

  /**
   * Quantity of ingredient present
   */
  strengthCodeableConcept?: ICodeableConcept;

  /**
   * Quantity of ingredient present
   */
  strengthQuantity?: IQuantity;

}
