import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AuditEventAgent } from '../../models/backbones/AuditEventAgent.js';
import type {
  IAuditEventAgent,
  IAuditEventAgentNetwork,
  ICodeableConcept,
  ICoding,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * AuditEventAgentBuilder - Fluent builder for AuditEventAgent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const auditEventAgent = new AuditEventAgentBuilder()
 *   .setType(value)
 *   .addRole({ ... })
 *   .build();
 */
export class AuditEventAgentBuilder extends BackboneElementBuilder<AuditEventAgent, IAuditEventAgent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * How agent participated
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set who
   * Identifier of who
   */
  setWho(who: IReference<'PractitionerRole' | 'Practitioner' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>): this {
    this.data.who = who;
    return this;
  }

  /**
   * Set altId
   * Alternative User identity
   */
  setAltId(altId: string): this {
    this.data.altId = altId;
    return this;
  }

  /**
   * Set name
   * Human friendly name for the agent
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set requestor
   * Whether user is initiator
   */
  setRequestor(requestor: boolean): this {
    this.data.requestor = requestor;
    return this;
  }

  /**
   * Set location
   * Where
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set media
   * Type of media
   */
  setMedia(media: ICoding): this {
    this.data.media = media;
    return this;
  }

  /**
   * Set network
   * Logical network location for application activity
   */
  setNetwork(network: IAuditEventAgentNetwork): this {
    this.data.network = network;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add role
   * Agent role in the event
   */
  addRole(role: ICodeableConcept): this {
    return this.addToArray('role', role);
  }

  /**
   * Add policy
   * Policy that authorized event
   */
  addPolicy(policy: string): this {
    return this.addToArray('policy', policy);
  }

  /**
   * Add purposeOfUse
   * Reason given for this user
   */
  addPurposeOfUse(purposeOfUse: ICodeableConcept): this {
    return this.addToArray('purposeOfUse', purposeOfUse);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AuditEventAgent instance
   */
  build(): AuditEventAgent {
    return new AuditEventAgent(this.data);
  }

  /**
   * Build and validate the AuditEventAgent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AuditEventAgent> {
    const auditEventAgent = this.build();
    await auditEventAgent.validateOrThrow();
    return auditEventAgent;
  }
}
