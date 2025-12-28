import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ConsentPolicyBasis Interface
 * 
 * Computable version of the backing policy
 * 
 *
 * @see https://hl7.org/fhir/R5/consentpolicybasis.html
 */
export interface IConsentPolicyBasis extends IBackboneElement {
  /**
   * Reference backing policy resource
   */
  reference?: IReference<'Resource'>;

  /**
   * URL to a computable backing policy
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

}
