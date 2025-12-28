import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * ManufacturedItemDefinitionComponentConstituent Interface
 * 
 * A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient)
 * 
 *
 * @see https://hl7.org/fhir/R5/manufactureditemdefinitioncomponentconstituent.html
 */
export interface IManufacturedItemDefinitionComponentConstituent extends IBackboneElement {
  /**
   * The measurable amount of the substance, expressable in different ways (e.g. by mass or volume)
   */
  amount?: IQuantity[];

  /**
   * The physical location of the constituent/ingredient within the component
   */
  location?: ICodeableConcept[];

  /**
   * The function of this constituent within the component e.g. binder
   */
  function?: ICodeableConcept[];

  /**
   * The ingredient that is the constituent of the given component
   */
  hasIngredient?: ICodeableReference[];

}
