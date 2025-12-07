import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IAvailability } from '../datatypes/IAvailability.js';
import type { IExtendedContactDetail } from '../datatypes/IExtendedContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IHealthcareServiceEligibility } from '../backbones/IHealthcareServiceEligibility.js';

/**
 * HealthcareService Interface
 * 
 * The details of a healthcare service available at a location.
 * 
 *
 * @see https://hl7.org/fhir/R4/healthcareservice.html
 */
export interface IHealthcareService extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'HealthcareService';

  /**
   * External identifiers for this item
   */
  identifier?: IIdentifier[];

  /**
   * Whether this HealthcareService record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * Organization that provides this service
   */
  providedBy?: IReference<'Organization'>;

  /**
   * The service within which this service is offered
   */
  offeredIn?: IReference<'HealthcareService'>[];

  /**
   * Broad category of service being performed or delivered
   */
  category?: ICodeableConcept[];

  /**
   * Type of service that may be delivered or performed
   */
  type?: ICodeableConcept[];

  /**
   * Specialties handled by the HealthcareService
   */
  specialty?: ICodeableConcept[];

  /**
   * Location(s) where service may be provided
   */
  location?: IReference<'Location'>[];

  /**
   * Description of service as presented to a consumer while searching
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Additional description and/or any specific issues not covered elsewhere
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Extra details about the service that can't be placed in the other fields
   */
  extraDetails?: string;
  /**
   * Extension for extraDetails
   */
  _extraDetails?: IElement;

  /**
   * Facilitates quick identification of the service
   */
  photo?: IAttachment;

  /**
   * Official contact details for the HealthcareService
   */
  contact?: IExtendedContactDetail[];

  /**
   * Location(s) service is intended for/available to
   */
  coverageArea?: IReference<'Location'>[];

  /**
   * Conditions under which service is available/offered
   */
  serviceProvisionCode?: ICodeableConcept[];

  /**
   * Specific eligibility requirements required to use the service
   */
  eligibility?: IHealthcareServiceEligibility[];

  /**
   * Programs that this service is applicable to
   */
  program?: ICodeableConcept[];

  /**
   * Collection of characteristics (attributes)
   */
  characteristic?: ICodeableConcept[];

  /**
   * The language that this service is offered in
   */
  communication?: ICodeableConcept[];

  /**
   * Ways that the service accepts referrals
   */
  referralMethod?: ICodeableConcept[];

  /**
   * If an appointment is required for access to this service
   */
  appointmentRequired?: boolean;
  /**
   * Extension for appointmentRequired
   */
  _appointmentRequired?: IElement;

  /**
   * Times the healthcare service is available (including exceptions)
   */
  availability?: IAvailability[];

  /**
   * Technical endpoints providing access to electronic services operated for the healthcare service
   */
  endpoint?: IReference<'Endpoint'>[];

}
