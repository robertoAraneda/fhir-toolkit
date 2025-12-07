import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IOrganizationContact } from '../backbones/IOrganizationContact.js';

/**
 * Organization Interface
 * 
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 * 
 *
 * @see https://hl7.org/fhir/R4/organization.html
 */
export interface IOrganization extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Organization';

  /**
   * Identifies this organization  across multiple systems
   */
  identifier?: IIdentifier[];

  /**
   * Whether the organization's record is still in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * Kind of organization
   */
  type?: ICodeableConcept[];

  /**
   * Name used for the organization
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * A list of alternate names that the organization is known as, or was known as in the past
   */
  alias?: string[];
  /**
   * Extension for alias
   */
  _alias?: IElement;

  /**
   * A contact detail for the organization
   */
  telecom?: IContactPoint[];

  /**
   * An address for the organization
   */
  address?: IAddress[];

  /**
   * The organization of which this organization forms a part
   */
  partOf?: IReference<'Organization'>;

  /**
   * Contact for the organization for a certain purpose
   */
  contact?: IOrganizationContact[];

  /**
   * Technical endpoints providing access to services operated for the organization
   */
  endpoint?: IReference<'Endpoint'>[];

}
