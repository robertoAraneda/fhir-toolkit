import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DiagnosticReportSupportingInfo } from '../../models/backbones/DiagnosticReportSupportingInfo.js';
import type {
  ICodeableConcept,
  IDiagnosticReportSupportingInfo,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DiagnosticReportSupportingInfoBuilder - Fluent builder for DiagnosticReportSupportingInfo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const diagnosticReportSupportingInfo = new DiagnosticReportSupportingInfoBuilder()
 *   .setType(value)
 *   .build();
 */
export class DiagnosticReportSupportingInfoBuilder extends BackboneElementBuilder<DiagnosticReportSupportingInfo, IDiagnosticReportSupportingInfo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Supporting information role code
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set reference
   * Supporting information reference
   */
  setReference(reference: IReference<'Procedure' | 'Observation' | 'DiagnosticReport' | 'Citation'>): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DiagnosticReportSupportingInfo instance
   */
  build(): DiagnosticReportSupportingInfo {
    return new DiagnosticReportSupportingInfo(this.data);
  }

  /**
   * Build and validate the DiagnosticReportSupportingInfo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DiagnosticReportSupportingInfo> {
    const diagnosticReportSupportingInfo = this.build();
    await diagnosticReportSupportingInfo.validateOrThrow();
    return diagnosticReportSupportingInfo;
  }
}
