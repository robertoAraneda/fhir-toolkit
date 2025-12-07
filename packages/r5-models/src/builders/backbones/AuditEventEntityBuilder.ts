import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AuditEventEntity } from '../../models/backbones/AuditEventEntity.js';
import type {
  IAuditEventAgent,
  IAuditEventEntity,
  IAuditEventEntityDetail,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AuditEventEntityBuilder - Fluent builder for AuditEventEntity backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const auditEventEntity = new AuditEventEntityBuilder()
 *   .setWhat(value)
 *   .addSecurityLabel({ ... })
 *   .build();
 */
export class AuditEventEntityBuilder extends BackboneElementBuilder<AuditEventEntity, IAuditEventEntity> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set what
   * Specific instance of resource
   */
  setWhat(what: IReference<'Resource'>): this {
    this.data.what = what;
    return this;
  }

  /**
   * Set role
   * What role the entity played
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set query
   * Query parameters
   */
  setQuery(query: string): this {
    this.data.query = query;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add securityLabel
   * Security labels on the entity
   */
  addSecurityLabel(securityLabel: ICodeableConcept): this {
    return this.addToArray('securityLabel', securityLabel);
  }

  /**
   * Add detail
   * Additional Information about the entity
   */
  addDetail(detail: IAuditEventEntityDetail): this {
    return this.addToArray('detail', detail);
  }

  /**
   * Add agent
   * Entity is attributed to this agent
   */
  addAgent(agent: IAuditEventAgent): this {
    return this.addToArray('agent', agent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AuditEventEntity instance
   */
  build(): AuditEventEntity {
    return new AuditEventEntity(this.data);
  }

  /**
   * Build and validate the AuditEventEntity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AuditEventEntity> {
    const auditEventEntity = this.build();
    await auditEventEntity.validateOrThrow();
    return auditEventEntity;
  }
}
