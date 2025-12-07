import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseItemAdjudication,
  IClaimResponseItemDetailSubDetail,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ClaimResponseItemDetailSubDetail */
const CLAIM_RESPONSE_ITEM_DETAIL_SUB_DETAIL_PROPERTIES = [
  'subDetailSequence',
  '_subDetailSequence',
  'noteNumber',
  '_noteNumber',
  'adjudication',
] as const;

/**
 * ClaimResponseItemDetailSubDetail - Adjudication for claim sub-details
 *
 * @see https://hl7.org/fhir/R4/claimresponseitemdetailsubdetail.html
 *
 * @example
 * const claimResponseItemDetailSubDetail = new ClaimResponseItemDetailSubDetail({
 *   // ... properties
 * });
 */
export class ClaimResponseItemDetailSubDetail extends BackboneElement implements IClaimResponseItemDetailSubDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Claim sub-detail instance identifier */
  subDetailSequence: number;

  /** Extension for subDetailSequence */
  _subDetailSequence?: IElement;

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Subdetail level adjudication details */
  adjudication?: IClaimResponseItemAdjudication[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseItemDetailSubDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseItemDetailSubDetail from a JSON object
   */
  static fromJSON(json: IClaimResponseItemDetailSubDetail): ClaimResponseItemDetailSubDetail {
    return new ClaimResponseItemDetailSubDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseItemDetailSubDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseItemDetailSubDetail>): ClaimResponseItemDetailSubDetail {
    return new ClaimResponseItemDetailSubDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseItemDetailSubDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseItemDetailSubDetail) => Partial<IClaimResponseItemDetailSubDetail>): ClaimResponseItemDetailSubDetail {
    const currentData = this.toJSON();
    return new ClaimResponseItemDetailSubDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseItemDetailSubDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseItemDetailSubDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    return result as IClaimResponseItemDetailSubDetail;
  }

  /**
   * Create a deep clone of this ClaimResponseItemDetailSubDetail
   */
  clone(): ClaimResponseItemDetailSubDetail {
    return new ClaimResponseItemDetailSubDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseItemDetailSubDetail
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseItemDetailSubDetail'];
    return parts.join(', ');
  }
}
