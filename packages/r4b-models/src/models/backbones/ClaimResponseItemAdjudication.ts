import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseItemAdjudication,
  ICodeableConcept,
  IElement,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimResponseItemAdjudication */
const CLAIM_RESPONSE_ITEM_ADJUDICATION_PROPERTIES = [
  'category',
  'reason',
  'amount',
  'value',
  '_value',
] as const;

/**
 * ClaimResponseItemAdjudication - Adjudication details
 *
 * @see https://hl7.org/fhir/R4B/claimresponseitemadjudication.html
 *
 * @example
 * const claimResponseItemAdjudication = new ClaimResponseItemAdjudication({
 *   // ... properties
 * });
 */
export class ClaimResponseItemAdjudication extends BackboneElement implements IClaimResponseItemAdjudication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of adjudication information */
  category: ICodeableConcept;

  /** Explanation of adjudication outcome */
  reason?: ICodeableConcept;

  /** Monetary amount */
  amount?: IMoney;

  /** Non-monetary value */
  value?: number;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseItemAdjudication>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ITEM_ADJUDICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseItemAdjudication from a JSON object
   */
  static fromJSON(json: IClaimResponseItemAdjudication): ClaimResponseItemAdjudication {
    return new ClaimResponseItemAdjudication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseItemAdjudication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseItemAdjudication>): ClaimResponseItemAdjudication {
    return new ClaimResponseItemAdjudication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseItemAdjudication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseItemAdjudication) => Partial<IClaimResponseItemAdjudication>): ClaimResponseItemAdjudication {
    const currentData = this.toJSON();
    return new ClaimResponseItemAdjudication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseItemAdjudication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseItemAdjudication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ITEM_ADJUDICATION_PROPERTIES);
    return result as IClaimResponseItemAdjudication;
  }

  /**
   * Create a deep clone of this ClaimResponseItemAdjudication
   */
  clone(): ClaimResponseItemAdjudication {
    return new ClaimResponseItemAdjudication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseItemAdjudication
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseItemAdjudication'];
    return parts.join(', ');
  }
}
