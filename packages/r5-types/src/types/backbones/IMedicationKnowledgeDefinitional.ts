import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IMedicationKnowledgeDefinitionalDrugCharacteristic } from './IMedicationKnowledgeDefinitionalDrugCharacteristic.js';
import type { IMedicationKnowledgeDefinitionalIngredient } from './IMedicationKnowledgeDefinitionalIngredient.js';

/**
 * MedicationKnowledgeDefinitional Interface
 * 
 * Minimal definition information about the medication
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgedefinitional.html
 */
export interface IMedicationKnowledgeDefinitional extends IBackboneElement {
  /**
   * Definitional resources that provide more information about this medication
   */
  definition?: IReference<'MedicinalProductDefinition'>[];

  /**
   * powder | tablets | capsule +
   */
  doseForm?: ICodeableConcept;

  /**
   * The intended or approved route of administration
   */
  intendedRoute?: ICodeableConcept[];

  /**
   * Active or inactive ingredient
   */
  ingredient?: IMedicationKnowledgeDefinitionalIngredient[];

  /**
   * Specifies descriptive properties of the medicine
   */
  drugCharacteristic?: IMedicationKnowledgeDefinitionalDrugCharacteristic[];

}
