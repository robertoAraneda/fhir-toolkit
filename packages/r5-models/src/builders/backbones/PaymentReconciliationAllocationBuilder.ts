import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PaymentReconciliationAllocation } from '../../models/backbones/PaymentReconciliationAllocation.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMoney,
  IPaymentReconciliationAllocation,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PaymentReconciliationAllocationBuilder - Fluent builder for PaymentReconciliationAllocation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const paymentReconciliationAllocation = new PaymentReconciliationAllocationBuilder()
 *   .setIdentifier(value)
 *   .build();
 */
export class PaymentReconciliationAllocationBuilder extends BackboneElementBuilder<PaymentReconciliationAllocation, IPaymentReconciliationAllocation> {
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
   * Set target
   * Subject of the payment
   */
  setTarget(target: IReference<'Claim' | 'Account' | 'Invoice' | 'ChargeItem' | 'Encounter' | 'Contract'>): this {
    this.data.target = target;
    return this;
  }

  /**
   * Set encounter
   * Applied-to encounter
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set account
   * Applied-to account
   */
  setAccount(account: IReference<'Account'>): this {
    this.data.account = account;
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
  setResponse(response: IReference<'ClaimResponse'>): this {
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
  // Choice Types
  // ============================================================================

  /**
   * Set targetItem choice type (targetItemString, targetItemIdentifier, targetItemPositiveInt)
   * @param type - 'String' | 'Identifier' | 'PositiveInt'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTargetItem('String', value)
   */
  setTargetItem<T extends 'String' | 'Identifier' | 'PositiveInt'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `targetItem${type}` as keyof IPaymentReconciliationAllocation;
    const otherKeys: (keyof IPaymentReconciliationAllocation)[] = [];
    if (type !== 'String') {
      otherKeys.push('targetItemString' as keyof IPaymentReconciliationAllocation);
      otherKeys.push('_targetItemString' as keyof IPaymentReconciliationAllocation);
    }
    if (type !== 'Identifier') {
      otherKeys.push('targetItemIdentifier' as keyof IPaymentReconciliationAllocation);
      otherKeys.push('_targetItemIdentifier' as keyof IPaymentReconciliationAllocation);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('targetItemPositiveInt' as keyof IPaymentReconciliationAllocation);
      otherKeys.push('_targetItemPositiveInt' as keyof IPaymentReconciliationAllocation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PaymentReconciliationAllocation instance
   */
  build(): PaymentReconciliationAllocation {
    return new PaymentReconciliationAllocation(this.data);
  }

  /**
   * Build and validate the PaymentReconciliationAllocation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PaymentReconciliationAllocation> {
    const paymentReconciliationAllocation = this.build();
    await paymentReconciliationAllocation.validateOrThrow();
    return paymentReconciliationAllocation;
  }
}
