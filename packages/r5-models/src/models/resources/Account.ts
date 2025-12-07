import { DomainResource } from '../base/DomainResource.js';
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
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Account */
const ACCOUNT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'billingStatus',
  'type',
  'name',
  '_name',
  'subject',
  'servicePeriod',
  'coverage',
  'owner',
  'description',
  '_description',
  'guarantor',
  'diagnosis',
  'procedure',
  'relatedAccount',
  'currency',
  'balance',
  'calculatedAt',
  '_calculatedAt',
] as const;

/**
 * Account - A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 *
 * @see https://hl7.org/fhir/R4/account.html
 *
 * @example
 * const account = new Account({
 *   resourceType: 'Account',
 *   // ... properties
 * });
 */
export class Account extends DomainResource implements IAccount {
  readonly resourceType = 'Account' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Account number */
  identifier?: IIdentifier[];

  /** active | inactive | entered-in-error | on-hold | unknown */
  status: AccountStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Tracks the lifecycle of the account through the billing process */
  billingStatus?: ICodeableConcept;

  /** E.g. patient, expense, depreciation */
  type?: ICodeableConcept;

  /** Human-readable label */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** The entity that caused the expenses */
  subject?: IReference<'Patient' | 'Device' | 'Practitioner' | 'PractitionerRole' | 'Location' | 'HealthcareService' | 'Organization'>[];

  /** Transaction window */
  servicePeriod?: IPeriod;

  /** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account */
  coverage?: IAccountCoverage[];

  /** Entity managing the Account */
  owner?: IReference<'Organization'>;

  /** Explanation of purpose/use */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The parties ultimately responsible for balancing the Account */
  guarantor?: IAccountGuarantor[];

  /** The list of diagnoses relevant to this account */
  diagnosis?: IAccountDiagnosis[];

  /** The list of procedures relevant to this account */
  procedure?: IAccountProcedure[];

  /** Other associated accounts related to this account */
  relatedAccount?: IAccountRelatedAccount[];

  /** The base or default currency */
  currency?: ICodeableConcept;

  /** Calculated account balance(s) */
  balance?: IAccountBalance[];

  /** Time the balance amount was calculated */
  calculatedAt?: string;

  /** Extension for calculatedAt */
  _calculatedAt?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAccount>) {
    super(data);
    if (data) {
      this.assignProps(data, ACCOUNT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Account from a JSON object
   */
  static fromJSON(json: IAccount): Account {
    return new Account(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Account with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAccount>): Account {
    return new Account({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Account by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAccount) => Partial<IAccount>): Account {
    const currentData = this.toJSON();
    return new Account({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAccount)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAccount {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ACCOUNT_PROPERTIES);
    return result as IAccount;
  }

  /**
   * Create a deep clone of this Account
   */
  clone(): Account {
    return new Account(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Account
   */
  toString(): string {
    const parts: string[] = ['Account'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
