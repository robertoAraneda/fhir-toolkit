import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAccountRelatedAccount,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AccountRelatedAccount */
const ACCOUNT_RELATED_ACCOUNT_PROPERTIES = [
  'relationship',
  'account',
] as const;

/**
 * AccountRelatedAccount - Other associated accounts related to this account
 *
 * @see https://hl7.org/fhir/R4/accountrelatedaccount.html
 *
 * @example
 * const accountRelatedAccount = new AccountRelatedAccount({
 *   // ... properties
 * });
 */
export class AccountRelatedAccount extends BackboneElement implements IAccountRelatedAccount {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Relationship of the associated Account */
  relationship?: ICodeableConcept;

  /** Reference to an associated Account */
  account: IReference<'Account'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAccountRelatedAccount>) {
    super(data);
    if (data) {
      this.assignProps(data, ACCOUNT_RELATED_ACCOUNT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AccountRelatedAccount from a JSON object
   */
  static fromJSON(json: IAccountRelatedAccount): AccountRelatedAccount {
    return new AccountRelatedAccount(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AccountRelatedAccount with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAccountRelatedAccount>): AccountRelatedAccount {
    return new AccountRelatedAccount({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AccountRelatedAccount by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAccountRelatedAccount) => Partial<IAccountRelatedAccount>): AccountRelatedAccount {
    const currentData = this.toJSON();
    return new AccountRelatedAccount({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAccountRelatedAccount)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAccountRelatedAccount {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ACCOUNT_RELATED_ACCOUNT_PROPERTIES);
    return result as IAccountRelatedAccount;
  }

  /**
   * Create a deep clone of this AccountRelatedAccount
   */
  clone(): AccountRelatedAccount {
    return new AccountRelatedAccount(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AccountRelatedAccount
   */
  toString(): string {
    const parts: string[] = ['AccountRelatedAccount'];
    return parts.join(', ');
  }
}
