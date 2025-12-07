import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DiagnosticReportMedia } from '../../models/backbones/DiagnosticReportMedia.js';
import type {
  IDiagnosticReportMedia,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DiagnosticReportMediaBuilder - Fluent builder for DiagnosticReportMedia backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const diagnosticReportMedia = new DiagnosticReportMediaBuilder()
 *   .setComment(value)
 *   .build();
 */
export class DiagnosticReportMediaBuilder extends BackboneElementBuilder<DiagnosticReportMedia, IDiagnosticReportMedia> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set comment
   * Comment about the image or data (e.g. explanation)
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  /**
   * Set link
   * Reference to the image or data source
   */
  setLink(link: IReference<'DocumentReference'>): this {
    this.data.link = link;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DiagnosticReportMedia instance
   */
  build(): DiagnosticReportMedia {
    return new DiagnosticReportMedia(this.data);
  }

  /**
   * Build and validate the DiagnosticReportMedia instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DiagnosticReportMedia> {
    const diagnosticReportMedia = this.build();
    await diagnosticReportMedia.validateOrThrow();
    return diagnosticReportMedia;
  }
}
