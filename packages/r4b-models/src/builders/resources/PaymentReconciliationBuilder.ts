import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { PaymentReconciliation } from '../../models/resources/PaymentReconciliation.js';
import type {
  FinancialResourceStatusType,
  ICodeableConcept,
  IIdentifier,
  IMoney,
  IPaymentReconciliation,
  IPaymentReconciliationDetail,
  IPaymentReconciliationProcessNote,
  IPeriod,
  IReference,
  RemittanceOutcomeType,
} from '@fhir-toolkit/r4b-types';

/**
 * PaymentReconciliationBuilder - Fluent builder for PaymentReconciliation resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const paymentReconciliation = new PaymentReconciliationBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PaymentReconciliationBuilder extends DomainResourceBuilder<PaymentReconciliation, IPaymentReconciliation> {
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
   * Set period
   * Period covered
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
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
   * Set paymentIssuer
   * Party generating payment
   */
  setPaymentIssuer(paymentIssuer: IReference<'Organization'>): this {
    this.data.paymentIssuer = paymentIssuer;
    return this;
  }

  /**
   * Set request
   * Reference to requesting resource
   */
  setRequest(request: IReference<'Task'>): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set requestor
   * Responsible practitioner
   */
  setRequestor(requestor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.requestor = requestor;
    return this;
  }

  /**
   * Set outcome
   * queued | complete | error | partial
   */
  setOutcome(outcome: RemittanceOutcomeType): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set disposition
   * Disposition message
   */
  setDisposition(disposition: string): this {
    this.data.disposition = disposition;
    return this;
  }

  /**
   * Set paymentDate
   * When payment issued
   */
  setPaymentDate(paymentDate: string): this {
    this.data.paymentDate = paymentDate;
    return this;
  }

  /**
   * Set paymentAmount
   * Total amount of Payment
   */
  setPaymentAmount(paymentAmount: IMoney): this {
    this.data.paymentAmount = paymentAmount;
    return this;
  }

  /**
   * Set paymentIdentifier
   * Business identifier for the payment
   */
  setPaymentIdentifier(paymentIdentifier: IIdentifier): this {
    this.data.paymentIdentifier = paymentIdentifier;
    return this;
  }

  /**
   * Set formCode
   * Printed form identifier
   */
  setFormCode(formCode: ICodeableConcept): this {
    this.data.formCode = formCode;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for a payment reconciliation
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add detail
   * Settlement particulars
   */
  addDetail(detail: IPaymentReconciliationDetail): this {
    return this.addToArray('detail', detail);
  }

  /**
   * Add processNote
   * Note concerning processing
   */
  addProcessNote(processNote: IPaymentReconciliationProcessNote): this {
    return this.addToArray('processNote', processNote);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PaymentReconciliation instance
   */
  build(): PaymentReconciliation {
    return new PaymentReconciliation(this.data);
  }

  /**
   * Build and validate the PaymentReconciliation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PaymentReconciliation> {
    const paymentReconciliation = this.build();
    await paymentReconciliation.validateOrThrow();
    return paymentReconciliation;
  }
}
