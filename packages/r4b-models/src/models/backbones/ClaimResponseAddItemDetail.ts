import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseAddItemDetail,
  IClaimResponseAddItemDetailSubDetail,
  IClaimResponseItemAdjudication,
  ICodeableConcept,
  IElement,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimResponseAddItemDetail */
const CLAIM_RESPONSE_ADD_ITEM_DETAIL_PROPERTIES = [
  'productOrService',
  'modifier',
  'quantity',
  'unitPrice',
  'factor',
  '_factor',
  'net',
  'noteNumber',
  '_noteNumber',
  'adjudication',
  'subDetail',
] as const;

/**
 * ClaimResponseAddItemDetail - Insurer added line details
 *
 * @see https://hl7.org/fhir/R4/claimresponseadditemdetail.html
 *
 * @example
 * const claimResponseAddItemDetail = new ClaimResponseAddItemDetail({
 *   // ... properties
 * });
 */
export class ClaimResponseAddItemDetail extends BackboneElement implements IClaimResponseAddItemDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Billing, service, product, or drug code */
  productOrService: ICodeableConcept;

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

  /** Total item cost */
  net?: IMoney;

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Added items detail adjudication */
  adjudication: IClaimResponseItemAdjudication[];

  /** Insurer added line items */
  subDetail?: IClaimResponseAddItemDetailSubDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseAddItemDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ADD_ITEM_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseAddItemDetail from a JSON object
   */
  static fromJSON(json: IClaimResponseAddItemDetail): ClaimResponseAddItemDetail {
    return new ClaimResponseAddItemDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseAddItemDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseAddItemDetail>): ClaimResponseAddItemDetail {
    return new ClaimResponseAddItemDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseAddItemDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseAddItemDetail) => Partial<IClaimResponseAddItemDetail>): ClaimResponseAddItemDetail {
    const currentData = this.toJSON();
    return new ClaimResponseAddItemDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseAddItemDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseAddItemDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ADD_ITEM_DETAIL_PROPERTIES);
    return result as IClaimResponseAddItemDetail;
  }

  /**
   * Create a deep clone of this ClaimResponseAddItemDetail
   */
  clone(): ClaimResponseAddItemDetail {
    return new ClaimResponseAddItemDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseAddItemDetail
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseAddItemDetail'];
    return parts.join(', ');
  }
}
