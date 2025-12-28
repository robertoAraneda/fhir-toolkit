import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IPractitionerRoleAvailableTime } from '../backbones/IPractitionerRoleAvailableTime.js';
import type { IPractitionerRoleNotAvailable } from '../backbones/IPractitionerRoleNotAvailable.js';

/**
 * PractitionerRole Interface
 * 
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 * 
 *
 * @see https://hl7.org/fhir/R4B/practitionerrole.html
 */
export interface IPractitionerRole extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'PractitionerRole';

  /**
   * Business Identifiers that are specific to a role/location
   */
  identifier?: IIdentifier[];

  /**
   * Whether this practitioner role record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * The period during which the practitioner is authorized to perform in these role(s)
   */
  period?: IPeriod;

  /**
   * Practitioner that is able to provide the defined services for the organization
   */
  practitioner?: IReference<'Practitioner'>;

  /**
   * Organization where the roles are available
   */
  organization?: IReference<'Organization'>;

  /**
   * Roles which this practitioner may perform
   */
  code?: ICodeableConcept[];

  /**
   * Specific specialty of the practitioner
   */
  specialty?: ICodeableConcept[];

  /**
   * The location(s) at which this practitioner provides care
   */
  location?: IReference<'Location'>[];

  /**
   * The list of healthcare services that this worker provides for this role's Organization/Location(s)
   */
  healthcareService?: IReference<'HealthcareService'>[];

  /**
   * Contact details that are specific to the role/location/service
   */
  telecom?: IContactPoint[];

  /**
   * Times the Service Site is available
   */
  availableTime?: IPractitionerRoleAvailableTime[];

  /**
   * Not available during this time due to provided reason
   */
  notAvailable?: IPractitionerRoleNotAvailable[];

  /**
   * Description of availability exceptions
   */
  availabilityExceptions?: string;
  /**
   * Extension for availabilityExceptions
   */
  _availabilityExceptions?: IElement;

  /**
   * Technical endpoints providing access to services operated for the practitioner with this role
   */
  endpoint?: IReference<'Endpoint'>[];

}
