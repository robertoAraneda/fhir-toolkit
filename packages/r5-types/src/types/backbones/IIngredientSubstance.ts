import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIngredientSubstanceStrength } from './IIngredientSubstanceStrength.js';

/**
 * IngredientSubstance Interface
 * 
 * The substance that comprises this ingredient
 * 
 *
 * @see https://hl7.org/fhir/R5/ingredientsubstance.html
 */
export interface IIngredientSubstance extends IBackboneElement {
  /**
   * A code or full resource that represents the ingredient substance
   */
  code: ICodeableReference;

  /**
   * The quantity of substance, per presentation, or per volume or mass, and type of quantity
   */
  strength?: IIngredientSubstanceStrength[];

}
