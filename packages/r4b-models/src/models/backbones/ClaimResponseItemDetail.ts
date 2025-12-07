import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseItemAdjudication,
  IClaimResponseItemDetail,
  IClaimResponseItemDetailSubDetail,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimResponseItemDetail */
const CLAIM_RESPONSE_ITEM_DETAIL_PROPERTIES = [
  'detailSequence',
  '_detailSequence',
  'noteNumber',
  '_noteNumber',
  'adjudication',
  'subDetail',
] as const;

/**
 * ClaimResponseItemDetail - Adjudication for claim details
 *
 * @see https://hl7.org/fhir/R4/claimresponseitemdetail.html
 *
 * @example
 * const claimResponseItemDetail = new ClaimResponseItemDetail({
 *   // ... properties
 * });
 */
export class ClaimResponseItemDetail extends BackboneElement implements IClaimResponseItemDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Claim detail instance identifier */
  detailSequence: number;

  /** Extension for detailSequence */
  _detailSequence?: IElement;

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Detail level adjudication details */
  adjudication: IClaimResponseItemAdjudication[];

  /** Adjudication for claim sub-details */
  subDetail?: IClaimResponseItemDetailSubDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseItemDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ITEM_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseItemDetail from a JSON object
   */
  static fromJSON(json: IClaimResponseItemDetail): ClaimResponseItemDetail {
    return new ClaimResponseItemDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseItemDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseItemDetail>): ClaimResponseItemDetail {
    return new ClaimResponseItemDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseItemDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseItemDetail) => Partial<IClaimResponseItemDetail>): ClaimResponseItemDetail {
    const currentData = this.toJSON();
    return new ClaimResponseItemDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseItemDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseItemDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ITEM_DETAIL_PROPERTIES);
    return result as IClaimResponseItemDetail;
  }

  /**
   * Create a deep clone of this ClaimResponseItemDetail
   */
  clone(): ClaimResponseItemDetail {
    return new ClaimResponseItemDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseItemDetail
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseItemDetail'];
    return parts.join(', ');
  }
}
