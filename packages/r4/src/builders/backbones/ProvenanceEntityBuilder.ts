import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ProvenanceEntity } from '../../models/backbones/ProvenanceEntity.js';
import type {
  IProvenanceAgent,
  IProvenanceEntity,
  IReference,
  ProvenanceEntityRoleType,
} from '@fhir-toolkit/r4-types';

/**
 * ProvenanceEntityBuilder - Fluent builder for ProvenanceEntity backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const provenanceEntity = new ProvenanceEntityBuilder()
 *   .setRole(value)
 *   .addAgent({ ... })
 *   .build();
 */
export class ProvenanceEntityBuilder extends BackboneElementBuilder<ProvenanceEntity, IProvenanceEntity> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * derivation | revision | quotation | source | removal
   */
  setRole(role: ProvenanceEntityRoleType): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set what
   * Identity of entity
   */
  setWhat(what: IReference<'Resource'>): this {
    this.data.what = what;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add agent
   * Entity is attributed to this agent
   */
  addAgent(agent: IProvenanceAgent): this {
    return this.addToArray('agent', agent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ProvenanceEntity instance
   */
  build(): ProvenanceEntity {
    return new ProvenanceEntity(this.data);
  }

  /**
   * Build and validate the ProvenanceEntity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ProvenanceEntity> {
    const provenanceEntity = this.build();
    await provenanceEntity.validateOrThrow();
    return provenanceEntity;
  }
}
