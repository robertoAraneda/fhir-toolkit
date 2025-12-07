import type { IBackboneElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * ContractRule Interface
 * 
 * Computable Contract Language
 * 
 *
 * @see https://hl7.org/fhir/R4/contractrule.html
 */
export interface IContractRule extends IBackboneElement {
  /**
   * Computable Contract Rules
   */
  contentAttachment?: IAttachment;

  /**
   * Computable Contract Rules
   */
  contentReference?: IReference;

}
