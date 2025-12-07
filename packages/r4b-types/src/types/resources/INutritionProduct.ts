import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { INutritionProductIngredient } from '../backbones/INutritionProductIngredient.js';
import type { INutritionProductInstance } from '../backbones/INutritionProductInstance.js';
import type { INutritionProductNutrient } from '../backbones/INutritionProductNutrient.js';
import type { INutritionProductProductCharacteristic } from '../backbones/INutritionProductProductCharacteristic.js';
import type { NutritionProductStatusType } from '../../valuesets/index.js';

/**
 * NutritionProduct Interface
 * 
 * A food or fluid product that is consumed by patients.
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
   * active | inactive | entered-in-error
   */
  status: NutritionProductStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * A category or class of the nutrition product (halal, kosher, gluten free, vegan, etc)
   */
  category?: ICodeableConcept[];

  /**
   * A code designating a specific type of nutritional product
   */
  code?: ICodeableConcept;

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
  productCharacteristic?: INutritionProductProductCharacteristic[];

  /**
   * One or several physical instances or occurrences of the nutrition product
   */
  instance?: INutritionProductInstance;

  /**
   * Comments made about the product
   */
  note?: IAnnotation[];

}
