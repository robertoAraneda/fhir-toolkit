import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitAddItemDetail,
  IExplanationOfBenefitAddItemDetailSubDetail,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitItemReviewOutcome,
  IIdentifier,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitAddItemDetail */
const EXPLANATION_OF_BENEFIT_ADD_ITEM_DETAIL_PROPERTIES = [
  'traceNumber',
  'revenue',
  'productOrService',
  'productOrServiceEnd',
  'modifier',
  'patientPaid',
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
  'subDetail',
] as const;

/**
 * ExplanationOfBenefitAddItemDetail - Insurer added line items
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitadditemdetail.html
 *
 * @example
 * const explanationOfBenefitAddItemDetail = new ExplanationOfBenefitAddItemDetail({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitAddItemDetail extends BackboneElement implements IExplanationOfBenefitAddItemDetail {

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

  /** Paid by the patient */
  patientPaid?: IMoney;

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

  /** Additem detail level adjudication results */
  reviewOutcome?: IExplanationOfBenefitItemReviewOutcome;

  /** Added items adjudication */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /** Insurer added line items */
  subDetail?: IExplanationOfBenefitAddItemDetailSubDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitAddItemDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ADD_ITEM_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitAddItemDetail from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitAddItemDetail): ExplanationOfBenefitAddItemDetail {
    return new ExplanationOfBenefitAddItemDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitAddItemDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitAddItemDetail>): ExplanationOfBenefitAddItemDetail {
    return new ExplanationOfBenefitAddItemDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitAddItemDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitAddItemDetail) => Partial<IExplanationOfBenefitAddItemDetail>): ExplanationOfBenefitAddItemDetail {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitAddItemDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitAddItemDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitAddItemDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ADD_ITEM_DETAIL_PROPERTIES);
    return result as IExplanationOfBenefitAddItemDetail;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitAddItemDetail
   */
  clone(): ExplanationOfBenefitAddItemDetail {
    return new ExplanationOfBenefitAddItemDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitAddItemDetail
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitAddItemDetail'];
    return parts.join(', ');
  }
}
