import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAccountBalance,
  ICodeableConcept,
  IElement,
  IMoney,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AccountBalance */
const ACCOUNT_BALANCE_PROPERTIES = [
  'aggregate',
  'term',
  'estimate',
  '_estimate',
  'amount',
] as const;

/**
 * AccountBalance - Calculated account balance(s)
 *
 * @see https://hl7.org/fhir/R4/accountbalance.html
 *
 * @example
 * const accountBalance = new AccountBalance({
 *   // ... properties
 * });
 */
export class AccountBalance extends BackboneElement implements IAccountBalance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Who is expected to pay this part of the balance */
  aggregate?: ICodeableConcept;

  /** current | 30 | 60 | 90 | 120 */
  term?: ICodeableConcept;

  /** Estimated balance */
  estimate?: boolean;

  /** Extension for estimate */
  _estimate?: IElement;

  /** Calculated amount */
  amount: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAccountBalance>) {
    super(data);
    if (data) {
      this.assignProps(data, ACCOUNT_BALANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AccountBalance from a JSON object
   */
  static fromJSON(json: IAccountBalance): AccountBalance {
    return new AccountBalance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AccountBalance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAccountBalance>): AccountBalance {
    return new AccountBalance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AccountBalance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAccountBalance) => Partial<IAccountBalance>): AccountBalance {
    const currentData = this.toJSON();
    return new AccountBalance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAccountBalance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAccountBalance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ACCOUNT_BALANCE_PROPERTIES);
    return result as IAccountBalance;
  }

  /**
   * Create a deep clone of this AccountBalance
   */
  clone(): AccountBalance {
    return new AccountBalance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AccountBalance
   */
  toString(): string {
    const parts: string[] = ['AccountBalance'];
    return parts.join(', ');
  }
}
