import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * InsurancePlanPlanSpecificCostBenefitCost Interface
 * 
 * List of the costs
 * 
 *
 * @see https://hl7.org/fhir/R4B/insuranceplanplanspecificcostbenefitcost.html
 */
export interface IInsurancePlanPlanSpecificCostBenefitCost extends IBackboneElement {
  /**
   * Type of cost
   */
  type: ICodeableConcept;

  /**
   * in-network | out-of-network | other
   */
  applicability?: ICodeableConcept;

  /**
   * Additional information about the cost
   */
  qualifiers?: ICodeableConcept[];

  /**
   * The actual cost value
   */
  value?: IQuantity;

}
