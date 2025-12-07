import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Endpoint } from '../../models/resources/Endpoint.js';
import type {
  EndpointStatusType,
  ICodeableConcept,
  IContactPoint,
  IEndpoint,
  IEndpointPayload,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

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
   * Set name
   * A name that this endpoint can be identified by
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Additional details about the endpoint that could be displayed as further information to identify the description beyond its name
   */
  setDescription(description: string): this {
    this.data.description = description;
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
   * Add connectionType
   * Protocol/Profile/Standard to be used with this endpoint connection
   */
  addConnectionType(connectionType: ICodeableConcept): this {
    return this.addToArray('connectionType', connectionType);
  }

  /**
   * Add environmentType
   * The type of environment(s) exposed at this endpoint
   */
  addEnvironmentType(environmentType: ICodeableConcept): this {
    return this.addToArray('environmentType', environmentType);
  }

  /**
   * Add contact
   * Contact details for source (e.g. troubleshooting)
   */
  addContact(contact: IContactPoint): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add payload
   * Set of payloads that are provided by this endpoint
   */
  addPayload(payload: IEndpointPayload): this {
    return this.addToArray('payload', payload);
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
