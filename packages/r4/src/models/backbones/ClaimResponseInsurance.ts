import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseInsurance,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ClaimResponseInsurance */
const CLAIM_RESPONSE_INSURANCE_PROPERTIES = [
  'sequence',
  '_sequence',
  'focal',
  '_focal',
  'coverage',
  'businessArrangement',
  '_businessArrangement',
  'claimResponse',
] as const;

/**
 * ClaimResponseInsurance - Patient insurance information
 *
 * @see https://hl7.org/fhir/R4/claimresponseinsurance.html
 *
 * @example
 * const claimResponseInsurance = new ClaimResponseInsurance({
 *   // ... properties
 * });
 */
export class ClaimResponseInsurance extends BackboneElement implements IClaimResponseInsurance {

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

  /** Insurance information */
  coverage: IReference<'Coverage'>;

  /** Additional provider contract number */
  businessArrangement?: string;

  /** Extension for businessArrangement */
  _businessArrangement?: IElement;

  /** Adjudication results */
  claimResponse?: IReference<'ClaimResponse'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseInsurance>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_INSURANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseInsurance from a JSON object
   */
  static fromJSON(json: IClaimResponseInsurance): ClaimResponseInsurance {
    return new ClaimResponseInsurance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseInsurance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseInsurance>): ClaimResponseInsurance {
    return new ClaimResponseInsurance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseInsurance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseInsurance) => Partial<IClaimResponseInsurance>): ClaimResponseInsurance {
    const currentData = this.toJSON();
    return new ClaimResponseInsurance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseInsurance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseInsurance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_INSURANCE_PROPERTIES);
    return result as IClaimResponseInsurance;
  }

  /**
   * Create a deep clone of this ClaimResponseInsurance
   */
  clone(): ClaimResponseInsurance {
    return new ClaimResponseInsurance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseInsurance
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseInsurance'];
    return parts.join(', ');
  }
}
