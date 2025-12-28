import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * ClaimResponsePayment Interface
 * 
 * Payment Details
 * 
 *
 * @see https://hl7.org/fhir/R5/claimresponsepayment.html
 */
export interface IClaimResponsePayment extends IBackboneElement {
  /**
   * Partial or complete payment
   */
  type: ICodeableConcept;

  /**
   * Payment adjustment for non-claim issues
   */
  adjustment?: IMoney;

  /**
   * Explanation for the adjustment
   */
  adjustmentReason?: ICodeableConcept;

  /**
   * Expected date of payment
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Payable amount after adjustment
   */
  amount: IMoney;

  /**
   * Business identifier for the payment
   */
  identifier?: IIdentifier;

}
