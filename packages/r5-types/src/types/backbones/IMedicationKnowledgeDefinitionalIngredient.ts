import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * MedicationKnowledgeDefinitionalIngredient Interface
 * 
 * Active or inactive ingredient
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationknowledgedefinitionalingredient.html
 */
export interface IMedicationKnowledgeDefinitionalIngredient extends IBackboneElement {
  /**
   * Substances contained in the medication
   */
  item: ICodeableReference;

  /**
   * A code that defines the type of ingredient, active, base, etc
   */
  type?: ICodeableConcept;

  /**
   * Quantity of ingredient present
   */
  strengthRatio?: IRatio;

  /**
   * Quantity of ingredient present
   */
  strengthCodeableConcept?: ICodeableConcept;

  /**
   * Quantity of ingredient present
   */
  strengthQuantity?: IQuantity;

}
