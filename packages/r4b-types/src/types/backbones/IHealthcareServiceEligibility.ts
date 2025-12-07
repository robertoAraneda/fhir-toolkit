import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * HealthcareServiceEligibility Interface
 * 
 * Specific eligibility requirements required to use the service
 * 
 *
 * @see https://hl7.org/fhir/R4/healthcareserviceeligibility.html
 */
export interface IHealthcareServiceEligibility extends IBackboneElement {
  /**
   * Coded value for the eligibility
   */
  code?: ICodeableConcept;

  /**
   * Describes the eligibility conditions for the service
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

}
