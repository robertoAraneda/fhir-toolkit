import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IInsurancePlanPlanGeneralCost,
  IMoney,
} from '@fhir-toolkit/r4-types';

/** Properties specific to InsurancePlanPlanGeneralCost */
const INSURANCE_PLAN_PLAN_GENERAL_COST_PROPERTIES = [
  'type',
  'groupSize',
  '_groupSize',
  'cost',
  'comment',
  '_comment',
] as const;

/**
 * InsurancePlanPlanGeneralCost - Overall costs
 *
 * @see https://hl7.org/fhir/R4/insuranceplanplangeneralcost.html
 *
 * @example
 * const insurancePlanPlanGeneralCost = new InsurancePlanPlanGeneralCost({
 *   // ... properties
 * });
 */
export class InsurancePlanPlanGeneralCost extends BackboneElement implements IInsurancePlanPlanGeneralCost {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of cost */
  type?: ICodeableConcept;

  /** Number of enrollees */
  groupSize?: number;

  /** Extension for groupSize */
  _groupSize?: IElement;

  /** Cost value */
  cost?: IMoney;

  /** Additional cost information */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInsurancePlanPlanGeneralCost>) {
    super(data);
    if (data) {
      this.assignProps(data, INSURANCE_PLAN_PLAN_GENERAL_COST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InsurancePlanPlanGeneralCost from a JSON object
   */
  static fromJSON(json: IInsurancePlanPlanGeneralCost): InsurancePlanPlanGeneralCost {
    return new InsurancePlanPlanGeneralCost(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InsurancePlanPlanGeneralCost with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInsurancePlanPlanGeneralCost>): InsurancePlanPlanGeneralCost {
    return new InsurancePlanPlanGeneralCost({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InsurancePlanPlanGeneralCost by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInsurancePlanPlanGeneralCost) => Partial<IInsurancePlanPlanGeneralCost>): InsurancePlanPlanGeneralCost {
    const currentData = this.toJSON();
    return new InsurancePlanPlanGeneralCost({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInsurancePlanPlanGeneralCost)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInsurancePlanPlanGeneralCost {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INSURANCE_PLAN_PLAN_GENERAL_COST_PROPERTIES);
    return result as IInsurancePlanPlanGeneralCost;
  }

  /**
   * Create a deep clone of this InsurancePlanPlanGeneralCost
   */
  clone(): InsurancePlanPlanGeneralCost {
    return new InsurancePlanPlanGeneralCost(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InsurancePlanPlanGeneralCost
   */
  toString(): string {
    const parts: string[] = ['InsurancePlanPlanGeneralCost'];
    return parts.join(', ');
  }
}
