import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AccountRelatedAccount } from '../../models/backbones/AccountRelatedAccount.js';
import type {
  IAccountRelatedAccount,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AccountRelatedAccountBuilder - Fluent builder for AccountRelatedAccount backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const accountRelatedAccount = new AccountRelatedAccountBuilder()
 *   .setRelationship(value)
 *   .build();
 */
export class AccountRelatedAccountBuilder extends BackboneElementBuilder<AccountRelatedAccount, IAccountRelatedAccount> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set relationship
   * Relationship of the associated Account
   */
  setRelationship(relationship: ICodeableConcept): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set account
   * Reference to an associated Account
   */
  setAccount(account: IReference<'Account'>): this {
    this.data.account = account;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AccountRelatedAccount instance
   */
  build(): AccountRelatedAccount {
    return new AccountRelatedAccount(this.data);
  }

  /**
   * Build and validate the AccountRelatedAccount instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AccountRelatedAccount> {
    const accountRelatedAccount = this.build();
    await accountRelatedAccount.validateOrThrow();
    return accountRelatedAccount;
  }
}
