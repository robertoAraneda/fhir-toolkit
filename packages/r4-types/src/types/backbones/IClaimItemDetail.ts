import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IClaimItemDetailSubDetail } from './IClaimItemDetailSubDetail.js';

/**
 * ClaimItemDetail Interface
 * 
 * Product or service provided
 * 
 *
 * @see https://hl7.org/fhir/R4/claimitemdetail.html
 */
export interface IClaimItemDetail extends IBackboneElement {
  /**
   * Item instance identifier
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Revenue or cost center code
   */
  revenue?: ICodeableConcept;

  /**
   * Benefit classification
   */
  category?: ICodeableConcept;

  /**
   * Billing, service, product, or drug code
   */
  productOrService: ICodeableConcept;

  /**
   * Service/Product billing modifiers
   */
  modifier?: ICodeableConcept[];

  /**
   * Program the product or service is provided under
   */
  programCode?: ICodeableConcept[];

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
   * Unique device identifier
   */
  udi?: IReference<'Device'>[];

  /**
   * Product or service provided
   */
  subDetail?: IClaimItemDetailSubDetail[];

}
