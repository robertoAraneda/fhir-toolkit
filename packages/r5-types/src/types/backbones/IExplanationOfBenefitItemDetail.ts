import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IExplanationOfBenefitItemAdjudication } from './IExplanationOfBenefitItemAdjudication.js';
import type { IExplanationOfBenefitItemDetailSubDetail } from './IExplanationOfBenefitItemDetailSubDetail.js';
import type { IExplanationOfBenefitItemReviewOutcome } from './IExplanationOfBenefitItemReviewOutcome.js';

/**
 * ExplanationOfBenefitItemDetail Interface
 * 
 * Additional items
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefititemdetail.html
 */
export interface IExplanationOfBenefitItemDetail extends IBackboneElement {
  /**
   * Product or service provided
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Number for tracking
   */
  traceNumber?: IIdentifier[];

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
   * Program the product or service is provided under
   */
  programCode?: ICodeableConcept[];

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
   * Unique device identifier
   */
  udi?: IReference<'Device'>[];

  /**
   * Applicable note numbers
   */
  noteNumber?: number[];
  /**
   * Extension for noteNumber
   */
  _noteNumber?: IElement;

  /**
   * Detail level adjudication results
   */
  reviewOutcome?: IExplanationOfBenefitItemReviewOutcome;

  /**
   * Detail level adjudication details
   */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /**
   * Additional items
   */
  subDetail?: IExplanationOfBenefitItemDetailSubDetail[];

}
