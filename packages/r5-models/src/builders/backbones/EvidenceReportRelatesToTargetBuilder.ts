import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceReportRelatesToTarget } from '../../models/backbones/EvidenceReportRelatesToTarget.js';
import type {
  IEvidenceReportRelatesToTarget,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceReportRelatesToTargetBuilder - Fluent builder for EvidenceReportRelatesToTarget backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceReportRelatesToTarget = new EvidenceReportRelatesToTargetBuilder()
 *   .setUrl(value)
 *   .build();
 */
export class EvidenceReportRelatesToTargetBuilder extends BackboneElementBuilder<EvidenceReportRelatesToTarget, IEvidenceReportRelatesToTarget> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Target of the relationship URL
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set identifier
   * Target of the relationship Identifier
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set display
   * Target of the relationship Display
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  /**
   * Set resource
   * Target of the relationship Resource reference
   */
  setResource(resource: IReference<'Resource'>): this {
    this.data.resource = resource;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceReportRelatesToTarget instance
   */
  build(): EvidenceReportRelatesToTarget {
    return new EvidenceReportRelatesToTarget(this.data);
  }

  /**
   * Build and validate the EvidenceReportRelatesToTarget instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceReportRelatesToTarget> {
    const evidenceReportRelatesToTarget = this.build();
    await evidenceReportRelatesToTarget.validateOrThrow();
    return evidenceReportRelatesToTarget;
  }
}
