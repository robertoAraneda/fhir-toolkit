import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * ExplanationOfBenefitAddItemBodySite Interface
 * 
 * Anatomical location
 * 
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitadditembodysite.html
 */
export interface IExplanationOfBenefitAddItemBodySite extends IBackboneElement {
  /**
   * Location
   */
  site: ICodeableReference[];

  /**
   * Sub-location
   */
  subSite?: ICodeableConcept[];

}
