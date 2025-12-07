import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  IClaimResponseAddItem,
  IClaimResponseAddItemDetail,
  IClaimResponseItemAdjudication,
  ICodeableConcept,
  IElement,
  IMoney,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimResponseAddItem */
const CLAIM_RESPONSE_ADD_ITEM_PROPERTIES = [
  'itemSequence',
  '_itemSequence',
  'detailSequence',
  '_detailSequence',
  'subdetailSequence',
  '_subdetailSequence',
  'provider',
  'productOrService',
  'modifier',
  'programCode',
  'servicedDate',
  '_servicedDate',
  'servicedPeriod',
  'locationCodeableConcept',
  'locationAddress',
  'locationReference',
  'quantity',
  'unitPrice',
  'factor',
  '_factor',
  'net',
  'bodySite',
  'subSite',
  'noteNumber',
  '_noteNumber',
  'adjudication',
  'detail',
] as const;

/**
 * ClaimResponseAddItem - Insurer added line items
 *
 * @see https://hl7.org/fhir/R4/claimresponseadditem.html
 *
 * @example
 * const claimResponseAddItem = new ClaimResponseAddItem({
 *   // ... properties
 * });
 */
export class ClaimResponseAddItem extends BackboneElement implements IClaimResponseAddItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Item sequence number */
  itemSequence?: number[];

  /** Extension for itemSequence */
  _itemSequence?: IElement;

  /** Detail sequence number */
  detailSequence?: number[];

  /** Extension for detailSequence */
  _detailSequence?: IElement;

  /** Subdetail sequence number */
  subdetailSequence?: number[];

  /** Extension for subdetailSequence */
  _subdetailSequence?: IElement;

  /** Authorized providers */
  provider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>[];

  /** Billing, service, product, or drug code */
  productOrService: ICodeableConcept;

  /** Service/Product billing modifiers */
  modifier?: ICodeableConcept[];

  /** Program the product or service is provided under */
  programCode?: ICodeableConcept[];

  /** Date or dates of service or product delivery */
  servicedDate?: string;

  /** Extension for servicedDate */
  _servicedDate?: IElement;

  /** Date or dates of service or product delivery */
  servicedPeriod?: IPeriod;

  /** Place of service or where product was supplied */
  locationCodeableConcept?: ICodeableConcept;

  /** Place of service or where product was supplied */
  locationAddress?: IAddress;

  /** Place of service or where product was supplied */
  locationReference?: IReference;

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

  /** Anatomical location */
  bodySite?: ICodeableConcept;

  /** Anatomical sub-location */
  subSite?: ICodeableConcept[];

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Added items adjudication */
  adjudication: IClaimResponseItemAdjudication[];

  /** Insurer added line details */
  detail?: IClaimResponseAddItemDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseAddItem>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ADD_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseAddItem from a JSON object
   */
  static fromJSON(json: IClaimResponseAddItem): ClaimResponseAddItem {
    return new ClaimResponseAddItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseAddItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseAddItem>): ClaimResponseAddItem {
    return new ClaimResponseAddItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseAddItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseAddItem) => Partial<IClaimResponseAddItem>): ClaimResponseAddItem {
    const currentData = this.toJSON();
    return new ClaimResponseAddItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseAddItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseAddItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ADD_ITEM_PROPERTIES);
    return result as IClaimResponseAddItem;
  }

  /**
   * Create a deep clone of this ClaimResponseAddItem
   */
  clone(): ClaimResponseAddItem {
    return new ClaimResponseAddItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseAddItem
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseAddItem'];
    return parts.join(', ');
  }
}
