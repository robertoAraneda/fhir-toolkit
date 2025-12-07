import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAccountCoverage,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to AccountCoverage */
const ACCOUNT_COVERAGE_PROPERTIES = [
  'coverage',
  'priority',
  '_priority',
] as const;

/**
 * AccountCoverage - The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 *
 * @see https://hl7.org/fhir/R4/accountcoverage.html
 *
 * @example
 * const accountCoverage = new AccountCoverage({
 *   // ... properties
 * });
 */
export class AccountCoverage extends BackboneElement implements IAccountCoverage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The party(s), such as insurances, that may contribute to the payment of this account */
  coverage: IReference<'Coverage'>;

  /** The priority of the coverage in the context of this account */
  priority?: number;

  /** Extension for priority */
  _priority?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAccountCoverage>) {
    super(data);
    if (data) {
      this.assignProps(data, ACCOUNT_COVERAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AccountCoverage from a JSON object
   */
  static fromJSON(json: IAccountCoverage): AccountCoverage {
    return new AccountCoverage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AccountCoverage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAccountCoverage>): AccountCoverage {
    return new AccountCoverage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AccountCoverage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAccountCoverage) => Partial<IAccountCoverage>): AccountCoverage {
    const currentData = this.toJSON();
    return new AccountCoverage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAccountCoverage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAccountCoverage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ACCOUNT_COVERAGE_PROPERTIES);
    return result as IAccountCoverage;
  }

  /**
   * Create a deep clone of this AccountCoverage
   */
  clone(): AccountCoverage {
    return new AccountCoverage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AccountCoverage
   */
  toString(): string {
    const parts: string[] = ['AccountCoverage'];
    return parts.join(', ');
  }
}
