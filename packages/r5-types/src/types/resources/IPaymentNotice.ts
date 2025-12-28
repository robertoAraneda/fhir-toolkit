import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { FinancialResourceStatusType } from '../../valuesets/index.js';

/**
 * PaymentNotice Interface
 * 
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 * 
 *
 * @see https://hl7.org/fhir/R5/paymentnotice.html
 */
export interface IPaymentNotice extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'PaymentNotice';

  /**
   * Business Identifier for the payment notice
   */
  identifier?: IIdentifier[];

  /**
   * active | cancelled | draft | entered-in-error
   */
  status: FinancialResourceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Request reference
   */
  request?: IReference<'Resource'>;

  /**
   * Response reference
   */
  response?: IReference<'Resource'>;

  /**
   * Creation date
   */
  created: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Responsible practitioner
   */
  reporter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Payment reference
   */
  payment?: IReference<'PaymentReconciliation'>;

  /**
   * Payment or clearing date
   */
  paymentDate?: string;
  /**
   * Extension for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * Party being paid
   */
  payee?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Party being notified
   */
  recipient: IReference<'Organization'>;

  /**
   * Monetary amount of the payment
   */
  amount: IMoney;

  /**
   * Issued or cleared Status of the payment
   */
  paymentStatus?: ICodeableConcept;

}
