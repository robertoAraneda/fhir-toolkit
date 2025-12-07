import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IInsurancePlanPlanSpecificCostBenefitCost } from './IInsurancePlanPlanSpecificCostBenefitCost.js';

/**
 * InsurancePlanPlanSpecificCostBenefit Interface
 * 
 * Benefits list
 * 
 *
 * @see https://hl7.org/fhir/R4/insuranceplanplanspecificcostbenefit.html
 */
export interface IInsurancePlanPlanSpecificCostBenefit extends IBackboneElement {
  /**
   * Type of specific benefit
   */
  type: ICodeableConcept;

  /**
   * List of the costs
   */
  cost?: IInsurancePlanPlanSpecificCostBenefitCost[];

}
