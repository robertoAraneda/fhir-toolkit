import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * ClaimItemBodySite Interface
 * 
 * Anatomical location
 * 
 *
 * @see https://hl7.org/fhir/R4/claimitembodysite.html
 */
export interface IClaimItemBodySite extends IBackboneElement {
  /**
   * Location
   */
  site: ICodeableReference[];

  /**
   * Sub-location
   */
  subSite?: ICodeableConcept[];

}
