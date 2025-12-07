import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { INutritionProductCharacteristic } from '../backbones/INutritionProductCharacteristic.js';
import type { INutritionProductIngredient } from '../backbones/INutritionProductIngredient.js';
import type { INutritionProductInstance } from '../backbones/INutritionProductInstance.js';
import type { INutritionProductNutrient } from '../backbones/INutritionProductNutrient.js';
import type { NutritionProductStatusType } from '../../valuesets/index.js';

/**
 * NutritionProduct Interface
 * 
 * A food or supplement that is consumed by patients.
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionproduct.html
 */
export interface INutritionProduct extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'NutritionProduct';

  /**
   * A code that can identify the detailed nutrients and ingredients in a specific food product
   */
  code?: ICodeableConcept;

  /**
   * active | inactive | entered-in-error
   */
  status: NutritionProductStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Broad product groups or categories used to classify the product, such as Legume and Legume Products, Beverages, or Beef Products
   */
  category?: ICodeableConcept[];

  /**
   * Manufacturer, representative or officially responsible for the product
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * The product's nutritional information expressed by the nutrients
   */
  nutrient?: INutritionProductNutrient[];

  /**
   * Ingredients contained in this product
   */
  ingredient?: INutritionProductIngredient[];

  /**
   * Known or suspected allergens that are a part of this product
   */
  knownAllergen?: ICodeableReference[];

  /**
   * Specifies descriptive properties of the nutrition product
   */
  characteristic?: INutritionProductCharacteristic[];

  /**
   * One or several physical instances or occurrences of the nutrition product
   */
  instance?: INutritionProductInstance[];

  /**
   * Comments made about the product
   */
  note?: IAnnotation[];

}
