import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityResponseInsuranceItemBenefit,
  IElement,
  IMoney,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageEligibilityResponseInsuranceItemBenefit */
const COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_ITEM_BENEFIT_PROPERTIES = [
  'type',
  'allowedUnsignedInt',
  '_allowedUnsignedInt',
  'allowedString',
  '_allowedString',
  'allowedMoney',
  'usedUnsignedInt',
  '_usedUnsignedInt',
  'usedString',
  '_usedString',
  'usedMoney',
] as const;

/**
 * CoverageEligibilityResponseInsuranceItemBenefit - Benefit Summary
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityresponseinsuranceitembenefit.html
 *
 * @example
 * const coverageEligibilityResponseInsuranceItemBenefit = new CoverageEligibilityResponseInsuranceItemBenefit({
 *   // ... properties
 * });
 */
export class CoverageEligibilityResponseInsuranceItemBenefit extends BackboneElement implements ICoverageEligibilityResponseInsuranceItemBenefit {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Benefit classification */
  type: ICodeableConcept;

  /** Benefits allowed */
  allowedUnsignedInt?: number;

  /** Extension for allowedUnsignedInt */
  _allowedUnsignedInt?: IElement;

  /** Benefits allowed */
  allowedString?: string;

  /** Extension for allowedString */
  _allowedString?: IElement;

  /** Benefits allowed */
  allowedMoney?: IMoney;

  /** Benefits used */
  usedUnsignedInt?: number;

  /** Extension for usedUnsignedInt */
  _usedUnsignedInt?: IElement;

  /** Benefits used */
  usedString?: string;

  /** Extension for usedString */
  _usedString?: IElement;

  /** Benefits used */
  usedMoney?: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityResponseInsuranceItemBenefit>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_ITEM_BENEFIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityResponseInsuranceItemBenefit from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityResponseInsuranceItemBenefit): CoverageEligibilityResponseInsuranceItemBenefit {
    return new CoverageEligibilityResponseInsuranceItemBenefit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityResponseInsuranceItemBenefit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityResponseInsuranceItemBenefit>): CoverageEligibilityResponseInsuranceItemBenefit {
    return new CoverageEligibilityResponseInsuranceItemBenefit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityResponseInsuranceItemBenefit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityResponseInsuranceItemBenefit) => Partial<ICoverageEligibilityResponseInsuranceItemBenefit>): CoverageEligibilityResponseInsuranceItemBenefit {
    const currentData = this.toJSON();
    return new CoverageEligibilityResponseInsuranceItemBenefit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityResponseInsuranceItemBenefit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityResponseInsuranceItemBenefit {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_ITEM_BENEFIT_PROPERTIES);
    return result as ICoverageEligibilityResponseInsuranceItemBenefit;
  }

  /**
   * Create a deep clone of this CoverageEligibilityResponseInsuranceItemBenefit
   */
  clone(): CoverageEligibilityResponseInsuranceItemBenefit {
    return new CoverageEligibilityResponseInsuranceItemBenefit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityResponseInsuranceItemBenefit
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityResponseInsuranceItemBenefit'];
    return parts.join(', ');
  }
}
