import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IAdverseEventSuspectEntityCausality } from './IAdverseEventSuspectEntityCausality.js';

/**
 * AdverseEventSuspectEntity Interface
 * 
 * The suspected agent causing the adverse event
 * 
 *
 * @see https://hl7.org/fhir/R4/adverseeventsuspectentity.html
 */
export interface IAdverseEventSuspectEntity extends IBackboneElement {
  /**
   * Refers to the specific entity that caused the adverse event
   */
  instanceCodeableConcept?: ICodeableConcept;

  /**
   * Refers to the specific entity that caused the adverse event
   */
  instanceReference?: IReference;

  /**
   * Information on the possible cause of the event
   */
  causality?: IAdverseEventSuspectEntityCausality;

}
