import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PaymentReconciliationDetail } from '../../models/backbones/PaymentReconciliationDetail.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMoney,
  IPaymentReconciliationDetail,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * PaymentReconciliationDetailBuilder - Fluent builder for PaymentReconciliationDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const paymentReconciliationDetail = new PaymentReconciliationDetailBuilder()
 *   .setIdentifier(value)
 *   .build();
 */
export class PaymentReconciliationDetailBuilder extends BackboneElementBuilder<PaymentReconciliationDetail, IPaymentReconciliationDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Business identifier of the payment detail
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set predecessor
   * Business identifier of the prior payment detail
   */
  setPredecessor(predecessor: IIdentifier): this {
    this.data.predecessor = predecessor;
    return this;
  }

  /**
   * Set type
   * Category of payment
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set request
   * Request giving rise to the payment
   */
  setRequest(request: IReference<'Resource'>): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set submitter
   * Submitter of the request
   */
  setSubmitter(submitter: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.submitter = submitter;
    return this;
  }

  /**
   * Set response
   * Response committing to a payment
   */
  setResponse(response: IReference<'Resource'>): this {
    this.data.response = response;
    return this;
  }

  /**
   * Set date
   * Date of commitment to pay
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set responsible
   * Contact for the response
   */
  setResponsible(responsible: IReference<'PractitionerRole'>): this {
    this.data.responsible = responsible;
    return this;
  }

  /**
   * Set payee
   * Recipient of the payment
   */
  setPayee(payee: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.payee = payee;
    return this;
  }

  /**
   * Set amount
   * Amount allocated to this payable
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PaymentReconciliationDetail instance
   */
  build(): PaymentReconciliationDetail {
    return new PaymentReconciliationDetail(this.data);
  }

  /**
   * Build and validate the PaymentReconciliationDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PaymentReconciliationDetail> {
    const paymentReconciliationDetail = this.build();
    await paymentReconciliationDetail.validateOrThrow();
    return paymentReconciliationDetail;
  }
}
