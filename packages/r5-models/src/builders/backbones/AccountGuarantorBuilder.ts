import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AccountGuarantor } from '../../models/backbones/AccountGuarantor.js';
import type {
  IAccountGuarantor,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AccountGuarantorBuilder - Fluent builder for AccountGuarantor backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const accountGuarantor = new AccountGuarantorBuilder()
 *   .setParty(value)
 *   .build();
 */
export class AccountGuarantorBuilder extends BackboneElementBuilder<AccountGuarantor, IAccountGuarantor> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set party
   * Responsible entity
   */
  setParty(party: IReference<'Patient' | 'RelatedPerson' | 'Organization'>): this {
    this.data.party = party;
    return this;
  }

  /**
   * Set onHold
   * Credit or other hold applied
   */
  setOnHold(onHold: boolean): this {
    this.data.onHold = onHold;
    return this;
  }

  /**
   * Set period
   * Guarantee account during
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AccountGuarantor instance
   */
  build(): AccountGuarantor {
    return new AccountGuarantor(this.data);
  }

  /**
   * Build and validate the AccountGuarantor instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AccountGuarantor> {
    const accountGuarantor = this.build();
    await accountGuarantor.validateOrThrow();
    return accountGuarantor;
  }
}
