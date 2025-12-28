import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAccountGuarantor,
  IElement,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AccountGuarantor */
const ACCOUNT_GUARANTOR_PROPERTIES = [
  'party',
  'onHold',
  '_onHold',
  'period',
] as const;

/**
 * AccountGuarantor - The parties ultimately responsible for balancing the Account
 *
 * @see https://hl7.org/fhir/R5/accountguarantor.html
 *
 * @example
 * const accountGuarantor = new AccountGuarantor({
 *   // ... properties
 * });
 */
export class AccountGuarantor extends BackboneElement implements IAccountGuarantor {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Responsible entity */
  party: IReference<'Patient' | 'RelatedPerson' | 'Organization'>;

  /** Credit or other hold applied */
  onHold?: boolean;

  /** Extension for onHold */
  _onHold?: IElement;

  /** Guarantee account during */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAccountGuarantor>) {
    super(data);
    if (data) {
      this.assignProps(data, ACCOUNT_GUARANTOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AccountGuarantor from a JSON object
   */
  static fromJSON(json: IAccountGuarantor): AccountGuarantor {
    return new AccountGuarantor(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AccountGuarantor with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAccountGuarantor>): AccountGuarantor {
    return new AccountGuarantor({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AccountGuarantor by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAccountGuarantor) => Partial<IAccountGuarantor>): AccountGuarantor {
    const currentData = this.toJSON();
    return new AccountGuarantor({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAccountGuarantor)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAccountGuarantor {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ACCOUNT_GUARANTOR_PROPERTIES);
    return result as IAccountGuarantor;
  }

  /**
   * Create a deep clone of this AccountGuarantor
   */
  clone(): AccountGuarantor {
    return new AccountGuarantor(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AccountGuarantor
   */
  toString(): string {
    const parts: string[] = ['AccountGuarantor'];
    return parts.join(', ');
  }
}
