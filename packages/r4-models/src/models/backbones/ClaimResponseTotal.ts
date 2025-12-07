import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseTotal,
  ICodeableConcept,
  IMoney,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ClaimResponseTotal */
const CLAIM_RESPONSE_TOTAL_PROPERTIES = [
  'category',
  'amount',
] as const;

/**
 * ClaimResponseTotal - Adjudication totals
 *
 * @see https://hl7.org/fhir/R4/claimresponsetotal.html
 *
 * @example
 * const claimResponseTotal = new ClaimResponseTotal({
 *   // ... properties
 * });
 */
export class ClaimResponseTotal extends BackboneElement implements IClaimResponseTotal {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of adjudication information */
  category: ICodeableConcept;

  /** Financial total for the category */
  amount: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseTotal>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_TOTAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseTotal from a JSON object
   */
  static fromJSON(json: IClaimResponseTotal): ClaimResponseTotal {
    return new ClaimResponseTotal(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseTotal with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseTotal>): ClaimResponseTotal {
    return new ClaimResponseTotal({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseTotal by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseTotal) => Partial<IClaimResponseTotal>): ClaimResponseTotal {
    const currentData = this.toJSON();
    return new ClaimResponseTotal({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseTotal)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseTotal {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_TOTAL_PROPERTIES);
    return result as IClaimResponseTotal;
  }

  /**
   * Create a deep clone of this ClaimResponseTotal
   */
  clone(): ClaimResponseTotal {
    return new ClaimResponseTotal(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseTotal
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseTotal'];
    return parts.join(', ');
  }
}
