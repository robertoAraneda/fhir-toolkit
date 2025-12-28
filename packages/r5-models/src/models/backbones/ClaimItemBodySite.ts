import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimItemBodySite,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimItemBodySite */
const CLAIM_ITEM_BODY_SITE_PROPERTIES = [
  'site',
  'subSite',
] as const;

/**
 * ClaimItemBodySite - Anatomical location
 *
 * @see https://hl7.org/fhir/R5/claimitembodysite.html
 *
 * @example
 * const claimItemBodySite = new ClaimItemBodySite({
 *   // ... properties
 * });
 */
export class ClaimItemBodySite extends BackboneElement implements IClaimItemBodySite {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Location */
  site: ICodeableReference[];

  /** Sub-location */
  subSite?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimItemBodySite>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_ITEM_BODY_SITE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimItemBodySite from a JSON object
   */
  static fromJSON(json: IClaimItemBodySite): ClaimItemBodySite {
    return new ClaimItemBodySite(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimItemBodySite with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimItemBodySite>): ClaimItemBodySite {
    return new ClaimItemBodySite({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimItemBodySite by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimItemBodySite) => Partial<IClaimItemBodySite>): ClaimItemBodySite {
    const currentData = this.toJSON();
    return new ClaimItemBodySite({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimItemBodySite)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimItemBodySite {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_ITEM_BODY_SITE_PROPERTIES);
    return result as IClaimItemBodySite;
  }

  /**
   * Create a deep clone of this ClaimItemBodySite
   */
  clone(): ClaimItemBodySite {
    return new ClaimItemBodySite(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimItemBodySite
   */
  toString(): string {
    const parts: string[] = ['ClaimItemBodySite'];
    return parts.join(', ');
  }
}
