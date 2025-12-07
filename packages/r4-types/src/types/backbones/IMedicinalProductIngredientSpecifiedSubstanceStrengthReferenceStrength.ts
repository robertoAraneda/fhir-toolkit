import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength Interface
 * 
 * Strength expressed in terms of a reference substance
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredientspecifiedsubstancestrengthreferencestrength.html
 */
export interface IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends IBackboneElement {
  /**
   * Relevant reference substance
   */
  substance?: ICodeableConcept;

  /**
   * Strength expressed in terms of a reference substance
   */
  strength: IRatio;

  /**
   * Strength expressed in terms of a reference substance
   */
  strengthLowLimit?: IRatio;

  /**
   * For when strength is measured at a particular point or distance
   */
  measurementPoint?: string;
  /**
   * Extension for measurementPoint
   */
  _measurementPoint?: IElement;

  /**
   * The country or countries for which the strength range applies
   */
  country?: ICodeableConcept[];

}
