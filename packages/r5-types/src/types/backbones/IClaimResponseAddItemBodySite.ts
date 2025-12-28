import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * ClaimResponseAddItemBodySite Interface
 * 
 * Anatomical location
 * 
 *
 * @see https://hl7.org/fhir/R5/claimresponseadditembodysite.html
 */
export interface IClaimResponseAddItemBodySite extends IBackboneElement {
  /**
   * Location
   */
  site: ICodeableReference[];

  /**
   * Sub-location
   */
  subSite?: ICodeableConcept[];

}
