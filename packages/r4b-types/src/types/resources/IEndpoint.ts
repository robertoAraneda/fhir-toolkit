import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { EndpointStatusType } from '../../valuesets/index.js';

/**
 * Endpoint Interface
 * 
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 * 
 *
 * @see https://hl7.org/fhir/R4/endpoint.html
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
  connectionType: ICoding;

  /**
   * A name that this endpoint can be identified by
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

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
   * The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
   */
  payloadType: ICodeableConcept[];

  /**
   * Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)
   */
  payloadMimeType?: string[];
  /**
   * Extension for payloadMimeType
   */
  _payloadMimeType?: IElement;

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
