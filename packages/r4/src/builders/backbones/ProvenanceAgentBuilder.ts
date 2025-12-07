import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ProvenanceAgent } from '../../models/backbones/ProvenanceAgent.js';
import type {
  ICodeableConcept,
  IProvenanceAgent,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ProvenanceAgentBuilder - Fluent builder for ProvenanceAgent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const provenanceAgent = new ProvenanceAgentBuilder()
 *   .setType(value)
 *   .addRole({ ... })
 *   .build();
 */
export class ProvenanceAgentBuilder extends BackboneElementBuilder<ProvenanceAgent, IProvenanceAgent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * How the agent participated
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set who
   * Who participated
   */
  setWho(who: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>): this {
    this.data.who = who;
    return this;
  }

  /**
   * Set onBehalfOf
   * Who the agent is representing
   */
  setOnBehalfOf(onBehalfOf: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>): this {
    this.data.onBehalfOf = onBehalfOf;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add role
   * What the agents role was
   */
  addRole(role: ICodeableConcept): this {
    return this.addToArray('role', role);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ProvenanceAgent instance
   */
  build(): ProvenanceAgent {
    return new ProvenanceAgent(this.data);
  }

  /**
   * Build and validate the ProvenanceAgent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ProvenanceAgent> {
    const provenanceAgent = this.build();
    await provenanceAgent.validateOrThrow();
    return provenanceAgent;
  }
}
