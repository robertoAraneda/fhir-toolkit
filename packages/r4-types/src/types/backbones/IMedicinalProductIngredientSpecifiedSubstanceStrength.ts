import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength } from './IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength.js';

/**
 * MedicinalProductIngredientSpecifiedSubstanceStrength Interface
 * 
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredientspecifiedsubstancestrength.html
 */
export interface IMedicinalProductIngredientSpecifiedSubstanceStrength extends IBackboneElement {
  /**
   * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item
   */
  presentation: IRatio;

  /**
   * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit
   */
  presentationLowLimit?: IRatio;

  /**
   * The strength per unitary volume (or mass)
   */
  concentration?: IRatio;

  /**
   * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit
   */
  concentrationLowLimit?: IRatio;

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

  /**
   * Strength expressed in terms of a reference substance
   */
  referenceStrength?: IMedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];

}
