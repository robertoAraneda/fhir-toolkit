import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * MedicationKnowledgeRelatedMedicationKnowledge Interface
 * 
 * Associated or related medication information
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgerelatedmedicationknowledge.html
 */
export interface IMedicationKnowledgeRelatedMedicationKnowledge extends IBackboneElement {
  /**
   * Category of medicationKnowledge
   */
  type: ICodeableConcept;

  /**
   * Associated documentation about the associated medication knowledge
   */
  reference: IReference<'MedicationKnowledge'>[];

}
