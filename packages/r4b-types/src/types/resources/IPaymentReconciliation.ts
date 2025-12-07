import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IPaymentReconciliationDetail } from '../backbones/IPaymentReconciliationDetail.js';
import type { IPaymentReconciliationProcessNote } from '../backbones/IPaymentReconciliationProcessNote.js';
import type { FinancialResourceStatusType, RemittanceOutcomeType } from '../../valuesets/index.js';

/**
 * PaymentReconciliation Interface
 * 
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 * 
 *
 * @see https://hl7.org/fhir/R4/paymentreconciliation.html
 */
export interface IPaymentReconciliation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'PaymentReconciliation';

  /**
   * Business Identifier for a payment reconciliation
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
   * Period covered
   */
  period?: IPeriod;

  /**
   * Creation date
   */
  created: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Party generating payment
   */
  paymentIssuer?: IReference<'Organization'>;

  /**
   * Reference to requesting resource
   */
  request?: IReference<'Task'>;

  /**
   * Responsible practitioner
   */
  requestor?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * queued | complete | error | partial
   */
  outcome?: RemittanceOutcomeType;
  /**
   * Extension for outcome
   */
  _outcome?: IElement;

  /**
   * Disposition message
   */
  disposition?: string;
  /**
   * Extension for disposition
   */
  _disposition?: IElement;

  /**
   * When payment issued
   */
  paymentDate: string;
  /**
   * Extension for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * Total amount of Payment
   */
  paymentAmount: IMoney;

  /**
   * Business identifier for the payment
   */
  paymentIdentifier?: IIdentifier;

  /**
   * Settlement particulars
   */
  detail?: IPaymentReconciliationDetail[];

  /**
   * Printed form identifier
   */
  formCode?: ICodeableConcept;

  /**
   * Note concerning processing
   */
  processNote?: IPaymentReconciliationProcessNote[];

}
