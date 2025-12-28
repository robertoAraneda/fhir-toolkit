import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IClaimResponseAddItemDetailSubDetail } from './IClaimResponseAddItemDetailSubDetail.js';
import type { IClaimResponseItemAdjudication } from './IClaimResponseItemAdjudication.js';

/**
 * ClaimResponseAddItemDetail Interface
 * 
 * Insurer added line details
 * 
 *
 * @see https://hl7.org/fhir/R4B/claimresponseadditemdetail.html
 */
export interface IClaimResponseAddItemDetail extends IBackboneElement {
  /**
   * Billing, service, product, or drug code
   */
  productOrService: ICodeableConcept;

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
   * Added items detail adjudication
   */
  adjudication: IClaimResponseItemAdjudication[];

  /**
   * Insurer added line items
   */
  subDetail?: IClaimResponseAddItemDetailSubDetail[];

}
