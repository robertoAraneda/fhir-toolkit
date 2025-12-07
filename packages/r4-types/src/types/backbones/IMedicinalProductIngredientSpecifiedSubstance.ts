import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IMedicinalProductIngredientSpecifiedSubstanceStrength } from './IMedicinalProductIngredientSpecifiedSubstanceStrength.js';

/**
 * MedicinalProductIngredientSpecifiedSubstance Interface
 * 
 * A specified substance that comprises this ingredient
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredientspecifiedsubstance.html
 */
export interface IMedicinalProductIngredientSpecifiedSubstance extends IBackboneElement {
  /**
   * The specified substance
   */
  code: ICodeableConcept;

  /**
   * The group of specified substance, e.g. group 1 to 4
   */
  group: ICodeableConcept;

  /**
   * Confidentiality level of the specified substance as the ingredient
   */
  confidentiality?: ICodeableConcept;

  /**
   * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
   */
  strength?: IMedicinalProductIngredientSpecifiedSubstanceStrength[];

}
