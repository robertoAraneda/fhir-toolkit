import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAvailability } from '../datatypes/IAvailability.js';
import type { IExtendedContactDetail } from '../datatypes/IExtendedContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * PractitionerRole Interface
 * 
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 * 
 *
 * @see https://hl7.org/fhir/R5/practitionerrole.html
 */
export interface IPractitionerRole extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'PractitionerRole';

  /**
   * Identifiers for a role/location
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
   * Practitioner that provides services for the organization
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
   * Location(s) where the practitioner provides care
   */
  location?: IReference<'Location'>[];

  /**
   * Healthcare services provided for this role's Organization/Location(s)
   */
  healthcareService?: IReference<'HealthcareService'>[];

  /**
   * Official contact details relating to this PractitionerRole
   */
  contact?: IExtendedContactDetail[];

  /**
   * Collection of characteristics (attributes)
   */
  characteristic?: ICodeableConcept[];

  /**
   * A language the practitioner (in this role) can use in patient communication
   */
  communication?: ICodeableConcept[];

  /**
   * Times the Practitioner is available at this location and/or healthcare service (including exceptions)
   */
  availability?: IAvailability[];

  /**
   * Endpoints for interacting with the practitioner in this role
   */
  endpoint?: IReference<'Endpoint'>[];

}
