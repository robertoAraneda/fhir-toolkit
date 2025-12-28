import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * MedicationIngredient Interface
 * 
 * Active or inactive ingredient
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationingredient.html
 */
export interface IMedicationIngredient extends IBackboneElement {
  /**
   * The actual ingredient or content
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * The actual ingredient or content
   */
  itemReference?: IReference;

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
  strength?: IRatio;

}
