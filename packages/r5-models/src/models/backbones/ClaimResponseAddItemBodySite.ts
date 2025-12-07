import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseAddItemBodySite,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimResponseAddItemBodySite */
const CLAIM_RESPONSE_ADD_ITEM_BODY_SITE_PROPERTIES = [
  'site',
  'subSite',
] as const;

/**
 * ClaimResponseAddItemBodySite - Anatomical location
 *
 * @see https://hl7.org/fhir/R4/claimresponseadditembodysite.html
 *
 * @example
 * const claimResponseAddItemBodySite = new ClaimResponseAddItemBodySite({
 *   // ... properties
 * });
 */
export class ClaimResponseAddItemBodySite extends BackboneElement implements IClaimResponseAddItemBodySite {

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

  constructor(data?: Partial<IClaimResponseAddItemBodySite>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ADD_ITEM_BODY_SITE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseAddItemBodySite from a JSON object
   */
  static fromJSON(json: IClaimResponseAddItemBodySite): ClaimResponseAddItemBodySite {
    return new ClaimResponseAddItemBodySite(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseAddItemBodySite with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseAddItemBodySite>): ClaimResponseAddItemBodySite {
    return new ClaimResponseAddItemBodySite({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseAddItemBodySite by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseAddItemBodySite) => Partial<IClaimResponseAddItemBodySite>): ClaimResponseAddItemBodySite {
    const currentData = this.toJSON();
    return new ClaimResponseAddItemBodySite({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseAddItemBodySite)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseAddItemBodySite {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ADD_ITEM_BODY_SITE_PROPERTIES);
    return result as IClaimResponseAddItemBodySite;
  }

  /**
   * Create a deep clone of this ClaimResponseAddItemBodySite
   */
  clone(): ClaimResponseAddItemBodySite {
    return new ClaimResponseAddItemBodySite(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseAddItemBodySite
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseAddItemBodySite'];
    return parts.join(', ');
  }
}
