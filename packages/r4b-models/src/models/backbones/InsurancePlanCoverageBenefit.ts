import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IInsurancePlanCoverageBenefit,
  IInsurancePlanCoverageBenefitLimit,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to InsurancePlanCoverageBenefit */
const INSURANCE_PLAN_COVERAGE_BENEFIT_PROPERTIES = [
  'type',
  'requirement',
  '_requirement',
  'limit',
] as const;

/**
 * InsurancePlanCoverageBenefit - List of benefits
 *
 * @see https://hl7.org/fhir/R4B/insuranceplancoveragebenefit.html
 *
 * @example
 * const insurancePlanCoverageBenefit = new InsurancePlanCoverageBenefit({
 *   // ... properties
 * });
 */
export class InsurancePlanCoverageBenefit extends BackboneElement implements IInsurancePlanCoverageBenefit {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of benefit */
  type: ICodeableConcept;

  /** Referral requirements */
  requirement?: string;

  /** Extension for requirement */
  _requirement?: IElement;

  /** Benefit limits */
  limit?: IInsurancePlanCoverageBenefitLimit[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanCoverageBenefit>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_COVERAGE_BENEFIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanCoverageBenefit from a JSON object
   */
  static fromJSON(json: IInsurancePlanCoverageBenefit): InsurancePlanCoverageBenefit {
    return new InsurancePlanCoverageBenefit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanCoverageBenefit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanCoverageBenefit>): InsurancePlanCoverageBenefit {
    return new InsurancePlanCoverageBenefit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanCoverageBenefit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanCoverageBenefit) => Partial<IInsurancePlanCoverageBenefit>): InsurancePlanCoverageBenefit {
    const currentData = this.toJSON();
    return new InsurancePlanCoverageBenefit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanCoverageBenefit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanCoverageBenefit {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_COVERAGE_BENEFIT_PROPERTIES);
    return result as IInsurancePlanCoverageBenefit;
  }

  /**
   * Create a deep clone of this InsurancePlanCoverageBenefit
   */
  clone(): InsurancePlanCoverageBenefit {
    return new InsurancePlanCoverageBenefit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanCoverageBenefit
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanCoverageBenefit'];
    return parts.join(', ');
  }
}
