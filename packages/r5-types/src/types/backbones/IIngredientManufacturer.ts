import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IngredientManufacturerRoleType } from '../../valuesets/index.js';

/**
 * IngredientManufacturer Interface
 * 
 * An organization that manufactures this ingredient
 * 
 *
 * @see https://hl7.org/fhir/R5/ingredientmanufacturer.html
 */
export interface IIngredientManufacturer extends IBackboneElement {
  /**
   * allowed | possible | actual
   */
  role?: IngredientManufacturerRoleType;
  /**
   * Extension for role
   */
  _role?: IElement;

  /**
   * An organization that manufactures this ingredient
   */
  manufacturer: IReference<'Organization'>;

}
