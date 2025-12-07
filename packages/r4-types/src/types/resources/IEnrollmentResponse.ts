import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ClaimProcessingType, FinancialResourceStatusType } from '../../valuesets/index.js';

/**
 * EnrollmentResponse Interface
 * 
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 * 
 *
 * @see https://hl7.org/fhir/R4/enrollmentresponse.html
 */
export interface IEnrollmentResponse extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'EnrollmentResponse';

  /**
   * Business Identifier
   */
  identifier?: IIdentifier[];

  /**
   * active | cancelled | draft | entered-in-error
   */
  status?: FinancialResourceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Claim reference
   */
  request?: IReference<'EnrollmentRequest'>;

  /**
   * queued | complete | error | partial
   */
  outcome?: ClaimProcessingType;
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
   * Creation date
   */
  created?: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Insurer
   */
  organization?: IReference<'Organization'>;

  /**
   * Responsible practitioner
   */
  requestProvider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

}
