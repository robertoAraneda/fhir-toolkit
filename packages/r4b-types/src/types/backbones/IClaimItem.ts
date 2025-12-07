import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IClaimItemDetail } from './IClaimItemDetail.js';

/**
 * ClaimItem Interface
 * 
 * Product or service provided
 * 
 *
 * @see https://hl7.org/fhir/R4/claimitem.html
 */
export interface IClaimItem extends IBackboneElement {
  /**
   * Item instance identifier
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Applicable careTeam members
   */
  careTeamSequence?: number[];
  /**
   * Extension for careTeamSequence
   */
  _careTeamSequence?: IElement;

  /**
   * Applicable diagnoses
   */
  diagnosisSequence?: number[];
  /**
   * Extension for diagnosisSequence
   */
  _diagnosisSequence?: IElement;

  /**
   * Applicable procedures
   */
  procedureSequence?: number[];
  /**
   * Extension for procedureSequence
   */
  _procedureSequence?: IElement;

  /**
   * Applicable exception and supporting information
   */
  informationSequence?: number[];
  /**
   * Extension for informationSequence
   */
  _informationSequence?: IElement;

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
   * Product or service billing modifiers
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
   * Anatomical location
   */
  bodySite?: ICodeableConcept;

  /**
   * Anatomical sub-location
   */
  subSite?: ICodeableConcept[];

  /**
   * Encounters related to this billed item
   */
  encounter?: IReference<'Encounter'>[];

  /**
   * Product or service provided
   */
  detail?: IClaimItemDetail[];

}
