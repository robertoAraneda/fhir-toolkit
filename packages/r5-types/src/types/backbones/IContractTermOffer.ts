import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IContractTermOfferAnswer } from './IContractTermOfferAnswer.js';
import type { IContractTermOfferParty } from './IContractTermOfferParty.js';

/**
 * ContractTermOffer Interface
 * 
 * Context of the Contract term
 * 
 *
 * @see https://hl7.org/fhir/R5/contracttermoffer.html
 */
export interface IContractTermOffer extends IBackboneElement {
  /**
   * Offer business ID
   */
  identifier?: IIdentifier[];

  /**
   * Offer Recipient
   */
  party?: IContractTermOfferParty[];

  /**
   * Negotiable offer asset
   */
  topic?: IReference<'Resource'>;

  /**
   * Contract Offer Type or Form
   */
  type?: ICodeableConcept;

  /**
   * Accepting party choice
   */
  decision?: ICodeableConcept;

  /**
   * How decision is conveyed
   */
  decisionMode?: ICodeableConcept[];

  /**
   * Response to offer text
   */
  answer?: IContractTermOfferAnswer[];

  /**
   * Human readable offer text
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Pointer to text
   */
  linkId?: string[];
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * Offer restriction numbers
   */
  securityLabelNumber?: number[];
  /**
   * Extension for securityLabelNumber
   */
  _securityLabelNumber?: IElement;

}
