import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceReportRelatesTo } from '../../models/backbones/EvidenceReportRelatesTo.js';
import type {
  IEvidenceReportRelatesTo,
  IEvidenceReportRelatesToTarget,
  ReportRelationshipTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceReportRelatesToBuilder - Fluent builder for EvidenceReportRelatesTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceReportRelatesTo = new EvidenceReportRelatesToBuilder()
 *   .setCode(value)
 *   .build();
 */
export class EvidenceReportRelatesToBuilder extends BackboneElementBuilder<EvidenceReportRelatesTo, IEvidenceReportRelatesTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith
   */
  setCode(code: ReportRelationshipTypeType): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set target
   * Target of the relationship
   */
  setTarget(target: IEvidenceReportRelatesToTarget): this {
    this.data.target = target;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceReportRelatesTo instance
   */
  build(): EvidenceReportRelatesTo {
    return new EvidenceReportRelatesTo(this.data);
  }

  /**
   * Build and validate the EvidenceReportRelatesTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceReportRelatesTo> {
    const evidenceReportRelatesTo = this.build();
    await evidenceReportRelatesTo.validateOrThrow();
    return evidenceReportRelatesTo;
  }
}
