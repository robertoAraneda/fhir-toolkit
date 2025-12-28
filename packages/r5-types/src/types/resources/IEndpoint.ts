import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IEndpointPayload } from '../backbones/IEndpointPayload.js';
import type { EndpointStatusType } from '../../valuesets/index.js';

/**
 * Endpoint Interface
 * 
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.
 * 
 *
 * @see https://hl7.org/fhir/R5/endpoint.html
 */
export interface IEndpoint extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Endpoint';

  /**
   * Identifies this endpoint across multiple systems
   */
  identifier?: IIdentifier[];

  /**
   * active | suspended | error | off | entered-in-error | test
   */
  status: EndpointStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Protocol/Profile/Standard to be used with this endpoint connection
   */
  connectionType: ICodeableConcept[];

  /**
   * A name that this endpoint can be identified by
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Additional details about the endpoint that could be displayed as further information to identify the description beyond its name
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The type of environment(s) exposed at this endpoint
   */
  environmentType?: ICodeableConcept[];

  /**
   * Organization that manages this endpoint (might not be the organization that exposes the endpoint)
   */
  managingOrganization?: IReference<'Organization'>;

  /**
   * Contact details for source (e.g. troubleshooting)
   */
  contact?: IContactPoint[];

  /**
   * Interval the endpoint is expected to be operational
   */
  period?: IPeriod;

  /**
   * Set of payloads that are provided by this endpoint
   */
  payload?: IEndpointPayload[];

  /**
   * The technical base address for connecting to this endpoint
   */
  address: string;
  /**
   * Extension for address
   */
  _address?: IElement;

  /**
   * Usage depends on the channel type
   */
  header?: string[];
  /**
   * Extension for header
   */
  _header?: IElement;

}
