import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Endpoint } from '../../models/resources/Endpoint.js';
import type {
  EndpointStatusType,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IEndpoint,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * EndpointBuilder - Fluent builder for Endpoint resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const endpoint = new EndpointBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EndpointBuilder extends DomainResourceBuilder<Endpoint, IEndpoint> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | suspended | error | off | entered-in-error | test
   */
  setStatus(status: EndpointStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set connectionType
   * Protocol/Profile/Standard to be used with this endpoint connection
   */
  setConnectionType(connectionType: ICoding): this {
    this.data.connectionType = connectionType;
    return this;
  }

  /**
   * Set name
   * A name that this endpoint can be identified by
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set managingOrganization
   * Organization that manages this endpoint (might not be the organization that exposes the endpoint)
   */
  setManagingOrganization(managingOrganization: IReference<'Organization'>): this {
    this.data.managingOrganization = managingOrganization;
    return this;
  }

  /**
   * Set period
   * Interval the endpoint is expected to be operational
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set address
   * The technical base address for connecting to this endpoint
   */
  setAddress(address: string): this {
    this.data.address = address;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifies this endpoint across multiple systems
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add contact
   * Contact details for source (e.g. troubleshooting)
   */
  addContact(contact: IContactPoint): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add payloadType
   * The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
   */
  addPayloadType(payloadType: ICodeableConcept): this {
    return this.addToArray('payloadType', payloadType);
  }

  /**
   * Add payloadMimeType
   * Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)
   */
  addPayloadMimeType(payloadMimeType: string): this {
    return this.addToArray('payloadMimeType', payloadMimeType);
  }

  /**
   * Add header
   * Usage depends on the channel type
   */
  addHeader(header: string): this {
    return this.addToArray('header', header);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Endpoint instance
   */
  build(): Endpoint {
    return new Endpoint(this.data);
  }

  /**
   * Build and validate the Endpoint instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Endpoint> {
    const endpoint = this.build();
    await endpoint.validateOrThrow();
    return endpoint;
  }
}
