import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IIngredientManufacturer } from '../backbones/IIngredientManufacturer.js';
import type { IIngredientSubstance } from '../backbones/IIngredientSubstance.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * Ingredient Interface
 * 
 * An ingredient of a manufactured item or pharmaceutical product.
 * 
 *
 * @see https://hl7.org/fhir/R4/ingredient.html
 */
export interface IIngredient extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Ingredient';

  /**
   * An identifier or code by which the ingredient can be referenced
   */
  identifier?: IIdentifier;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The product which this ingredient is a constituent part of
   */
  for?: IReference<'MedicinalProductDefinition' | 'AdministrableProductDefinition' | 'ManufacturedItemDefinition'>[];

  /**
   * Purpose of the ingredient within the product, e.g. active, inactive
   */
  role: ICodeableConcept;

  /**
   * Precise action within the drug product, e.g. antioxidant, alkalizing agent
   */
  function?: ICodeableConcept[];

  /**
   * A classification of the ingredient according to where in the physical item it tends to be used, such the outer shell of a tablet, inner body or ink
   */
  group?: ICodeableConcept;

  /**
   * If the ingredient is a known or suspected allergen
   */
  allergenicIndicator?: boolean;
  /**
   * Extension for allergenicIndicator
   */
  _allergenicIndicator?: IElement;

  /**
   * A place for providing any notes that are relevant to the component, e.g. removed during process, adjusted for loss on drying
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * An organization that manufactures this ingredient
   */
  manufacturer?: IIngredientManufacturer[];

  /**
   * The substance that comprises this ingredient
   */
  substance: IIngredientSubstance;

}
