import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IClaimResponseItemAdjudication } from './IClaimResponseItemAdjudication.js';
import type { IClaimResponseItemReviewOutcome } from './IClaimResponseItemReviewOutcome.js';

/**
 * ClaimResponseItemDetailSubDetail Interface
 * 
 * Adjudication for claim sub-details
 * 
 *
 * @see https://hl7.org/fhir/R5/claimresponseitemdetailsubdetail.html
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
   * Number for tracking
   */
  traceNumber?: IIdentifier[];

  /**
   * Applicable note numbers
   */
  noteNumber?: number[];
  /**
   * Extension for noteNumber
   */
  _noteNumber?: IElement;

  /**
   * Subdetail level adjudication results
   */
  reviewOutcome?: IClaimResponseItemReviewOutcome;

  /**
   * Subdetail level adjudication details
   */
  adjudication?: IClaimResponseItemAdjudication[];

}
