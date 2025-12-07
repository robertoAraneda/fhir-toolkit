import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IPaymentReconciliationAllocation } from '../backbones/IPaymentReconciliationAllocation.js';
import type { IPaymentReconciliationProcessNote } from '../backbones/IPaymentReconciliationProcessNote.js';
import type { FinancialResourceStatusType, PaymentOutcomeType } from '../../valuesets/index.js';

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
   * Category of payment
   */
  type: ICodeableConcept;

  /**
   * active | cancelled | draft | entered-in-error
   */
  status: FinancialResourceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Workflow originating payment
   */
  kind?: ICodeableConcept;

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
   * Who entered the payment
   */
  enterer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Nature of the source
   */
  issuerType?: ICodeableConcept;

  /**
   * Party generating payment
   */
  paymentIssuer?: IReference<'Organization' | 'Patient' | 'RelatedPerson'>;

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
  outcome?: PaymentOutcomeType;
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
  date: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Where payment collected
   */
  location?: IReference<'Location'>;

  /**
   * Payment instrument
   */
  method?: ICodeableConcept;

  /**
   * Type of card
   */
  cardBrand?: string;
  /**
   * Extension for cardBrand
   */
  _cardBrand?: IElement;

  /**
   * Digits for verification
   */
  accountNumber?: string;
  /**
   * Extension for accountNumber
   */
  _accountNumber?: IElement;

  /**
   * Expiration year-month
   */
  expirationDate?: string;
  /**
   * Extension for expirationDate
   */
  _expirationDate?: IElement;

  /**
   * Processor name
   */
  processor?: string;
  /**
   * Extension for processor
   */
  _processor?: IElement;

  /**
   * Check number or payment reference
   */
  referenceNumber?: string;
  /**
   * Extension for referenceNumber
   */
  _referenceNumber?: IElement;

  /**
   * Authorization number
   */
  authorization?: string;
  /**
   * Extension for authorization
   */
  _authorization?: IElement;

  /**
   * Amount offered by the issuer
   */
  tenderedAmount?: IMoney;

  /**
   * Amount returned by the receiver
   */
  returnedAmount?: IMoney;

  /**
   * Total amount of Payment
   */
  amount: IMoney;

  /**
   * Business identifier for the payment
   */
  paymentIdentifier?: IIdentifier;

  /**
   * Settlement particulars
   */
  allocation?: IPaymentReconciliationAllocation[];

  /**
   * Printed form identifier
   */
  formCode?: ICodeableConcept;

  /**
   * Note concerning processing
   */
  processNote?: IPaymentReconciliationProcessNote[];

}
