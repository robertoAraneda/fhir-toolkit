import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAccountDiagnosis,
  ICodeableConcept,
  ICodeableReference,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AccountDiagnosis */
const ACCOUNT_DIAGNOSIS_PROPERTIES = [
  'sequence',
  '_sequence',
  'condition',
  'dateOfDiagnosis',
  '_dateOfDiagnosis',
  'type',
  'onAdmission',
  '_onAdmission',
  'packageCode',
] as const;

/**
 * AccountDiagnosis - The list of diagnoses relevant to this account
 *
 * @see https://hl7.org/fhir/R5/accountdiagnosis.html
 *
 * @example
 * const accountDiagnosis = new AccountDiagnosis({
 *   // ... properties
 * });
 */
export class AccountDiagnosis extends BackboneElement implements IAccountDiagnosis {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Ranking of the diagnosis (for each type) */
  sequence?: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** The diagnosis relevant to the account */
  condition: ICodeableReference;

  /** Date of the diagnosis (when coded diagnosis) */
  dateOfDiagnosis?: string;

  /** Extension for dateOfDiagnosis */
  _dateOfDiagnosis?: IElement;

  /** Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge …) */
  type?: ICodeableConcept[];

  /** Diagnosis present on Admission */
  onAdmission?: boolean;

  /** Extension for onAdmission */
  _onAdmission?: IElement;

  /** Package Code specific for billing */
  packageCode?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAccountDiagnosis>) {
    super(data);
    if (data) {
      this.assignProps(data, ACCOUNT_DIAGNOSIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AccountDiagnosis from a JSON object
   */
  static fromJSON(json: IAccountDiagnosis): AccountDiagnosis {
    return new AccountDiagnosis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AccountDiagnosis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAccountDiagnosis>): AccountDiagnosis {
    return new AccountDiagnosis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AccountDiagnosis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAccountDiagnosis) => Partial<IAccountDiagnosis>): AccountDiagnosis {
    const currentData = this.toJSON();
    return new AccountDiagnosis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAccountDiagnosis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAccountDiagnosis {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ACCOUNT_DIAGNOSIS_PROPERTIES);
    return result as IAccountDiagnosis;
  }

  /**
   * Create a deep clone of this AccountDiagnosis
   */
  clone(): AccountDiagnosis {
    return new AccountDiagnosis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AccountDiagnosis
   */
  toString(): string {
    const parts: string[] = ['AccountDiagnosis'];
    return parts.join(', ');
  }
}
