import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IInsurancePlanCoverageBenefit } from './IInsurancePlanCoverageBenefit.js';

/**
 * InsurancePlanCoverage Interface
 * 
 * Coverage details
 * 
 *
 * @see https://hl7.org/fhir/R5/insuranceplancoverage.html
 */
export interface IInsurancePlanCoverage extends IBackboneElement {
  /**
   * Type of coverage
   */
  type: ICodeableConcept;

  /**
   * What networks provide coverage
   */
  network?: IReference<'Organization'>[];

  /**
   * List of benefits
   */
  benefit: IInsurancePlanCoverageBenefit[];

}
