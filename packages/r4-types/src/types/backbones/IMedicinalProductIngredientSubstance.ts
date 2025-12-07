import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IMedicinalProductIngredientSpecifiedSubstanceStrength } from './IMedicinalProductIngredientSpecifiedSubstanceStrength.js';

/**
 * MedicinalProductIngredientSubstance Interface
 * 
 * The ingredient substance
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredientsubstance.html
 */
export interface IMedicinalProductIngredientSubstance extends IBackboneElement {
  /**
   * The ingredient substance
   */
  code: ICodeableConcept;

  /**
   * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
   */
  strength?: IMedicinalProductIngredientSpecifiedSubstanceStrength[];

}
