import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * PaymentReconciliationDetail Interface
 * 
 * Settlement particulars
 * 
 *
 * @see https://hl7.org/fhir/R4B/paymentreconciliationdetail.html
 */
export interface IPaymentReconciliationDetail extends IBackboneElement {
  /**
   * Business identifier of the payment detail
   */
  identifier?: IIdentifier;

  /**
   * Business identifier of the prior payment detail
   */
  predecessor?: IIdentifier;

  /**
   * Category of payment
   */
  type: ICodeableConcept;

  /**
   * Request giving rise to the payment
   */
  request?: IReference<'Resource'>;

  /**
   * Submitter of the request
   */
  submitter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Response committing to a payment
   */
  response?: IReference<'Resource'>;

  /**
   * Date of commitment to pay
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Contact for the response
   */
  responsible?: IReference<'PractitionerRole'>;

  /**
   * Recipient of the payment
   */
  payee?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Amount allocated to this payable
   */
  amount?: IMoney;

}
