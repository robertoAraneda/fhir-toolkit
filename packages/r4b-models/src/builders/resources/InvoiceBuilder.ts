import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Invoice } from '../../models/resources/Invoice.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IInvoice,
  IInvoiceLineItem,
  IInvoiceLineItemPriceComponent,
  IInvoiceParticipant,
  IMoney,
  IReference,
  InvoiceStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * InvoiceBuilder - Fluent builder for Invoice resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const invoice = new InvoiceBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class InvoiceBuilder extends DomainResourceBuilder<Invoice, IInvoice> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * draft | issued | balanced | cancelled | entered-in-error
   */
  setStatus(status: InvoiceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set cancelledReason
   * Reason for cancellation of this Invoice
   */
  setCancelledReason(cancelledReason: string): this {
    this.data.cancelledReason = cancelledReason;
    return this;
  }

  /**
   * Set type
   * Type of Invoice
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subject
   * Recipient(s) of goods and services
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set recipient
   * Recipient of this invoice
   */
  setRecipient(recipient: IReference<'Organization' | 'Patient' | 'RelatedPerson'>): this {
    this.data.recipient = recipient;
    return this;
  }

  /**
   * Set date
   * Invoice date / posting date
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set issuer
   * Issuing Organization of Invoice
   */
  setIssuer(issuer: IReference<'Organization'>): this {
    this.data.issuer = issuer;
    return this;
  }

  /**
   * Set account
   * Account that is being balanced
   */
  setAccount(account: IReference<'Account'>): this {
    this.data.account = account;
    return this;
  }

  /**
   * Set totalNet
   * Net total of this Invoice
   */
  setTotalNet(totalNet: IMoney): this {
    this.data.totalNet = totalNet;
    return this;
  }

  /**
   * Set totalGross
   * Gross total of this Invoice
   */
  setTotalGross(totalGross: IMoney): this {
    this.data.totalGross = totalGross;
    return this;
  }

  /**
   * Set paymentTerms
   * Payment details
   */
  setPaymentTerms(paymentTerms: string): this {
    this.data.paymentTerms = paymentTerms;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add participant
   * Participant in creation of this Invoice
   */
  addParticipant(participant: IInvoiceParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add lineItem
   * Line items of this Invoice
   */
  addLineItem(lineItem: IInvoiceLineItem): this {
    return this.addToArray('lineItem', lineItem);
  }

  /**
   * Add totalPriceComponent
   * Components of Invoice total
   */
  addTotalPriceComponent(totalPriceComponent: IInvoiceLineItemPriceComponent): this {
    return this.addToArray('totalPriceComponent', totalPriceComponent);
  }

  /**
   * Add note
   * Comments made about the invoice
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Invoice instance
   */
  build(): Invoice {
    return new Invoice(this.data);
  }

  /**
   * Build and validate the Invoice instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Invoice> {
    const invoice = this.build();
    await invoice.validateOrThrow();
    return invoice;
  }
}
