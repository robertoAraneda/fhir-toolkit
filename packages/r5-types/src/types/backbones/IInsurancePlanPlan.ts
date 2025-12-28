import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IInsurancePlanPlanGeneralCost } from './IInsurancePlanPlanGeneralCost.js';
import type { IInsurancePlanPlanSpecificCost } from './IInsurancePlanPlanSpecificCost.js';

/**
 * InsurancePlanPlan Interface
 * 
 * Plan details
 * 
 *
 * @see https://hl7.org/fhir/R5/insuranceplanplan.html
 */
export interface IInsurancePlanPlan extends IBackboneElement {
  /**
   * Business Identifier for Product
   */
  identifier?: IIdentifier[];

  /**
   * Type of plan
   */
  type?: ICodeableConcept;

  /**
   * Where product applies
   */
  coverageArea?: IReference<'Location'>[];

  /**
   * What networks provide coverage
   */
  network?: IReference<'Organization'>[];

  /**
   * Overall costs
   */
  generalCost?: IInsurancePlanPlanGeneralCost[];

  /**
   * Specific costs
   */
  specificCost?: IInsurancePlanPlanSpecificCost[];

}
