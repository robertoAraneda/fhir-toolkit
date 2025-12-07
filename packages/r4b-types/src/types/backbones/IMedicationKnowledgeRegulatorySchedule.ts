import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * MedicationKnowledgeRegulatorySchedule Interface
 * 
 * Specifies the schedule of a medication in jurisdiction
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeregulatoryschedule.html
 */
export interface IMedicationKnowledgeRegulatorySchedule extends IBackboneElement {
  /**
   * Specifies the specific drug schedule
   */
  schedule: ICodeableConcept;

}
