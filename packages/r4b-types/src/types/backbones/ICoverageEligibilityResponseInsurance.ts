import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ICoverageEligibilityResponseInsuranceItem } from './ICoverageEligibilityResponseInsuranceItem.js';

/**
 * CoverageEligibilityResponseInsurance Interface
 * 
 * Patient insurance information
 * 
 *
 * @see https://hl7.org/fhir/R4B/coverageeligibilityresponseinsurance.html
 */
export interface ICoverageEligibilityResponseInsurance extends IBackboneElement {
  /**
   * Insurance information
   */
  coverage: IReference<'Coverage'>;

  /**
   * Coverage inforce indicator
   */
  inforce?: boolean;
  /**
   * Extension for inforce
   */
  _inforce?: IElement;

  /**
   * When the benefits are applicable
   */
  benefitPeriod?: IPeriod;

  /**
   * Benefits and authorization details
   */
  item?: ICoverageEligibilityResponseInsuranceItem[];

}
