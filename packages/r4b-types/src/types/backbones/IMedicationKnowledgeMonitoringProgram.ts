import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * MedicationKnowledgeMonitoringProgram Interface
 * 
 * Program under which a medication is reviewed
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgemonitoringprogram.html
 */
export interface IMedicationKnowledgeMonitoringProgram extends IBackboneElement {
  /**
   * Type of program under which the medication is monitored
   */
  type?: ICodeableConcept;

  /**
   * Name of the reviewing program
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

}
