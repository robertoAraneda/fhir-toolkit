import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IClaimResponseItemAdjudication } from './IClaimResponseItemAdjudication.js';
import type { IClaimResponseItemDetailSubDetail } from './IClaimResponseItemDetailSubDetail.js';

/**
 * ClaimResponseItemDetail Interface
 * 
 * Adjudication for claim details
 * 
 *
 * @see https://hl7.org/fhir/R4/claimresponseitemdetail.html
 */
export interface IClaimResponseItemDetail extends IBackboneElement {
  /**
   * Claim detail instance identifier
   */
  detailSequence: number;
  /**
   * Extension for detailSequence
   */
  _detailSequence?: IElement;

  /**
   * Applicable note numbers
   */
  noteNumber?: number[];
  /**
   * Extension for noteNumber
   */
  _noteNumber?: IElement;

  /**
   * Detail level adjudication details
   */
  adjudication: IClaimResponseItemAdjudication[];

  /**
   * Adjudication for claim sub-details
   */
  subDetail?: IClaimResponseItemDetailSubDetail[];

}
