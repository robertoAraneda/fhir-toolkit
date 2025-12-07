import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimRelated,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ClaimRelated */
const CLAIM_RELATED_PROPERTIES = [
  'claim',
  'relationship',
  'reference',
] as const;

/**
 * ClaimRelated - Prior or corollary claims
 *
 * @see https://hl7.org/fhir/R4/claimrelated.html
 *
 * @example
 * const claimRelated = new ClaimRelated({
 *   // ... properties
 * });
 */
export class ClaimRelated extends BackboneElement implements IClaimRelated {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to the related claim */
  claim?: IReference<'Claim'>;

  /** How the reference claim is related */
  relationship?: ICodeableConcept;

  /** File or case reference */
  reference?: IIdentifier;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimRelated>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RELATED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimRelated from a JSON object
   */
  static fromJSON(json: IClaimRelated): ClaimRelated {
    return new ClaimRelated(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimRelated with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimRelated>): ClaimRelated {
    return new ClaimRelated({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimRelated by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimRelated) => Partial<IClaimRelated>): ClaimRelated {
    const currentData = this.toJSON();
    return new ClaimRelated({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimRelated)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimRelated {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RELATED_PROPERTIES);
    return result as IClaimRelated;
  }

  /**
   * Create a deep clone of this ClaimRelated
   */
  clone(): ClaimRelated {
    return new ClaimRelated(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimRelated
   */
  toString(): string {
    const parts: string[] = ['ClaimRelated'];
    return parts.join(', ');
  }
}
