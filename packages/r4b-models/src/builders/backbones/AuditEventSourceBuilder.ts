import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AuditEventSource } from '../../models/backbones/AuditEventSource.js';
import type {
  IAuditEventSource,
  ICoding,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * AuditEventSourceBuilder - Fluent builder for AuditEventSource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const auditEventSource = new AuditEventSourceBuilder()
 *   .setSite(value)
 *   .addType({ ... })
 *   .build();
 */
export class AuditEventSourceBuilder extends BackboneElementBuilder<AuditEventSource, IAuditEventSource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set site
   * Logical source location within the enterprise
   */
  setSite(site: string): this {
    this.data.site = site;
    return this;
  }

  /**
   * Set observer
   * The identity of source detecting the event
   */
  setObserver(observer: IReference<'PractitionerRole' | 'Practitioner' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>): this {
    this.data.observer = observer;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * The type of source where event originated
   */
  addType(type: ICoding): this {
    return this.addToArray('type', type);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AuditEventSource instance
   */
  build(): AuditEventSource {
    return new AuditEventSource(this.data);
  }

  /**
   * Build and validate the AuditEventSource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AuditEventSource> {
    const auditEventSource = this.build();
    await auditEventSource.validateOrThrow();
    return auditEventSource;
  }
}
