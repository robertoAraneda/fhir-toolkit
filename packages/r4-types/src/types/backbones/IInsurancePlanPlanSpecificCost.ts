import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IInsurancePlanPlanSpecificCostBenefit } from './IInsurancePlanPlanSpecificCostBenefit.js';

/**
 * InsurancePlanPlanSpecificCost Interface
 * 
 * Specific costs
 * 
 *
 * @see https://hl7.org/fhir/R4/insuranceplanplanspecificcost.html
 */
export interface IInsurancePlanPlanSpecificCost extends IBackboneElement {
  /**
   * General category of benefit
   */
  category: ICodeableConcept;

  /**
   * Benefits list
   */
  benefit?: IInsurancePlanPlanSpecificCostBenefit[];

}
