import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * CoverageEligibilityRequestEvent Interface
 * 
 * Event information
 * 
 *
 * @see https://hl7.org/fhir/R5/coverageeligibilityrequestevent.html
 */
export interface ICoverageEligibilityRequestEvent extends IBackboneElement {
  /**
   * Specific event
   */
  type: ICodeableConcept;

  /**
   * Occurance date or period
   */
  whenDateTime?: string;
  /**
   * Extension for whenDateTime
   */
  _whenDateTime?: IElement;

  /**
   * Occurance date or period
   */
  whenPeriod?: IPeriod;

}
