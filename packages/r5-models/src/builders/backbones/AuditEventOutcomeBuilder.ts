import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AuditEventOutcome } from '../../models/backbones/AuditEventOutcome.js';
import type {
  IAuditEventOutcome,
  ICodeableConcept,
  ICoding,
} from '@fhir-toolkit/r5-types';

/**
 * AuditEventOutcomeBuilder - Fluent builder for AuditEventOutcome backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const auditEventOutcome = new AuditEventOutcomeBuilder()
 *   .setCode(value)
 *   .addDetail({ ... })
 *   .build();
 */
export class AuditEventOutcomeBuilder extends BackboneElementBuilder<AuditEventOutcome, IAuditEventOutcome> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Whether the event succeeded or failed
   */
  setCode(code: ICoding): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add detail
   * Additional outcome detail
   */
  addDetail(detail: ICodeableConcept): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AuditEventOutcome instance
   */
  build(): AuditEventOutcome {
    return new AuditEventOutcome(this.data);
  }

  /**
   * Build and validate the AuditEventOutcome instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AuditEventOutcome> {
    const auditEventOutcome = this.build();
    await auditEventOutcome.validateOrThrow();
    return auditEventOutcome;
  }
}
