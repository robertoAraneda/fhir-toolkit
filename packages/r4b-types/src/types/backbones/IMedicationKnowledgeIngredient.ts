import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * MedicationKnowledgeIngredient Interface
 * 
 * Active or inactive ingredient
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgeingredient.html
 */
export interface IMedicationKnowledgeIngredient extends IBackboneElement {
  /**
   * Medication(s) or substance(s) contained in the medication
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * Medication(s) or substance(s) contained in the medication
   */
  itemReference?: IReference;

  /**
   * Active ingredient indicator
   */
  isActive?: boolean;
  /**
   * Extension for isActive
   */
  _isActive?: IElement;

  /**
   * Quantity of ingredient present
   */
  strength?: IRatio;

}
