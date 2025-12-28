import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * AdverseEventSupportingInfo Interface
 * 
 * Supporting information relevant to the event
 * 
 *
 * @see https://hl7.org/fhir/R5/adverseeventsupportinginfo.html
 */
export interface IAdverseEventSupportingInfo extends IBackboneElement {
  /**
   * Subject medical history or document relevant to this adverse event
   */
  itemReference?: IReference;

  /**
   * Subject medical history or document relevant to this adverse event
   */
  itemCodeableConcept?: ICodeableConcept;

}
