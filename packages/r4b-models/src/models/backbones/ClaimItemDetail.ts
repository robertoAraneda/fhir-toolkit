import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimItemDetail,
  IClaimItemDetailSubDetail,
  ICodeableConcept,
  IElement,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimItemDetail */
const CLAIM_ITEM_DETAIL_PROPERTIES = [
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
  'subDetail',
] as const;

/**
 * ClaimItemDetail - Product or service provided
 *
 * @see https://hl7.org/fhir/R4B/claimitemdetail.html
 *
 * @example
 * const claimItemDetail = new ClaimItemDetail({
 *   // ... properties
 * });
 */
export class ClaimItemDetail extends BackboneElement implements IClaimItemDetail {

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

  /** Product or service provided */
  subDetail?: IClaimItemDetailSubDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimItemDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_ITEM_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimItemDetail from a JSON object
   */
  static fromJSON(json: IClaimItemDetail): ClaimItemDetail {
    return new ClaimItemDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimItemDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimItemDetail>): ClaimItemDetail {
    return new ClaimItemDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimItemDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimItemDetail) => Partial<IClaimItemDetail>): ClaimItemDetail {
    const currentData = this.toJSON();
    return new ClaimItemDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimItemDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimItemDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_ITEM_DETAIL_PROPERTIES);
    return result as IClaimItemDetail;
  }

  /**
   * Create a deep clone of this ClaimItemDetail
   */
  clone(): ClaimItemDetail {
    return new ClaimItemDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimItemDetail
   */
  toString(): string {
    const parts: string[] = ['ClaimItemDetail'];
    return parts.join(', ');
  }
}
