import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IExplanationOfBenefitAddItemBodySite } from './IExplanationOfBenefitAddItemBodySite.js';
import type { IExplanationOfBenefitAddItemDetail } from './IExplanationOfBenefitAddItemDetail.js';
import type { IExplanationOfBenefitItemAdjudication } from './IExplanationOfBenefitItemAdjudication.js';
import type { IExplanationOfBenefitItemReviewOutcome } from './IExplanationOfBenefitItemReviewOutcome.js';

/**
 * ExplanationOfBenefitAddItem Interface
 * 
 * Insurer added line items
 * 
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitadditem.html
 */
export interface IExplanationOfBenefitAddItem extends IBackboneElement {
  /**
   * Item sequence number
   */
  itemSequence?: number[];
  /**
   * Extension for itemSequence
   */
  _itemSequence?: IElement;

  /**
   * Detail sequence number
   */
  detailSequence?: number[];
  /**
   * Extension for detailSequence
   */
  _detailSequence?: IElement;

  /**
   * Subdetail sequence number
   */
  subDetailSequence?: number[];
  /**
   * Extension for subDetailSequence
   */
  _subDetailSequence?: IElement;

  /**
   * Number for tracking
   */
  traceNumber?: IIdentifier[];

  /**
   * Authorized providers
   */
  provider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>[];

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
   * Request or Referral for Service
   */
  request?: IReference<'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'SupplyRequest' | 'VisionPrescription'>[];

  /**
   * Service/Product billing modifiers
   */
  modifier?: ICodeableConcept[];

  /**
   * Program the product or service is provided under
   */
  programCode?: ICodeableConcept[];

  /**
   * Date or dates of service or product delivery
   */
  servicedDate?: string;
  /**
   * Extension for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * Date or dates of service or product delivery
   */
  servicedPeriod?: IPeriod;

  /**
   * Place of service or where product was supplied
   */
  locationCodeableConcept?: ICodeableConcept;

  /**
   * Place of service or where product was supplied
   */
  locationAddress?: IAddress;

  /**
   * Place of service or where product was supplied
   */
  locationReference?: IReference;

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
   * Anatomical location
   */
  bodySite?: IExplanationOfBenefitAddItemBodySite[];

  /**
   * Applicable note numbers
   */
  noteNumber?: number[];
  /**
   * Extension for noteNumber
   */
  _noteNumber?: IElement;

  /**
   * Additem level adjudication results
   */
  reviewOutcome?: IExplanationOfBenefitItemReviewOutcome;

  /**
   * Added items adjudication
   */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /**
   * Insurer added line items
   */
  detail?: IExplanationOfBenefitAddItemDetail[];

}
