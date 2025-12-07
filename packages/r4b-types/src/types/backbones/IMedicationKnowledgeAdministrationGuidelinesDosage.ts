import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IDosage } from '../datatypes/IDosage.js';

/**
 * MedicationKnowledgeAdministrationGuidelinesDosage Interface
 * 
 * Dosage for the medication for the specific guidelines
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeadministrationguidelinesdosage.html
 */
export interface IMedicationKnowledgeAdministrationGuidelinesDosage extends IBackboneElement {
  /**
   * Type of dosage
   */
  type: ICodeableConcept;

  /**
   * Dosage for the medication for the specific guidelines
   */
  dosage: IDosage[];

}
