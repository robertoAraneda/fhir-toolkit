import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * CoverageEligibilityRequestSupportingInfo Interface
 * 
 * Supporting information
 * 
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityrequestsupportinginfo.html
 */
export interface ICoverageEligibilityRequestSupportingInfo extends IBackboneElement {
  /**
   * Information instance identifier
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Data to be provided
   */
  information: IReference<'Resource'>;

  /**
   * Applies to all items
   */
  appliesToAll?: boolean;
  /**
   * Extension for appliesToAll
   */
  _appliesToAll?: IElement;

}
