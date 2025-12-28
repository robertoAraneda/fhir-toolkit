import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ICoverageEligibilityResponseInsuranceItemBenefit } from './ICoverageEligibilityResponseInsuranceItemBenefit.js';

/**
 * CoverageEligibilityResponseInsuranceItem Interface
 * 
 * Benefits and authorization details
 * 
 *
 * @see https://hl7.org/fhir/R5/coverageeligibilityresponseinsuranceitem.html
 */
export interface ICoverageEligibilityResponseInsuranceItem extends IBackboneElement {
  /**
   * Benefit classification
   */
  category?: ICodeableConcept;

  /**
   * Billing, service, product, or drug code
   */
  productOrService?: ICodeableConcept;

  /**
   * Product or service billing modifiers
   */
  modifier?: ICodeableConcept[];

  /**
   * Performing practitioner
   */
  provider?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Excluded from the plan
   */
  excluded?: boolean;
  /**
   * Extension for excluded
   */
  _excluded?: IElement;

  /**
   * Short name for the benefit
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Description of the benefit or services covered
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * In or out of network
   */
  network?: ICodeableConcept;

  /**
   * Individual or family
   */
  unit?: ICodeableConcept;

  /**
   * Annual or lifetime
   */
  term?: ICodeableConcept;

  /**
   * Benefit Summary
   */
  benefit?: ICoverageEligibilityResponseInsuranceItemBenefit[];

  /**
   * Authorization required flag
   */
  authorizationRequired?: boolean;
  /**
   * Extension for authorizationRequired
   */
  _authorizationRequired?: IElement;

  /**
   * Type of required supporting materials
   */
  authorizationSupporting?: ICodeableConcept[];

  /**
   * Preauthorization requirements endpoint
   */
  authorizationUrl?: string;
  /**
   * Extension for authorizationUrl
   */
  _authorizationUrl?: IElement;

}
