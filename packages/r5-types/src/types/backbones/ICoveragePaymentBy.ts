import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * CoveragePaymentBy Interface
 * 
 * Self-pay parties and responsibility
 * 
 *
 * @see https://hl7.org/fhir/R4/coveragepaymentby.html
 */
export interface ICoveragePaymentBy extends IBackboneElement {
  /**
   * Parties performing self-payment
   */
  party: IReference<'Patient' | 'RelatedPerson' | 'Organization'>;

  /**
   * Party's responsibility
   */
  responsibility?: string;
  /**
   * Extension for responsibility
   */
  _responsibility?: IElement;

}
