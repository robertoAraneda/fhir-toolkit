import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * ContractTermAssetValuedItem Interface
 * 
 * Contract Valued Item List
 * 
 *
 * @see https://hl7.org/fhir/R4B/contracttermassetvalueditem.html
 */
export interface IContractTermAssetValuedItem extends IBackboneElement {
  /**
   * Contract Valued Item Type
   */
  entityCodeableConcept?: ICodeableConcept;

  /**
   * Contract Valued Item Type
   */
  entityReference?: IReference;

  /**
   * Contract Valued Item Number
   */
  identifier?: IIdentifier;

  /**
   * Contract Valued Item Effective Tiem
   */
  effectiveTime?: string;
  /**
   * Extension for effectiveTime
   */
  _effectiveTime?: IElement;

  /**
   * Count of Contract Valued Items
   */
  quantity?: IQuantity;

  /**
   * Contract Valued Item fee, charge, or cost
   */
  unitPrice?: IMoney;

  /**
   * Contract Valued Item Price Scaling Factor
   */
  factor?: number;
  /**
   * Extension for factor
   */
  _factor?: IElement;

  /**
   * Contract Valued Item Difficulty Scaling Factor
   */
  points?: number;
  /**
   * Extension for points
   */
  _points?: IElement;

  /**
   * Total Contract Valued Item Value
   */
  net?: IMoney;

  /**
   * Terms of valuation
   */
  payment?: string;
  /**
   * Extension for payment
   */
  _payment?: IElement;

  /**
   * When payment is due
   */
  paymentDate?: string;
  /**
   * Extension for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * Who will make payment
   */
  responsible?: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Who will receive payment
   */
  recipient?: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Pointer to specific item
   */
  linkId?: string[];
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * Security Labels that define affected terms
   */
  securityLabelNumber?: number[];
  /**
   * Extension for securityLabelNumber
   */
  _securityLabelNumber?: IElement;

}
