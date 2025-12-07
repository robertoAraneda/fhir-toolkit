import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitAddItemDetailSubDetail,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ExplanationOfBenefitAddItemDetailSubDetail */
const EXPLANATION_OF_BENEFIT_ADD_ITEM_DETAIL_SUB_DETAIL_PROPERTIES = [
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
] as const;

/**
 * ExplanationOfBenefitAddItemDetailSubDetail - Insurer added line items
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitadditemdetailsubdetail.html
 *
 * @example
 * const explanationOfBenefitAddItemDetailSubDetail = new ExplanationOfBenefitAddItemDetailSubDetail({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitAddItemDetailSubDetail extends BackboneElement implements IExplanationOfBenefitAddItemDetailSubDetail {

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

  /** Added items adjudication */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitAddItemDetailSubDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ADD_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitAddItemDetailSubDetail from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitAddItemDetailSubDetail): ExplanationOfBenefitAddItemDetailSubDetail {
    return new ExplanationOfBenefitAddItemDetailSubDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitAddItemDetailSubDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitAddItemDetailSubDetail>): ExplanationOfBenefitAddItemDetailSubDetail {
    return new ExplanationOfBenefitAddItemDetailSubDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitAddItemDetailSubDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitAddItemDetailSubDetail) => Partial<IExplanationOfBenefitAddItemDetailSubDetail>): ExplanationOfBenefitAddItemDetailSubDetail {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitAddItemDetailSubDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitAddItemDetailSubDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitAddItemDetailSubDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ADD_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    return result as IExplanationOfBenefitAddItemDetailSubDetail;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitAddItemDetailSubDetail
   */
  clone(): ExplanationOfBenefitAddItemDetailSubDetail {
    return new ExplanationOfBenefitAddItemDetailSubDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitAddItemDetailSubDetail
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitAddItemDetailSubDetail'];
    return parts.join(', ');
  }
}
