import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAccountProcedure,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AccountProcedure */
const ACCOUNT_PROCEDURE_PROPERTIES = [
  'sequence',
  '_sequence',
  'code',
  'dateOfService',
  '_dateOfService',
  'type',
  'packageCode',
  'device',
] as const;

/**
 * AccountProcedure - The list of procedures relevant to this account
 *
 * @see https://hl7.org/fhir/R5/accountprocedure.html
 *
 * @example
 * const accountProcedure = new AccountProcedure({
 *   // ... properties
 * });
 */
export class AccountProcedure extends BackboneElement implements IAccountProcedure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Ranking of the procedure (for each type) */
  sequence?: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** The procedure relevant to the account */
  code: ICodeableReference;

  /** Date of the procedure (when coded procedure) */
  dateOfService?: string;

  /** Extension for dateOfService */
  _dateOfService?: IElement;

  /** How this procedure value should be used in charging the account */
  type?: ICodeableConcept[];

  /** Package Code specific for billing */
  packageCode?: ICodeableConcept[];

  /** Any devices that were associated with the procedure */
  device?: IReference<'Device'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAccountProcedure>) {
    super(data);
    if (data) {
      this.assignProps(data, ACCOUNT_PROCEDURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AccountProcedure from a JSON object
   */
  static fromJSON(json: IAccountProcedure): AccountProcedure {
    return new AccountProcedure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AccountProcedure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAccountProcedure>): AccountProcedure {
    return new AccountProcedure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AccountProcedure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAccountProcedure) => Partial<IAccountProcedure>): AccountProcedure {
    const currentData = this.toJSON();
    return new AccountProcedure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAccountProcedure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAccountProcedure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ACCOUNT_PROCEDURE_PROPERTIES);
    return result as IAccountProcedure;
  }

  /**
   * Create a deep clone of this AccountProcedure
   */
  clone(): AccountProcedure {
    return new AccountProcedure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AccountProcedure
   */
  toString(): string {
    const parts: string[] = ['AccountProcedure'];
    return parts.join(', ');
  }
}
