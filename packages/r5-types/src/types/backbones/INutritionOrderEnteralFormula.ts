import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { INutritionOrderEnteralFormulaAdditive } from './INutritionOrderEnteralFormulaAdditive.js';
import type { INutritionOrderEnteralFormulaAdministration } from './INutritionOrderEnteralFormulaAdministration.js';

/**
 * NutritionOrderEnteralFormula Interface
 * 
 * Enteral formula components
 * 
 *
 * @see https://hl7.org/fhir/R4/nutritionorderenteralformula.html
 */
export interface INutritionOrderEnteralFormula extends IBackboneElement {
  /**
   * Type of enteral or infant formula
   */
  baseFormulaType?: ICodeableReference;

  /**
   * Product or brand name of the enteral or infant formula
   */
  baseFormulaProductName?: string;
  /**
   * Extension for baseFormulaProductName
   */
  _baseFormulaProductName?: IElement;

  /**
   * Intended type of device for the administration
   */
  deliveryDevice?: ICodeableReference[];

  /**
   * Components to add to the feeding
   */
  additive?: INutritionOrderEnteralFormulaAdditive[];

  /**
   * Amount of energy per specified volume that is required
   */
  caloricDensity?: IQuantity;

  /**
   * How the formula should enter the patient's gastrointestinal tract
   */
  routeOfAdministration?: ICodeableConcept;

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
