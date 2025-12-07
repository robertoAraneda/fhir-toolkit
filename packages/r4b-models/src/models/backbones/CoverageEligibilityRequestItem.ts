import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityRequestItem,
  ICoverageEligibilityRequestItemDiagnosis,
  IElement,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CoverageEligibilityRequestItem */
const COVERAGE_ELIGIBILITY_REQUEST_ITEM_PROPERTIES = [
  'supportingInfoSequence',
  '_supportingInfoSequence',
  'category',
  'productOrService',
  'modifier',
  'provider',
  'quantity',
  'unitPrice',
  'facility',
  'diagnosis',
  'detail',
] as const;

/**
 * CoverageEligibilityRequestItem - Item to be evaluated for eligibiity
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityrequestitem.html
 *
 * @example
 * const coverageEligibilityRequestItem = new CoverageEligibilityRequestItem({
 *   // ... properties
 * });
 */
export class CoverageEligibilityRequestItem extends BackboneElement implements ICoverageEligibilityRequestItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Applicable exception or supporting information */
  supportingInfoSequence?: number[];

  /** Extension for supportingInfoSequence */
  _supportingInfoSequence?: IElement;

  /** Benefit classification */
  category?: ICodeableConcept;

  /** Billing, service, product, or drug code */
  productOrService?: ICodeableConcept;

  /** Product or service billing modifiers */
  modifier?: ICodeableConcept[];

  /** Perfoming practitioner */
  provider?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Count of products or services */
  quantity?: IQuantity;

  /** Fee, charge or cost per item */
  unitPrice?: IMoney;

  /** Servicing facility */
  facility?: IReference<'Location' | 'Organization'>;

  /** Applicable diagnosis */
  diagnosis?: ICoverageEligibilityRequestItemDiagnosis[];

  /** Product or service details */
  detail?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityRequestItem>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_REQUEST_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityRequestItem from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityRequestItem): CoverageEligibilityRequestItem {
    return new CoverageEligibilityRequestItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityRequestItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityRequestItem>): CoverageEligibilityRequestItem {
    return new CoverageEligibilityRequestItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityRequestItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityRequestItem) => Partial<ICoverageEligibilityRequestItem>): CoverageEligibilityRequestItem {
    const currentData = this.toJSON();
    return new CoverageEligibilityRequestItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityRequestItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityRequestItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_REQUEST_ITEM_PROPERTIES);
    return result as ICoverageEligibilityRequestItem;
  }

  /**
   * Create a deep clone of this CoverageEligibilityRequestItem
   */
  clone(): CoverageEligibilityRequestItem {
    return new CoverageEligibilityRequestItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityRequestItem
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityRequestItem'];
    return parts.join(', ');
  }
}
