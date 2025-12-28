import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * AdverseEventMitigatingAction Interface
 * 
 * Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
 * 
 *
 * @see https://hl7.org/fhir/R5/adverseeventmitigatingaction.html
 */
export interface IAdverseEventMitigatingAction extends IBackboneElement {
  /**
   * Ameliorating action taken after the adverse event occured in order to reduce the extent of harm
   */
  itemReference?: IReference;

  /**
   * Ameliorating action taken after the adverse event occured in order to reduce the extent of harm
   */
  itemCodeableConcept?: ICodeableConcept;

}
