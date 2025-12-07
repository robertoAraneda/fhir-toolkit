import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseAddItemDetailSubDetail,
  IClaimResponseItemAdjudication,
  IClaimResponseItemReviewOutcome,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimResponseAddItemDetailSubDetail */
const CLAIM_RESPONSE_ADD_ITEM_DETAIL_SUB_DETAIL_PROPERTIES = [
  'traceNumber',
  'revenue',
  'productOrService',
  'productOrServiceEnd',
  'modifier',
  'quantity',
  'unitPrice',
  'factor',
  '_factor',
  'tax',
  'net',
  'noteNumber',
  '_noteNumber',
  'reviewOutcome',
  'adjudication',
] as const;

/**
 * ClaimResponseAddItemDetailSubDetail - Insurer added line items
 *
 * @see https://hl7.org/fhir/R4/claimresponseadditemdetailsubdetail.html
 *
 * @example
 * const claimResponseAddItemDetailSubDetail = new ClaimResponseAddItemDetailSubDetail({
 *   // ... properties
 * });
 */
export class ClaimResponseAddItemDetailSubDetail extends BackboneElement implements IClaimResponseAddItemDetailSubDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Number for tracking */
  traceNumber?: IIdentifier[];

  /** Revenue or cost center code */
  revenue?: ICodeableConcept;

  /** Billing, service, product, or drug code */
  productOrService?: ICodeableConcept;

  /** End of a range of codes */
  productOrServiceEnd?: ICodeableConcept;

  /** Service/Product billing modifiers */
  modifier?: ICodeableConcept[];

  /** Count of products or services */
  quantity?: IQuantity;

  /** Fee, charge or cost per item */
  unitPrice?: IMoney;

  /** Price scaling factor */
  factor?: number;

  /** Extension for factor */
  _factor?: IElement;

  /** Total tax */
  tax?: IMoney;

  /** Total item cost */
  net?: IMoney;

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Added items subdetail level adjudication results */
  reviewOutcome?: IClaimResponseItemReviewOutcome;

  /** Added items subdetail adjudication */
  adjudication?: IClaimResponseItemAdjudication[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseAddItemDetailSubDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ADD_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseAddItemDetailSubDetail from a JSON object
   */
  static fromJSON(json: IClaimResponseAddItemDetailSubDetail): ClaimResponseAddItemDetailSubDetail {
    return new ClaimResponseAddItemDetailSubDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseAddItemDetailSubDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseAddItemDetailSubDetail>): ClaimResponseAddItemDetailSubDetail {
    return new ClaimResponseAddItemDetailSubDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseAddItemDetailSubDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseAddItemDetailSubDetail) => Partial<IClaimResponseAddItemDetailSubDetail>): ClaimResponseAddItemDetailSubDetail {
    const currentData = this.toJSON();
    return new ClaimResponseAddItemDetailSubDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseAddItemDetailSubDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseAddItemDetailSubDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ADD_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    return result as IClaimResponseAddItemDetailSubDetail;
  }

  /**
   * Create a deep clone of this ClaimResponseAddItemDetailSubDetail
   */
  clone(): ClaimResponseAddItemDetailSubDetail {
    return new ClaimResponseAddItemDetailSubDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseAddItemDetailSubDetail
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseAddItemDetailSubDetail'];
    return parts.join(', ');
  }
}
