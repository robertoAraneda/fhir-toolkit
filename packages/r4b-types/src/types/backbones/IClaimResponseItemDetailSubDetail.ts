import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IClaimResponseItemAdjudication } from './IClaimResponseItemAdjudication.js';

/**
 * ClaimResponseItemDetailSubDetail Interface
 * 
 * Adjudication for claim sub-details
 * 
 *
 * @see https://hl7.org/fhir/R4B/claimresponseitemdetailsubdetail.html
 */
export interface IClaimResponseItemDetailSubDetail extends IBackboneElement {
  /**
   * Claim sub-detail instance identifier
   */
  subDetailSequence: number;
  /**
   * Extension for subDetailSequence
   */
  _subDetailSequence?: IElement;

  /**
   * Applicable note numbers
   */
  noteNumber?: number[];
  /**
   * Extension for noteNumber
   */
  _noteNumber?: IElement;

  /**
   * Subdetail level adjudication details
   */
  adjudication?: IClaimResponseItemAdjudication[];

}
