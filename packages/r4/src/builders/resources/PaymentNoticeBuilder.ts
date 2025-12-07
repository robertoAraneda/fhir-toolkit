import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { PaymentNotice } from '../../models/resources/PaymentNotice.js';
import type {
  FinancialResourceStatusType,
  ICodeableConcept,
  IIdentifier,
  IMoney,
  IPaymentNotice,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * PaymentNoticeBuilder - Fluent builder for PaymentNotice resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const paymentNotice = new PaymentNoticeBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PaymentNoticeBuilder extends DomainResourceBuilder<PaymentNotice, IPaymentNotice> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | cancelled | draft | entered-in-error
   */
  setStatus(status: FinancialResourceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set request
   * Request reference
   */
  setRequest(request: IReference<'Resource'>): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set response
   * Response reference
   */
  setResponse(response: IReference<'Resource'>): this {
    this.data.response = response;
    return this;
  }

  /**
   * Set created
   * Creation date
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set provider
   * Responsible practitioner
   */
  setProvider(provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.provider = provider;
    return this;
  }

  /**
   * Set payment
   * Payment reference
   */
  setPayment(payment: IReference<'PaymentReconciliation'>): this {
    this.data.payment = payment;
    return this;
  }

  /**
   * Set paymentDate
   * Payment or clearing date
   */
  setPaymentDate(paymentDate: string): this {
    this.data.paymentDate = paymentDate;
    return this;
  }

  /**
   * Set payee
   * Party being paid
   */
  setPayee(payee: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.payee = payee;
    return this;
  }

  /**
   * Set recipient
   * Party being notified
   */
  setRecipient(recipient: IReference<'Organization'>): this {
    this.data.recipient = recipient;
    return this;
  }

  /**
   * Set amount
   * Monetary amount of the payment
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  /**
   * Set paymentStatus
   * Issued or cleared Status of the payment
   */
  setPaymentStatus(paymentStatus: ICodeableConcept): this {
    this.data.paymentStatus = paymentStatus;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for the payment noctice
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PaymentNotice instance
   */
  build(): PaymentNotice {
    return new PaymentNotice(this.data);
  }

  /**
   * Build and validate the PaymentNotice instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PaymentNotice> {
    const paymentNotice = this.build();
    await paymentNotice.validateOrThrow();
    return paymentNotice;
  }
}
