import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { BenefitCostApplicabilityType } from '../../valuesets/index.js';

/**
 * InsurancePlanPlanSpecificCostBenefitCost Interface
 * 
 * List of the costs
 * 
 *
 * @see https://hl7.org/fhir/R4/insuranceplanplanspecificcostbenefitcost.html
 */
export interface IInsurancePlanPlanSpecificCostBenefitCost extends IBackboneElement {
  /**
   * Type of cost
   */
  type: ICodeableConcept;

  /**
   * in-network | out-of-network | other
   */
  applicability?: ICodeableConcept<BenefitCostApplicabilityType>;

  /**
   * Additional information about the cost
   */
  qualifiers?: ICodeableConcept[];

  /**
   * The actual cost value
   */
  value?: IQuantity;

}
