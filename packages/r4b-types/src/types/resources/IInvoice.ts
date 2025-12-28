import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IInvoiceLineItem } from '../backbones/IInvoiceLineItem.js';
import type { IInvoiceLineItemPriceComponent } from '../backbones/IInvoiceLineItemPriceComponent.js';
import type { IInvoiceParticipant } from '../backbones/IInvoiceParticipant.js';
import type { InvoiceStatusType } from '../../valuesets/index.js';

/**
 * Invoice Interface
 * 
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 * 
 *
 * @see https://hl7.org/fhir/R4B/invoice.html
 */
export interface IInvoice extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Invoice';

  /**
   * Business Identifier for item
   */
  identifier?: IIdentifier[];

  /**
   * draft | issued | balanced | cancelled | entered-in-error
   */
  status: InvoiceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for cancellation of this Invoice
   */
  cancelledReason?: string;
  /**
   * Extension for cancelledReason
   */
  _cancelledReason?: IElement;

  /**
   * Type of Invoice
   */
  type?: ICodeableConcept;

  /**
   * Recipient(s) of goods and services
   */
  subject?: IReference<'Patient' | 'Group'>;

  /**
   * Recipient of this invoice
   */
  recipient?: IReference<'Organization' | 'Patient' | 'RelatedPerson'>;

  /**
   * Invoice date / posting date
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Participant in creation of this Invoice
   */
  participant?: IInvoiceParticipant[];

  /**
   * Issuing Organization of Invoice
   */
  issuer?: IReference<'Organization'>;

  /**
   * Account that is being balanced
   */
  account?: IReference<'Account'>;

  /**
   * Line items of this Invoice
   */
  lineItem?: IInvoiceLineItem[];

  /**
   * Components of Invoice total
   */
  totalPriceComponent?: IInvoiceLineItemPriceComponent[];

  /**
   * Net total of this Invoice
   */
  totalNet?: IMoney;

  /**
   * Gross total of this Invoice
   */
  totalGross?: IMoney;

  /**
   * Payment details
   */
  paymentTerms?: string;
  /**
   * Extension for paymentTerms
   */
  _paymentTerms?: IElement;

  /**
   * Comments made about the invoice
   */
  note?: IAnnotation[];

}
