import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IClaimResponseItemAdjudication } from './IClaimResponseItemAdjudication.js';
import type { IClaimResponseItemDetail } from './IClaimResponseItemDetail.js';
import type { IClaimResponseItemReviewOutcome } from './IClaimResponseItemReviewOutcome.js';

/**
 * ClaimResponseItem Interface
 * 
 * Adjudication for claim line items
 * 
 *
 * @see https://hl7.org/fhir/R4/claimresponseitem.html
 */
export interface IClaimResponseItem extends IBackboneElement {
  /**
   * Claim item instance identifier
   */
  itemSequence: number;
  /**
   * Extension for itemSequence
   */
  _itemSequence?: IElement;

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
   * Adjudication results
   */
  reviewOutcome?: IClaimResponseItemReviewOutcome;

  /**
   * Adjudication details
   */
  adjudication?: IClaimResponseItemAdjudication[];

  /**
   * Adjudication for claim details
   */
  detail?: IClaimResponseItemDetail[];

}
