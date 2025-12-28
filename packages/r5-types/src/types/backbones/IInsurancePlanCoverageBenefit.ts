import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IInsurancePlanCoverageBenefitLimit } from './IInsurancePlanCoverageBenefitLimit.js';

/**
 * InsurancePlanCoverageBenefit Interface
 * 
 * List of benefits
 * 
 *
 * @see https://hl7.org/fhir/R5/insuranceplancoveragebenefit.html
 */
export interface IInsurancePlanCoverageBenefit extends IBackboneElement {
  /**
   * Type of benefit
   */
  type: ICodeableConcept;

  /**
   * Referral requirements
   */
  requirement?: string;
  /**
   * Extension for requirement
   */
  _requirement?: IElement;

  /**
   * Benefit limits
   */
  limit?: IInsurancePlanCoverageBenefitLimit[];

}
