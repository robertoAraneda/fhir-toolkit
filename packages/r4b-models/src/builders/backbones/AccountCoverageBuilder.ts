import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AccountCoverage } from '../../models/backbones/AccountCoverage.js';
import type {
  IAccountCoverage,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * AccountCoverageBuilder - Fluent builder for AccountCoverage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const accountCoverage = new AccountCoverageBuilder()
 *   .setCoverage(value)
 *   .build();
 */
export class AccountCoverageBuilder extends BackboneElementBuilder<AccountCoverage, IAccountCoverage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set coverage
   * The party(s), such as insurances, that may contribute to the payment of this account
   */
  setCoverage(coverage: IReference<'Coverage'>): this {
    this.data.coverage = coverage;
    return this;
  }

  /**
   * Set priority
   * The priority of the coverage in the context of this account
   */
  setPriority(priority: number): this {
    this.data.priority = priority;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AccountCoverage instance
   */
  build(): AccountCoverage {
    return new AccountCoverage(this.data);
  }

  /**
   * Build and validate the AccountCoverage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AccountCoverage> {
    const accountCoverage = this.build();
    await accountCoverage.validateOrThrow();
    return accountCoverage;
  }
}
