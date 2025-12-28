import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitItemDetailSubDetail,
  IExplanationOfBenefitItemReviewOutcome,
  IIdentifier,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitItemDetailSubDetail */
const EXPLANATION_OF_BENEFIT_ITEM_DETAIL_SUB_DETAIL_PROPERTIES = [
  'sequence',
  '_sequence',
  'traceNumber',
  'revenue',
  'category',
  'productOrService',
  'productOrServiceEnd',
  'modifier',
  'programCode',
  'patientPaid',
  'quantity',
  'unitPrice',
  'factor',
  '_factor',
  'tax',
  'net',
  'udi',
  'noteNumber',
  '_noteNumber',
  'reviewOutcome',
  'adjudication',
] as const;

/**
 * ExplanationOfBenefitItemDetailSubDetail - Additional items
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefititemdetailsubdetail.html
 *
 * @example
 * const explanationOfBenefitItemDetailSubDetail = new ExplanationOfBenefitItemDetailSubDetail({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitItemDetailSubDetail extends BackboneElement implements IExplanationOfBenefitItemDetailSubDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Product or service provided */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Number for tracking */
  traceNumber?: IIdentifier[];

  /** Revenue or cost center code */
  revenue?: ICodeableConcept;

  /** Benefit classification */
  category?: ICodeableConcept;

  /** Billing, service, product, or drug code */
  productOrService?: ICodeableConcept;

  /** End of a range of codes */
  productOrServiceEnd?: ICodeableConcept;

  /** Service/Product billing modifiers */
  modifier?: ICodeableConcept[];

  /** Program the product or service is provided under */
  programCode?: ICodeableConcept[];

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

  /** Unique device identifier */
  udi?: IReference<'Device'>[];

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Subdetail level adjudication results */
  reviewOutcome?: IExplanationOfBenefitItemReviewOutcome;

  /** Subdetail level adjudication details */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitItemDetailSubDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitItemDetailSubDetail from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitItemDetailSubDetail): ExplanationOfBenefitItemDetailSubDetail {
    return new ExplanationOfBenefitItemDetailSubDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitItemDetailSubDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitItemDetailSubDetail>): ExplanationOfBenefitItemDetailSubDetail {
    return new ExplanationOfBenefitItemDetailSubDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitItemDetailSubDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitItemDetailSubDetail) => Partial<IExplanationOfBenefitItemDetailSubDetail>): ExplanationOfBenefitItemDetailSubDetail {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitItemDetailSubDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitItemDetailSubDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitItemDetailSubDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ITEM_DETAIL_SUB_DETAIL_PROPERTIES);
    return result as IExplanationOfBenefitItemDetailSubDetail;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitItemDetailSubDetail
   */
  clone(): ExplanationOfBenefitItemDetailSubDetail {
    return new ExplanationOfBenefitItemDetailSubDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitItemDetailSubDetail
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitItemDetailSubDetail'];
    return parts.join(', ');
  }
}
