import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IExtendedContactDetail } from '../datatypes/IExtendedContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * OrganizationAffiliation Interface
 * 
 * Defines an affiliation/association/relationship between 2 distinct organizations, that is not a part-of relationship/sub-division relationship.
 * 
 *
 * @see https://hl7.org/fhir/R5/organizationaffiliation.html
 */
export interface IOrganizationAffiliation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'OrganizationAffiliation';

  /**
   * Business identifiers that are specific to this role
   */
  identifier?: IIdentifier[];

  /**
   * Whether this organization affiliation record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * The period during which the participatingOrganization is affiliated with the primary organization
   */
  period?: IPeriod;

  /**
   * Organization where the role is available
   */
  organization?: IReference<'Organization'>;

  /**
   * Organization that provides/performs the role (e.g. providing services or is a member of)
   */
  participatingOrganization?: IReference<'Organization'>;

  /**
   * The network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined)
   */
  network?: IReference<'Organization'>[];

  /**
   * Definition of the role the participatingOrganization plays
   */
  code?: ICodeableConcept[];

  /**
   * Specific specialty of the participatingOrganization in the context of the role
   */
  specialty?: ICodeableConcept[];

  /**
   * The location(s) at which the role occurs
   */
  location?: IReference<'Location'>[];

  /**
   * Healthcare services provided through the role
   */
  healthcareService?: IReference<'HealthcareService'>[];

  /**
   * Official contact details at the participatingOrganization relevant to this Affiliation
   */
  contact?: IExtendedContactDetail[];

  /**
   * Technical endpoints providing access to services operated for this role
   */
  endpoint?: IReference<'Endpoint'>[];

}
