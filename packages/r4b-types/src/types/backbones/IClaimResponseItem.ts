import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IClaimResponseItemAdjudication } from './IClaimResponseItemAdjudication.js';
import type { IClaimResponseItemDetail } from './IClaimResponseItemDetail.js';

/**
 * ClaimResponseItem Interface
 * 
 * Adjudication for claim line items
 * 
 *
 * @see https://hl7.org/fhir/R4B/claimresponseitem.html
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
   * Applicable note numbers
   */
  noteNumber?: number[];
  /**
   * Extension for noteNumber
   */
  _noteNumber?: IElement;

  /**
   * Adjudication details
   */
  adjudication: IClaimResponseItemAdjudication[];

  /**
   * Adjudication for claim details
   */
  detail?: IClaimResponseItemDetail[];

}
