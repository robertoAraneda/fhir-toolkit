import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * NutritionOrderOralDietTexture Interface
 * 
 * Required  texture modifications
 * 
 *
 * @see https://hl7.org/fhir/R4B/nutritionorderoraldiettexture.html
 */
export interface INutritionOrderOralDietTexture extends IBackboneElement {
  /**
   * Code to indicate how to alter the texture of the foods, e.g. pureed
   */
  modifier?: ICodeableConcept;

  /**
   * Concepts that are used to identify an entity that is ingested for nutritional purposes
   */
  foodType?: ICodeableConcept;

}
