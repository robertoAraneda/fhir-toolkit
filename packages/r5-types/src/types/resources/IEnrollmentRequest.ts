import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { FinancialResourceStatusType } from '../../valuesets/index.js';

/**
 * EnrollmentRequest Interface
 * 
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 * 
 *
 * @see https://hl7.org/fhir/R4/enrollmentrequest.html
 */
export interface IEnrollmentRequest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'EnrollmentRequest';

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
   * Creation date
   */
  created?: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Target
   */
  insurer?: IReference<'Organization'>;

  /**
   * Responsible practitioner
   */
  provider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * The subject to be enrolled
   */
  candidate?: IReference<'Patient'>;

  /**
   * Insurance information
   */
  coverage?: IReference<'Coverage'>;

}
