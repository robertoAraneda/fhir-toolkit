import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * PaymentReconciliationAllocation Interface
 * 
 * Settlement particulars
 * 
 *
 * @see https://hl7.org/fhir/R4/paymentreconciliationallocation.html
 */
export interface IPaymentReconciliationAllocation extends IBackboneElement {
  /**
   * Business identifier of the payment detail
   */
  identifier?: IIdentifier;

  /**
   * Business identifier of the prior payment detail
   */
  predecessor?: IIdentifier;

  /**
   * Subject of the payment
   */
  target?: IReference<'Claim' | 'Account' | 'Invoice' | 'ChargeItem' | 'Encounter' | 'Contract'>;

  /**
   * Sub-element of the subject
   */
  targetItemString?: string;
  /**
   * Extension for targetItemString
   */
  _targetItemString?: IElement;

  /**
   * Sub-element of the subject
   */
  targetItemIdentifier?: IIdentifier;

  /**
   * Sub-element of the subject
   */
  targetItemPositiveInt?: number;
  /**
   * Extension for targetItemPositiveInt
   */
  _targetItemPositiveInt?: IElement;

  /**
   * Applied-to encounter
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Applied-to account
   */
  account?: IReference<'Account'>;

  /**
   * Category of payment
   */
  type?: ICodeableConcept;

  /**
   * Submitter of the request
   */
  submitter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Response committing to a payment
   */
  response?: IReference<'ClaimResponse'>;

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
