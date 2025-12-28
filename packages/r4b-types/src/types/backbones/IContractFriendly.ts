import type { IBackboneElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * ContractFriendly Interface
 * 
 * Contract Friendly Language
 * 
 *
 * @see https://hl7.org/fhir/R4B/contractfriendly.html
 */
export interface IContractFriendly extends IBackboneElement {
  /**
   * Easily comprehended representation of this Contract
   */
  contentAttachment?: IAttachment;

  /**
   * Easily comprehended representation of this Contract
   */
  contentReference?: IReference;

}
