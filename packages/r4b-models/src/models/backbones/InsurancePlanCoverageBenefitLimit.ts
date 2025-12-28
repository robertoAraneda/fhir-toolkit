import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IInsurancePlanCoverageBenefitLimit,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to InsurancePlanCoverageBenefitLimit */
const INSURANCE_PLAN_COVERAGE_BENEFIT_LIMIT_PROPERTIES = [
  'value',
  'code',
] as const;

/**
 * InsurancePlanCoverageBenefitLimit - Benefit limits
 *
 * @see https://hl7.org/fhir/R4B/insuranceplancoveragebenefitlimit.html
 *
 * @example
 * const insurancePlanCoverageBenefitLimit = new InsurancePlanCoverageBenefitLimit({
 *   // ... properties
 * });
 */
export class InsurancePlanCoverageBenefitLimit extends BackboneElement implements IInsurancePlanCoverageBenefitLimit {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Maximum value allowed */
  value?: IQuantity;

  /** Benefit limit details */
  code?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanCoverageBenefitLimit>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_COVERAGE_BENEFIT_LIMIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanCoverageBenefitLimit from a JSON object
   */
  static fromJSON(json: IInsurancePlanCoverageBenefitLimit): InsurancePlanCoverageBenefitLimit {
    return new InsurancePlanCoverageBenefitLimit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanCoverageBenefitLimit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanCoverageBenefitLimit>): InsurancePlanCoverageBenefitLimit {
    return new InsurancePlanCoverageBenefitLimit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanCoverageBenefitLimit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanCoverageBenefitLimit) => Partial<IInsurancePlanCoverageBenefitLimit>): InsurancePlanCoverageBenefitLimit {
    const currentData = this.toJSON();
    return new InsurancePlanCoverageBenefitLimit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanCoverageBenefitLimit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanCoverageBenefitLimit {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_COVERAGE_BENEFIT_LIMIT_PROPERTIES);
    return result as IInsurancePlanCoverageBenefitLimit;
  }

  /**
   * Create a deep clone of this InsurancePlanCoverageBenefitLimit
   */
  clone(): InsurancePlanCoverageBenefitLimit {
    return new InsurancePlanCoverageBenefitLimit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanCoverageBenefitLimit
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanCoverageBenefitLimit'];
    return parts.join(', ');
  }
}
