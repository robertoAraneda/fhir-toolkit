import { DomainResource } from '../base/DomainResource.js';
import type {
  EndpointStatusType,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IEndpoint,
  IEndpointPayload,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Endpoint */
const ENDPOINT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'connectionType',
  'name',
  '_name',
  'description',
  '_description',
  'environmentType',
  'managingOrganization',
  'contact',
  'period',
  'payload',
  'address',
  '_address',
  'header',
  '_header',
] as const;

/**
 * Endpoint - The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.
 *
 * @see https://hl7.org/fhir/R5/endpoint.html
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
  connectionType: ICodeableConcept[];

  /** A name that this endpoint can be identified by */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Additional details about the endpoint that could be displayed as further information to identify the description beyond its name */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The type of environment(s) exposed at this endpoint */
  environmentType?: ICodeableConcept[];

  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) */
  managingOrganization?: IReference<'Organization'>;

  /** Contact details for source (e.g. troubleshooting) */
  contact?: IContactPoint[];

  /** Interval the endpoint is expected to be operational */
  period?: IPeriod;

  /** Set of payloads that are provided by this endpoint */
  payload?: IEndpointPayload[];

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
