import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IInsurancePlanPlan,
  IInsurancePlanPlanGeneralCost,
  IInsurancePlanPlanSpecificCost,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to InsurancePlanPlan */
const INSURANCE_PLAN_PLAN_PROPERTIES = [
  'identifier',
  'type',
  'coverageArea',
  'network',
  'generalCost',
  'specificCost',
] as const;

/**
 * InsurancePlanPlan - Plan details
 *
 * @see https://hl7.org/fhir/R4/insuranceplanplan.html
 *
 * @example
 * const insurancePlanPlan = new InsurancePlanPlan({
 *   // ... properties
 * });
 */
export class InsurancePlanPlan extends BackboneElement implements IInsurancePlanPlan {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for Product */
  identifier?: IIdentifier[];

  /** Type of plan */
  type?: ICodeableConcept;

  /** Where product applies */
  coverageArea?: IReference<'Location'>[];

  /** What networks provide coverage */
  network?: IReference<'Organization'>[];

  /** Overall costs */
  generalCost?: IInsurancePlanPlanGeneralCost[];

  /** Specific costs */
  specificCost?: IInsurancePlanPlanSpecificCost[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanPlan>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_PLAN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanPlan from a JSON object
   */
  static fromJSON(json: IInsurancePlanPlan): InsurancePlanPlan {
    return new InsurancePlanPlan(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanPlan with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanPlan>): InsurancePlanPlan {
    return new InsurancePlanPlan({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanPlan by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanPlan) => Partial<IInsurancePlanPlan>): InsurancePlanPlan {
    const currentData = this.toJSON();
    return new InsurancePlanPlan({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanPlan)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanPlan {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_PLAN_PROPERTIES);
    return result as IInsurancePlanPlan;
  }

  /**
   * Create a deep clone of this InsurancePlanPlan
   */
  clone(): InsurancePlanPlan {
    return new InsurancePlanPlan(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanPlan
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanPlan'];
    return parts.join(', ');
  }
}
