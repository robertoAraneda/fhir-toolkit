import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { INutritionOrderEnteralFormulaAdministration } from './INutritionOrderEnteralFormulaAdministration.js';

/**
 * NutritionOrderEnteralFormula Interface
 * 
 * Enteral formula components
 * 
 *
 * @see https://hl7.org/fhir/R4B/nutritionorderenteralformula.html
 */
export interface INutritionOrderEnteralFormula extends IBackboneElement {
  /**
   * Type of enteral or infant formula
   */
  baseFormulaType?: ICodeableConcept;

  /**
   * Product or brand name of the enteral or infant formula
   */
  baseFormulaProductName?: string;
  /**
   * Extension for baseFormulaProductName
   */
  _baseFormulaProductName?: IElement;

  /**
   * Type of modular component to add to the feeding
   */
  additiveType?: ICodeableConcept;

  /**
   * Product or brand name of the modular additive
   */
  additiveProductName?: string;
  /**
   * Extension for additiveProductName
   */
  _additiveProductName?: IElement;

  /**
   * Amount of energy per specified volume that is required
   */
  caloricDensity?: IQuantity;

  /**
   * How the formula should enter the patient's gastrointestinal tract
   */
  routeofAdministration?: ICodeableConcept;

  /**
   * Formula feeding instruction as structured data
   */
  administration?: INutritionOrderEnteralFormulaAdministration[];

  /**
   * Upper limit on formula volume per unit of time
   */
  maxVolumeToDeliver?: IQuantity;

  /**
   * Formula feeding instructions expressed as text
   */
  administrationInstruction?: string;
  /**
   * Extension for administrationInstruction
   */
  _administrationInstruction?: IElement;

}
