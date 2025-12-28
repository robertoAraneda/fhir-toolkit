import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityResponseInsuranceItem,
  ICoverageEligibilityResponseInsuranceItemBenefit,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CoverageEligibilityResponseInsuranceItem */
const COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_ITEM_PROPERTIES = [
  'category',
  'productOrService',
  'modifier',
  'provider',
  'excluded',
  '_excluded',
  'name',
  '_name',
  'description',
  '_description',
  'network',
  'unit',
  'term',
  'benefit',
  'authorizationRequired',
  '_authorizationRequired',
  'authorizationSupporting',
  'authorizationUrl',
  '_authorizationUrl',
] as const;

/**
 * CoverageEligibilityResponseInsuranceItem - Benefits and authorization details
 *
 * @see https://hl7.org/fhir/R4B/coverageeligibilityresponseinsuranceitem.html
 *
 * @example
 * const coverageEligibilityResponseInsuranceItem = new CoverageEligibilityResponseInsuranceItem({
 *   // ... properties
 * });
 */
export class CoverageEligibilityResponseInsuranceItem extends BackboneElement implements ICoverageEligibilityResponseInsuranceItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Benefit classification */
  category?: ICodeableConcept;

  /** Billing, service, product, or drug code */
  productOrService?: ICodeableConcept;

  /** Product or service billing modifiers */
  modifier?: ICodeableConcept[];

  /** Performing practitioner */
  provider?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Excluded from the plan */
  excluded?: boolean;

  /** Extension for excluded */
  _excluded?: IElement;

  /** Short name for the benefit */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Description of the benefit or services covered */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** In or out of network */
  network?: ICodeableConcept;

  /** Individual or family */
  unit?: ICodeableConcept;

  /** Annual or lifetime */
  term?: ICodeableConcept;

  /** Benefit Summary */
  benefit?: ICoverageEligibilityResponseInsuranceItemBenefit[];

  /** Authorization required flag */
  authorizationRequired?: boolean;

  /** Extension for authorizationRequired */
  _authorizationRequired?: IElement;

  /** Type of required supporting materials */
  authorizationSupporting?: ICodeableConcept[];

  /** Preauthorization requirements endpoint */
  authorizationUrl?: string;

  /** Extension for authorizationUrl */
  _authorizationUrl?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityResponseInsuranceItem>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityResponseInsuranceItem from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityResponseInsuranceItem): CoverageEligibilityResponseInsuranceItem {
    return new CoverageEligibilityResponseInsuranceItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityResponseInsuranceItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityResponseInsuranceItem>): CoverageEligibilityResponseInsuranceItem {
    return new CoverageEligibilityResponseInsuranceItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityResponseInsuranceItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityResponseInsuranceItem) => Partial<ICoverageEligibilityResponseInsuranceItem>): CoverageEligibilityResponseInsuranceItem {
    const currentData = this.toJSON();
    return new CoverageEligibilityResponseInsuranceItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityResponseInsuranceItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityResponseInsuranceItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_ITEM_PROPERTIES);
    return result as ICoverageEligibilityResponseInsuranceItem;
  }

  /**
   * Create a deep clone of this CoverageEligibilityResponseInsuranceItem
   */
  clone(): CoverageEligibilityResponseInsuranceItem {
    return new CoverageEligibilityResponseInsuranceItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityResponseInsuranceItem
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityResponseInsuranceItem'];
    return parts.join(', ');
  }
}
