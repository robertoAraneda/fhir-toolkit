import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IClaimResponseAddItemDetailSubDetail } from './IClaimResponseAddItemDetailSubDetail.js';
import type { IClaimResponseItemAdjudication } from './IClaimResponseItemAdjudication.js';
import type { IClaimResponseItemReviewOutcome } from './IClaimResponseItemReviewOutcome.js';

/**
 * ClaimResponseAddItemDetail Interface
 * 
 * Insurer added line details
 * 
 *
 * @see https://hl7.org/fhir/R5/claimresponseadditemdetail.html
 */
export interface IClaimResponseAddItemDetail extends IBackboneElement {
  /**
   * Number for tracking
   */
  traceNumber?: IIdentifier[];

  /**
   * Revenue or cost center code
   */
  revenue?: ICodeableConcept;

  /**
   * Billing, service, product, or drug code
   */
  productOrService?: ICodeableConcept;

  /**
   * End of a range of codes
   */
  productOrServiceEnd?: ICodeableConcept;

  /**
   * Service/Product billing modifiers
   */
  modifier?: ICodeableConcept[];

  /**
   * Count of products or services
   */
  quantity?: IQuantity;

  /**
   * Fee, charge or cost per item
   */
  unitPrice?: IMoney;

  /**
   * Price scaling factor
   */
  factor?: number;
  /**
   * Extension for factor
   */
  _factor?: IElement;

  /**
   * Total tax
   */
  tax?: IMoney;

  /**
   * Total item cost
   */
  net?: IMoney;

  /**
   * Applicable note numbers
   */
  noteNumber?: number[];
  /**
   * Extension for noteNumber
   */
  _noteNumber?: IElement;

  /**
   * Added items detail level adjudication results
   */
  reviewOutcome?: IClaimResponseItemReviewOutcome;

  /**
   * Added items detail adjudication
   */
  adjudication?: IClaimResponseItemAdjudication[];

  /**
   * Insurer added line items
   */
  subDetail?: IClaimResponseAddItemDetailSubDetail[];

}
