import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMedicinalProductIngredientSpecifiedSubstance } from '../backbones/IMedicinalProductIngredientSpecifiedSubstance.js';
import type { IMedicinalProductIngredientSubstance } from '../backbones/IMedicinalProductIngredientSubstance.js';

/**
 * MedicinalProductIngredient Interface
 * 
 * An ingredient of a manufactured item or pharmaceutical product.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredient.html
 */
export interface IMedicinalProductIngredient extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductIngredient';

  /**
   * Identifier for the ingredient
   */
  identifier?: IIdentifier;

  /**
   * Ingredient role e.g. Active ingredient, excipient
   */
  role: ICodeableConcept;

  /**
   * If the ingredient is a known or suspected allergen
   */
  allergenicIndicator?: boolean;
  /**
   * Extension for allergenicIndicator
   */
  _allergenicIndicator?: IElement;

  /**
   * Manufacturer of this Ingredient
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * A specified substance that comprises this ingredient
   */
  specifiedSubstance?: IMedicinalProductIngredientSpecifiedSubstance[];

  /**
   * The ingredient substance
   */
  substance?: IMedicinalProductIngredientSubstance;

}
