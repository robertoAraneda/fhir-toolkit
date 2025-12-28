import type { IBackboneElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * ContractLegal Interface
 * 
 * Contract Legal Language
 * 
 *
 * @see https://hl7.org/fhir/R5/contractlegal.html
 */
export interface IContractLegal extends IBackboneElement {
  /**
   * Contract Legal Text
   */
  contentAttachment?: IAttachment;

  /**
   * Contract Legal Text
   */
  contentReference?: IReference;

}
