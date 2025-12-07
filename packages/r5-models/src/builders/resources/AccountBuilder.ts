import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Account } from '../../models/resources/Account.js';
import type {
  AccountStatusType,
  IAccount,
  IAccountBalance,
  IAccountCoverage,
  IAccountDiagnosis,
  IAccountGuarantor,
  IAccountProcedure,
  IAccountRelatedAccount,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AccountBuilder - Fluent builder for Account resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const account = new AccountBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class AccountBuilder extends DomainResourceBuilder<Account, IAccount> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | inactive | entered-in-error | on-hold | unknown
   */
  setStatus(status: AccountStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set billingStatus
   * Tracks the lifecycle of the account through the billing process
   */
  setBillingStatus(billingStatus: ICodeableConcept): this {
    this.data.billingStatus = billingStatus;
    return this;
  }

  /**
   * Set type
   * E.g. patient, expense, depreciation
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set name
   * Human-readable label
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set servicePeriod
   * Transaction window
   */
  setServicePeriod(servicePeriod: IPeriod): this {
    this.data.servicePeriod = servicePeriod;
    return this;
  }

  /**
   * Set owner
   * Entity managing the Account
   */
  setOwner(owner: IReference<'Organization'>): this {
    this.data.owner = owner;
    return this;
  }

  /**
   * Set description
   * Explanation of purpose/use
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set currency
   * The base or default currency
   */
  setCurrency(currency: ICodeableConcept): this {
    this.data.currency = currency;
    return this;
  }

  /**
   * Set calculatedAt
   * Time the balance amount was calculated
   */
  setCalculatedAt(calculatedAt: string): this {
    this.data.calculatedAt = calculatedAt;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Account number
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add subject
   * The entity that caused the expenses
   */
  addSubject(subject: IReference<'Patient' | 'Device' | 'Practitioner' | 'PractitionerRole' | 'Location' | 'HealthcareService' | 'Organization'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add coverage
   * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
   */
  addCoverage(coverage: IAccountCoverage): this {
    return this.addToArray('coverage', coverage);
  }

  /**
   * Add guarantor
   * The parties ultimately responsible for balancing the Account
   */
  addGuarantor(guarantor: IAccountGuarantor): this {
    return this.addToArray('guarantor', guarantor);
  }

  /**
   * Add diagnosis
   * The list of diagnoses relevant to this account
   */
  addDiagnosis(diagnosi: IAccountDiagnosis): this {
    return this.addToArray('diagnosis', diagnosi);
  }

  /**
   * Add procedure
   * The list of procedures relevant to this account
   */
  addProcedure(procedure: IAccountProcedure): this {
    return this.addToArray('procedure', procedure);
  }

  /**
   * Add relatedAccount
   * Other associated accounts related to this account
   */
  addRelatedAccount(relatedAccount: IAccountRelatedAccount): this {
    return this.addToArray('relatedAccount', relatedAccount);
  }

  /**
   * Add balance
   * Calculated account balance(s)
   */
  addBalance(balance: IAccountBalance): this {
    return this.addToArray('balance', balance);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Account instance
   */
  build(): Account {
    return new Account(this.data);
  }

  /**
   * Build and validate the Account instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Account> {
    const account = this.build();
    await account.validateOrThrow();
    return account;
  }
}
