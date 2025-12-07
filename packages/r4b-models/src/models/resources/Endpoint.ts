import { DomainResource } from '../base/DomainResource.js';
import type {
  EndpointStatusType,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IElement,
  IEndpoint,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Endpoint */
const ENDPOINT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'connectionType',
  'name',
  '_name',
  'managingOrganization',
  'contact',
  'period',
  'payloadType',
  'payloadMimeType',
  '_payloadMimeType',
  'address',
  '_address',
  'header',
  '_header',
] as const;

/**
 * Endpoint - The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 *
 * @see https://hl7.org/fhir/R4/endpoint.html
 *
 * @example
 * const endpoint = new Endpoint({
 *   // ... properties
 * });
 */
export class Endpoint extends DomainResource implements IEndpoint {
  readonly resourceType = 'Endpoint' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies this endpoint across multiple systems */
  identifier?: IIdentifier[];

  /** active | suspended | error | off | entered-in-error | test */
  status: EndpointStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Protocol/Profile/Standard to be used with this endpoint connection */
  connectionType: ICoding;

  /** A name that this endpoint can be identified by */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) */
  managingOrganization?: IReference<'Organization'>;

  /** Contact details for source (e.g. troubleshooting) */
  contact?: IContactPoint[];

  /** Interval the endpoint is expected to be operational */
  period?: IPeriod;

  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) */
  payloadType: ICodeableConcept[];

  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) */
  payloadMimeType?: string[];

  /** Extension for payloadMimeType */
  _payloadMimeType?: IElement;

  /** The technical base address for connecting to this endpoint */
  address: string;

  /** Extension for address */
  _address?: IElement;

  /** Usage depends on the channel type */
  header?: string[];

  /** Extension for header */
  _header?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEndpoint>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ENDPOINT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Endpoint from a JSON object
   */
  static fromJSON(json: IEndpoint): Endpoint {
    return new Endpoint(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Endpoint with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEndpoint>): Endpoint {
    return new Endpoint({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Endpoint by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEndpoint) => Partial<IEndpoint>): Endpoint {
    const currentData = this.toJSON();
    return new Endpoint({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEndpoint)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEndpoint {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ENDPOINT_PROPERTIES);
    return result as IEndpoint;
  }

  /**
   * Create a deep clone of this Endpoint
   */
  clone(): Endpoint {
    return new Endpoint(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Endpoint
   */
  toString(): string {
    const parts: string[] = ['Endpoint'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
