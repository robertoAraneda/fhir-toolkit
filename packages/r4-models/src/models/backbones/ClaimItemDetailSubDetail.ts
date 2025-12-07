import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimItemDetailSubDetail,
  ICodeableConcept,
  IElement,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ClaimItemDetailSubDetail */
const CLAIM_ITEM_DETAIL_SUB_DETAIL_PROPERTIES = [
  'sequence',
  '_sequence',
  'revenue',
  'category',
  'productOrService',
  'modifier',
  'programCode',
  'quantity',
  'unitPrice',
  'factor',
  '_factor',
  'net',
  'udi',
] as const;

/**
 * ClaimItemDetailSubDetail - Product or service provided
 *
 * @see https://hl7.org/fhir/R4/claimitemdetailsubdetail.html
 *
 * @example
 * const claimItemDetailSubDetail = new ClaimItemDetailSubDetail({
 *   // ... properties
 * });
 */
export class ClaimItemDetailSubDetail extends BackboneElement implements IClaimItemDetailSubDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Item instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Revenue or cost center code */
  revenue?: ICodeableConcept;

  /** Benefit classification */
  category?: ICodeableConcept;

  /** Billing, service, product, or drug code */
  productOrService: ICodeableConcept;

  /** Service/Product billing modifiers */
  modifier?: ICodeableConcept[];

  /** Program the product or service is provided under */
  programCode?: ICodeableConcept[];

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

  /** Unique device identifier */
  udi?: IReference<'Device'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimItemDetailSubDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimItemDetailSubDetail from a JSON object
   */
  static fromJSON(json: IClaimItemDetailSubDetail): ClaimItemDetailSubDetail {
    return new ClaimItemDetailSubDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimItemDetailSubDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimItemDetailSubDetail>): ClaimItemDetailSubDetail {
    return new ClaimItemDetailSubDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimItemDetailSubDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimItemDetailSubDetail) => Partial<IClaimItemDetailSubDetail>): ClaimItemDetailSubDetail {
    const currentData = this.toJSON();
    return new ClaimItemDetailSubDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimItemDetailSubDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimItemDetailSubDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    return result as IClaimItemDetailSubDetail;
  }

  /**
   * Create a deep clone of this ClaimItemDetailSubDetail
   */
  clone(): ClaimItemDetailSubDetail {
    return new ClaimItemDetailSubDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimItemDetailSubDetail
   */
  toString(): string {
    const parts: string[] = ['ClaimItemDetailSubDetail'];
    return parts.join(', ');
  }
}
