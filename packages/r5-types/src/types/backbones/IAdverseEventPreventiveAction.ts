import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * AdverseEventPreventiveAction Interface
 * 
 * Preventive actions that contributed to avoiding the adverse event
 * 
 *
 * @see https://hl7.org/fhir/R4/adverseeventpreventiveaction.html
 */
export interface IAdverseEventPreventiveAction extends IBackboneElement {
  /**
   * Action that contributed to avoiding the adverse event
   */
  itemReference?: IReference;

  /**
   * Action that contributed to avoiding the adverse event
   */
  itemCodeableConcept?: ICodeableConcept;

}
