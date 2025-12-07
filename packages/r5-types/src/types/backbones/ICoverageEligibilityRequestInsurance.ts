import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * CoverageEligibilityRequestInsurance Interface
 * 
 * Patient insurance information
 * 
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityrequestinsurance.html
 */
export interface ICoverageEligibilityRequestInsurance extends IBackboneElement {
  /**
   * Applicable coverage
   */
  focal?: boolean;
  /**
   * Extension for focal
   */
  _focal?: IElement;

  /**
   * Insurance information
   */
  coverage: IReference<'Coverage'>;

  /**
   * Additional provider contract number
   */
  businessArrangement?: string;
  /**
   * Extension for businessArrangement
   */
  _businessArrangement?: IElement;

}
