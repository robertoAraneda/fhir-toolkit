import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IManufacturedItemDefinitionComponentConstituent } from './IManufacturedItemDefinitionComponentConstituent.js';
import type { IManufacturedItemDefinitionProperty } from './IManufacturedItemDefinitionProperty.js';

/**
 * ManufacturedItemDefinitionComponent Interface
 * 
 * Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup
 * 
 *
 * @see https://hl7.org/fhir/R5/manufactureditemdefinitioncomponent.html
 */
export interface IManufacturedItemDefinitionComponent extends IBackboneElement {
  /**
   * Defining type of the component e.g. shell, layer, ink
   */
  type: ICodeableConcept;

  /**
   * The function of this component within the item e.g. delivers active ingredient, masks taste
   */
  function?: ICodeableConcept[];

  /**
   * The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume)
   */
  amount?: IQuantity[];

  /**
   * A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient)
   */
  constituent?: IManufacturedItemDefinitionComponentConstituent[];

  /**
   * General characteristics of this component
   */
  property?: IManufacturedItemDefinitionProperty[];

  /**
   * A component that this component contains or is made from
   */
  component?: IManufacturedItemDefinitionComponent[];

}
