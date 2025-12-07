import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AuditEventAgentNetwork } from '../../models/backbones/AuditEventAgentNetwork.js';
import type {
  AuditEventAgentNetworkTypeType,
  IAuditEventAgentNetwork,
} from '@fhir-toolkit/r4b-types';

/**
 * AuditEventAgentNetworkBuilder - Fluent builder for AuditEventAgentNetwork backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const auditEventAgentNetwork = new AuditEventAgentNetworkBuilder()
 *   .setAddress(value)
 *   .build();
 */
export class AuditEventAgentNetworkBuilder extends BackboneElementBuilder<AuditEventAgentNetwork, IAuditEventAgentNetwork> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set address
   * Identifier for the network access point of the user device
   */
  setAddress(address: string): this {
    this.data.address = address;
    return this;
  }

  /**
   * Set type
   * The type of network access point
   */
  setType(type: AuditEventAgentNetworkTypeType): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AuditEventAgentNetwork instance
   */
  build(): AuditEventAgentNetwork {
    return new AuditEventAgentNetwork(this.data);
  }

  /**
   * Build and validate the AuditEventAgentNetwork instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AuditEventAgentNetwork> {
    const auditEventAgentNetwork = this.build();
    await auditEventAgentNetwork.validateOrThrow();
    return auditEventAgentNetwork;
  }
}
