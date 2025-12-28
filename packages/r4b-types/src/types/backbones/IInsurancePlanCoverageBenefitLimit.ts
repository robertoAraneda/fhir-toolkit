import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * InsurancePlanCoverageBenefitLimit Interface
 * 
 * Benefit limits
 * 
 *
 * @see https://hl7.org/fhir/R4B/insuranceplancoveragebenefitlimit.html
 */
export interface IInsurancePlanCoverageBenefitLimit extends IBackboneElement {
  /**
   * Maximum value allowed
   */
  value?: IQuantity;

  /**
   * Benefit limit details
   */
  code?: ICodeableConcept;

}
