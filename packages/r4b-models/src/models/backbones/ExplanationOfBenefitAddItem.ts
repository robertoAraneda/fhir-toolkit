import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitAddItem,
  IExplanationOfBenefitAddItemDetail,
  IExplanationOfBenefitItemAdjudication,
  IMoney,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitAddItem */
const EXPLANATION_OF_BENEFIT_ADD_ITEM_PROPERTIES = [
  'itemSequence',
  '_itemSequence',
  'detailSequence',
  '_detailSequence',
  'subDetailSequence',
  '_subDetailSequence',
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
 * ExplanationOfBenefitAddItem - Insurer added line items
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitadditem.html
 *
 * @example
 * const explanationOfBenefitAddItem = new ExplanationOfBenefitAddItem({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitAddItem extends BackboneElement implements IExplanationOfBenefitAddItem {

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
  subDetailSequence?: number[];

  /** Extension for subDetailSequence */
  _subDetailSequence?: IElement;

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
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /** Insurer added line items */
  detail?: IExplanationOfBenefitAddItemDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitAddItem>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ADD_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitAddItem from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitAddItem): ExplanationOfBenefitAddItem {
    return new ExplanationOfBenefitAddItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitAddItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitAddItem>): ExplanationOfBenefitAddItem {
    return new ExplanationOfBenefitAddItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitAddItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitAddItem) => Partial<IExplanationOfBenefitAddItem>): ExplanationOfBenefitAddItem {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitAddItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitAddItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitAddItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ADD_ITEM_PROPERTIES);
    return result as IExplanationOfBenefitAddItem;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitAddItem
   */
  clone(): ExplanationOfBenefitAddItem {
    return new ExplanationOfBenefitAddItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitAddItem
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitAddItem'];
    return parts.join(', ');
  }
}
