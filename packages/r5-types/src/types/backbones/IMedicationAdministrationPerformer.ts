import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * MedicationAdministrationPerformer Interface
 * 
 * Who or what performed the medication administration and what type of performance they did
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationadministrationperformer.html
 */
export interface IMedicationAdministrationPerformer extends IBackboneElement {
  /**
   * Type of performance
   */
  function?: ICodeableConcept;

  /**
   * Who or what performed the medication administration
   */
  actor: ICodeableReference;

}
