import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { PaymentReconciliation } from '../../models/resources/PaymentReconciliation.js';
import type {
  FinancialResourceStatusType,
  ICodeableConcept,
  IIdentifier,
  IMoney,
  IPaymentReconciliation,
  IPaymentReconciliationAllocation,
  IPaymentReconciliationProcessNote,
  IPeriod,
  IReference,
  PaymentOutcomeType,
} from '@fhir-toolkit/r5-types';

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
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PaymentReconciliationBuilder extends DomainResourceBuilder<PaymentReconciliation, IPaymentReconciliation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Category of payment
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set status
   * active | cancelled | draft | entered-in-error
   */
  setStatus(status: FinancialResourceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set kind
   * Workflow originating payment
   */
  setKind(kind: ICodeableConcept): this {
    this.data.kind = kind;
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
   * Set enterer
   * Who entered the payment
   */
  setEnterer(enterer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.enterer = enterer;
    return this;
  }

  /**
   * Set issuerType
   * Nature of the source
   */
  setIssuerType(issuerType: ICodeableConcept): this {
    this.data.issuerType = issuerType;
    return this;
  }

  /**
   * Set paymentIssuer
   * Party generating payment
   */
  setPaymentIssuer(paymentIssuer: IReference<'Organization' | 'Patient' | 'RelatedPerson'>): this {
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
  setOutcome(outcome: PaymentOutcomeType): this {
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
   * Set date
   * When payment issued
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set location
   * Where payment collected
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set method
   * Payment instrument
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set cardBrand
   * Type of card
   */
  setCardBrand(cardBrand: string): this {
    this.data.cardBrand = cardBrand;
    return this;
  }

  /**
   * Set accountNumber
   * Digits for verification
   */
  setAccountNumber(accountNumber: string): this {
    this.data.accountNumber = accountNumber;
    return this;
  }

  /**
   * Set expirationDate
   * Expiration year-month
   */
  setExpirationDate(expirationDate: string): this {
    this.data.expirationDate = expirationDate;
    return this;
  }

  /**
   * Set processor
   * Processor name
   */
  setProcessor(processor: string): this {
    this.data.processor = processor;
    return this;
  }

  /**
   * Set referenceNumber
   * Check number or payment reference
   */
  setReferenceNumber(referenceNumber: string): this {
    this.data.referenceNumber = referenceNumber;
    return this;
  }

  /**
   * Set authorization
   * Authorization number
   */
  setAuthorization(authorization: string): this {
    this.data.authorization = authorization;
    return this;
  }

  /**
   * Set tenderedAmount
   * Amount offered by the issuer
   */
  setTenderedAmount(tenderedAmount: IMoney): this {
    this.data.tenderedAmount = tenderedAmount;
    return this;
  }

  /**
   * Set returnedAmount
   * Amount returned by the receiver
   */
  setReturnedAmount(returnedAmount: IMoney): this {
    this.data.returnedAmount = returnedAmount;
    return this;
  }

  /**
   * Set amount
   * Total amount of Payment
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
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
   * Add allocation
   * Settlement particulars
   */
  addAllocation(allocation: IPaymentReconciliationAllocation): this {
    return this.addToArray('allocation', allocation);
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
