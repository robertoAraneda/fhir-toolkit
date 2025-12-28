import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseItem,
  IClaimResponseItemAdjudication,
  IClaimResponseItemDetail,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimResponseItem */
const CLAIM_RESPONSE_ITEM_PROPERTIES = [
  'itemSequence',
  '_itemSequence',
  'noteNumber',
  '_noteNumber',
  'adjudication',
  'detail',
] as const;

/**
 * ClaimResponseItem - Adjudication for claim line items
 *
 * @see https://hl7.org/fhir/R4B/claimresponseitem.html
 *
 * @example
 * const claimResponseItem = new ClaimResponseItem({
 *   // ... properties
 * });
 */
export class ClaimResponseItem extends BackboneElement implements IClaimResponseItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Claim item instance identifier */
  itemSequence: number;

  /** Extension for itemSequence */
  _itemSequence?: IElement;

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Adjudication details */
  adjudication: IClaimResponseItemAdjudication[];

  /** Adjudication for claim details */
  detail?: IClaimResponseItemDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseItem>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseItem from a JSON object
   */
  static fromJSON(json: IClaimResponseItem): ClaimResponseItem {
    return new ClaimResponseItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseItem>): ClaimResponseItem {
    return new ClaimResponseItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseItem) => Partial<IClaimResponseItem>): ClaimResponseItem {
    const currentData = this.toJSON();
    return new ClaimResponseItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_ITEM_PROPERTIES);
    return result as IClaimResponseItem;
  }

  /**
   * Create a deep clone of this ClaimResponseItem
   */
  clone(): ClaimResponseItem {
    return new ClaimResponseItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseItem
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseItem'];
    return parts.join(', ');
  }
}
