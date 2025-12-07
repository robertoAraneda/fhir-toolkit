import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementMessagingEndpoint } from '../../models/backbones/CapabilityStatementMessagingEndpoint.js';
import type {
  ICapabilityStatementMessagingEndpoint,
  ICoding,
} from '@fhir-toolkit/r5-types';

/**
 * CapabilityStatementMessagingEndpointBuilder - Fluent builder for CapabilityStatementMessagingEndpoint backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementMessagingEndpoint = new CapabilityStatementMessagingEndpointBuilder()
 *   .setProtocol(value)
 *   .build();
 */
export class CapabilityStatementMessagingEndpointBuilder extends BackboneElementBuilder<CapabilityStatementMessagingEndpoint, ICapabilityStatementMessagingEndpoint> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set protocol
   * http | ftp | mllp +
   */
  setProtocol(protocol: ICoding): this {
    this.data.protocol = protocol;
    return this;
  }

  /**
   * Set address
   * Network address or identifier of the end-point
   */
  setAddress(address: string): this {
    this.data.address = address;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementMessagingEndpoint instance
   */
  build(): CapabilityStatementMessagingEndpoint {
    return new CapabilityStatementMessagingEndpoint(this.data);
  }

  /**
   * Build and validate the CapabilityStatementMessagingEndpoint instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementMessagingEndpoint> {
    const capabilityStatementMessagingEndpoint = this.build();
    await capabilityStatementMessagingEndpoint.validateOrThrow();
    return capabilityStatementMessagingEndpoint;
  }
}
