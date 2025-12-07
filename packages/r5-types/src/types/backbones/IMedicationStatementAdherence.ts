import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * MedicationStatementAdherence Interface
 * 
 * Indicates whether the medication is or is not being consumed or administered
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationstatementadherence.html
 */
export interface IMedicationStatementAdherence extends IBackboneElement {
  /**
   * Type of adherence
   */
  code: ICodeableConcept;

  /**
   * Details of the reason for the current use of the medication
   */
  reason?: ICodeableConcept;

}
