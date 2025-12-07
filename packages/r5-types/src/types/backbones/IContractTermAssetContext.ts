import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ContractTermAssetContext Interface
 * 
 * Circumstance of the asset
 * 
 *
 * @see https://hl7.org/fhir/R4/contracttermassetcontext.html
 */
export interface IContractTermAssetContext extends IBackboneElement {
  /**
   * Creator,custodian or owner
   */
  reference?: IReference<'Resource'>;

  /**
   * Codeable asset context
   */
  code?: ICodeableConcept[];

  /**
   * Context description
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

}
