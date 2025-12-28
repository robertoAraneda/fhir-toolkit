import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * ContractTermSecurityLabel Interface
 * 
 * Protection for the Term
 * 
 *
 * @see https://hl7.org/fhir/R4B/contracttermsecuritylabel.html
 */
export interface IContractTermSecurityLabel extends IBackboneElement {
  /**
   * Link to Security Labels
   */
  number?: number[];
  /**
   * Extension for number
   */
  _number?: IElement;

  /**
   * Confidentiality Protection
   */
  classification: ICoding;

  /**
   * Applicable Policy
   */
  category?: ICoding[];

  /**
   * Handling Instructions
   */
  control?: ICoding[];

}
