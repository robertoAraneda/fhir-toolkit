import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IDosage } from '../datatypes/IDosage.js';

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage Interface
 * 
 * Dosage for the medication for the specific guidelines
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeindicationguidelinedosingguidelinedosage.html
 */
export interface IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage extends IBackboneElement {
  /**
   * Category of dosage for a medication
   */
  type: ICodeableConcept;

  /**
   * Dosage for the medication for the specific guidelines
   */
  dosage: IDosage[];

}
