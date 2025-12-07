import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * ExplanationOfBenefitItemBodySite Interface
 * 
 * Anatomical location
 * 
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefititembodysite.html
 */
export interface IExplanationOfBenefitItemBodySite extends IBackboneElement {
  /**
   * Location
   */
  site: ICodeableReference[];

  /**
   * Sub-location
   */
  subSite?: ICodeableConcept[];

}
