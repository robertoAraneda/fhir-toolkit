import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimInsurance,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimInsurance */
const CLAIM_INSURANCE_PROPERTIES = [
  'sequence',
  '_sequence',
  'focal',
  '_focal',
  'identifier',
  'coverage',
  'businessArrangement',
  '_businessArrangement',
  'preAuthRef',
  '_preAuthRef',
  'claimResponse',
] as const;

/**
 * ClaimInsurance - Patient insurance information
 *
 * @see https://hl7.org/fhir/R4/claiminsurance.html
 *
 * @example
 * const claimInsurance = new ClaimInsurance({
 *   // ... properties
 * });
 */
export class ClaimInsurance extends BackboneElement implements IClaimInsurance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Insurance instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Coverage to be used for adjudication */
  focal: boolean;

  /** Extension for focal */
  _focal?: IElement;

  /** Pre-assigned Claim number */
  identifier?: IIdentifier;

  /** Insurance information */
  coverage: IReference<'Coverage'>;

  /** Additional provider contract number */
  businessArrangement?: string;

  /** Extension for businessArrangement */
  _businessArrangement?: IElement;

  /** Prior authorization reference number */
  preAuthRef?: string[];

  /** Extension for preAuthRef */
  _preAuthRef?: IElement;

  /** Adjudication results */
  claimResponse?: IReference<'ClaimResponse'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimInsurance>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_INSURANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimInsurance from a JSON object
   */
  static fromJSON(json: IClaimInsurance): ClaimInsurance {
    return new ClaimInsurance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimInsurance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimInsurance>): ClaimInsurance {
    return new ClaimInsurance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimInsurance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimInsurance) => Partial<IClaimInsurance>): ClaimInsurance {
    const currentData = this.toJSON();
    return new ClaimInsurance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimInsurance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimInsurance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_INSURANCE_PROPERTIES);
    return result as IClaimInsurance;
  }

  /**
   * Create a deep clone of this ClaimInsurance
   */
  clone(): ClaimInsurance {
    return new ClaimInsurance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimInsurance
   */
  toString(): string {
    const parts: string[] = ['ClaimInsurance'];
    return parts.join(', ');
  }
}
