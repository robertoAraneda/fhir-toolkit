import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AuditEventAgent } from '../../models/backbones/AuditEventAgent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAuditEventAgent,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

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
  setWho(who: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.who = who;
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
   * The agent location when the event occurred
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set network choice type (networkReference, networkUri, networkString)
   * @param type - 'Reference' | 'Uri' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setNetwork('Reference', value)
   */
  setNetwork<T extends 'Reference' | 'Uri' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `network${type}` as keyof IAuditEventAgent;
    const otherKeys: (keyof IAuditEventAgent)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('networkReference' as keyof IAuditEventAgent);
      otherKeys.push('_networkReference' as keyof IAuditEventAgent);
    }
    if (type !== 'Uri') {
      otherKeys.push('networkUri' as keyof IAuditEventAgent);
      otherKeys.push('_networkUri' as keyof IAuditEventAgent);
    }
    if (type !== 'String') {
      otherKeys.push('networkString' as keyof IAuditEventAgent);
      otherKeys.push('_networkString' as keyof IAuditEventAgent);
    }
    return this.setChoiceType(key, value, otherKeys);
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
   * Policy that authorized the agent participation in the event
   */
  addPolicy(policy: string): this {
    return this.addToArray('policy', policy);
  }

  /**
   * Add authorization
   * Allowable authorization for this agent
   */
  addAuthorization(authorization: ICodeableConcept): this {
    return this.addToArray('authorization', authorization);
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
