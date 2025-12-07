import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IInsurancePlanCoverage,
  IInsurancePlanCoverageBenefit,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to InsurancePlanCoverage */
const INSURANCE_PLAN_COVERAGE_PROPERTIES = [
  'type',
  'network',
  'benefit',
] as const;

/**
 * InsurancePlanCoverage - Coverage details
 *
 * @see https://hl7.org/fhir/R4/insuranceplancoverage.html
 *
 * @example
 * const insurancePlanCoverage = new InsurancePlanCoverage({
 *   // ... properties
 * });
 */
export class InsurancePlanCoverage extends BackboneElement implements IInsurancePlanCoverage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of coverage */
  type: ICodeableConcept;

  /** What networks provide coverage */
  network?: IReference<'Organization'>[];

  /** List of benefits */
  benefit: IInsurancePlanCoverageBenefit[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanCoverage>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_COVERAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanCoverage from a JSON object
   */
  static fromJSON(json: IInsurancePlanCoverage): InsurancePlanCoverage {
    return new InsurancePlanCoverage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanCoverage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanCoverage>): InsurancePlanCoverage {
    return new InsurancePlanCoverage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanCoverage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanCoverage) => Partial<IInsurancePlanCoverage>): InsurancePlanCoverage {
    const currentData = this.toJSON();
    return new InsurancePlanCoverage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanCoverage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanCoverage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_COVERAGE_PROPERTIES);
    return result as IInsurancePlanCoverage;
  }

  /**
   * Create a deep clone of this InsurancePlanCoverage
   */
  clone(): InsurancePlanCoverage {
    return new InsurancePlanCoverage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanCoverage
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanCoverage'];
    return parts.join(', ');
  }
}
