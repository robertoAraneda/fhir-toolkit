import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AccountBalance } from '../../models/backbones/AccountBalance.js';
import type {
  IAccountBalance,
  ICodeableConcept,
  IMoney,
} from '@fhir-toolkit/r5-types';

/**
 * AccountBalanceBuilder - Fluent builder for AccountBalance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const accountBalance = new AccountBalanceBuilder()
 *   .setAggregate(value)
 *   .build();
 */
export class AccountBalanceBuilder extends BackboneElementBuilder<AccountBalance, IAccountBalance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set aggregate
   * Who is expected to pay this part of the balance
   */
  setAggregate(aggregate: ICodeableConcept): this {
    this.data.aggregate = aggregate;
    return this;
  }

  /**
   * Set term
   * current | 30 | 60 | 90 | 120
   */
  setTerm(term: ICodeableConcept): this {
    this.data.term = term;
    return this;
  }

  /**
   * Set estimate
   * Estimated balance
   */
  setEstimate(estimate: boolean): this {
    this.data.estimate = estimate;
    return this;
  }

  /**
   * Set amount
   * Calculated amount
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AccountBalance instance
   */
  build(): AccountBalance {
    return new AccountBalance(this.data);
  }

  /**
   * Build and validate the AccountBalance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AccountBalance> {
    const accountBalance = this.build();
    await accountBalance.validateOrThrow();
    return accountBalance;
  }
}
