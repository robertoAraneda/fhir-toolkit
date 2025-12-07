import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ICoverageEligibilityResponseError } from '../backbones/ICoverageEligibilityResponseError.js';
import type { ICoverageEligibilityResponseEvent } from '../backbones/ICoverageEligibilityResponseEvent.js';
import type { ICoverageEligibilityResponseInsurance } from '../backbones/ICoverageEligibilityResponseInsurance.js';
import type { EligibilityOutcomeType, EligibilityResponsePurposeType, FinancialResourceStatusType } from '../../valuesets/index.js';

/**
 * CoverageEligibilityResponse Interface
 * 
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 * 
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityresponse.html
 */
export interface ICoverageEligibilityResponse extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CoverageEligibilityResponse';

  /**
   * Business Identifier for coverage eligiblity request
   */
  identifier?: IIdentifier[];

  /**
   * active | cancelled | draft | entered-in-error
   */
  status: FinancialResourceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * auth-requirements | benefits | discovery | validation
   */
  purpose: EligibilityResponsePurposeType[];
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Intended recipient of products and services
   */
  patient: IReference<'Patient'>;

  /**
   * Event information
   */
  event?: ICoverageEligibilityResponseEvent[];

  /**
   * Estimated date or dates of service
   */
  servicedDate?: string;
  /**
   * Extension for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * Estimated date or dates of service
   */
  servicedPeriod?: IPeriod;

  /**
   * Response creation date
   */
  created: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Party responsible for the request
   */
  requestor?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Eligibility request reference
   */
  request: IReference<'CoverageEligibilityRequest'>;

  /**
   * queued | complete | error | partial
   */
  outcome: EligibilityOutcomeType;
  /**
   * Extension for outcome
   */
  _outcome?: IElement;

  /**
   * Disposition Message
   */
  disposition?: string;
  /**
   * Extension for disposition
   */
  _disposition?: IElement;

  /**
   * Coverage issuer
   */
  insurer: IReference<'Organization'>;

  /**
   * Patient insurance information
   */
  insurance?: ICoverageEligibilityResponseInsurance[];

  /**
   * Preauthorization reference
   */
  preAuthRef?: string;
  /**
   * Extension for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * Printed form identifier
   */
  form?: ICodeableConcept;

  /**
   * Processing errors
   */
  error?: ICoverageEligibilityResponseError[];

}
