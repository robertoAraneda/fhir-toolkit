import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitItemDetail,
  IExplanationOfBenefitItemDetailSubDetail,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitItemDetail */
const EXPLANATION_OF_BENEFIT_ITEM_DETAIL_PROPERTIES = [
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
  'noteNumber',
  '_noteNumber',
  'adjudication',
  'subDetail',
] as const;

/**
 * ExplanationOfBenefitItemDetail - Additional items
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefititemdetail.html
 *
 * @example
 * const explanationOfBenefitItemDetail = new ExplanationOfBenefitItemDetail({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitItemDetail extends BackboneElement implements IExplanationOfBenefitItemDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Product or service provided */
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

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Detail level adjudication details */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /** Additional items */
  subDetail?: IExplanationOfBenefitItemDetailSubDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitItemDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ITEM_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitItemDetail from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitItemDetail): ExplanationOfBenefitItemDetail {
    return new ExplanationOfBenefitItemDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitItemDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitItemDetail>): ExplanationOfBenefitItemDetail {
    return new ExplanationOfBenefitItemDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitItemDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitItemDetail) => Partial<IExplanationOfBenefitItemDetail>): ExplanationOfBenefitItemDetail {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitItemDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitItemDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitItemDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ITEM_DETAIL_PROPERTIES);
    return result as IExplanationOfBenefitItemDetail;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitItemDetail
   */
  clone(): ExplanationOfBenefitItemDetail {
    return new ExplanationOfBenefitItemDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitItemDetail
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitItemDetail'];
    return parts.join(', ');
  }
}
