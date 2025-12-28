import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IExplanationOfBenefitAddItemDetailSubDetail } from './IExplanationOfBenefitAddItemDetailSubDetail.js';
import type { IExplanationOfBenefitItemAdjudication } from './IExplanationOfBenefitItemAdjudication.js';
import type { IExplanationOfBenefitItemReviewOutcome } from './IExplanationOfBenefitItemReviewOutcome.js';

/**
 * ExplanationOfBenefitAddItemDetail Interface
 * 
 * Insurer added line items
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitadditemdetail.html
 */
export interface IExplanationOfBenefitAddItemDetail extends IBackboneElement {
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
   * Paid by the patient
   */
  patientPaid?: IMoney;

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
   * Additem detail level adjudication results
   */
  reviewOutcome?: IExplanationOfBenefitItemReviewOutcome;

  /**
   * Added items adjudication
   */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /**
   * Insurer added line items
   */
  subDetail?: IExplanationOfBenefitAddItemDetailSubDetail[];

}
