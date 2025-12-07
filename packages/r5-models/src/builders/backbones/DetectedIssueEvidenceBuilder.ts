import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DetectedIssueEvidence } from '../../models/backbones/DetectedIssueEvidence.js';
import type {
  ICodeableConcept,
  IDetectedIssueEvidence,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DetectedIssueEvidenceBuilder - Fluent builder for DetectedIssueEvidence backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const detectedIssueEvidence = new DetectedIssueEvidenceBuilder()
 *   .addCode({ ... })
 *   .build();
 */
export class DetectedIssueEvidenceBuilder extends BackboneElementBuilder<DetectedIssueEvidence, IDetectedIssueEvidence> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add code
   * Manifestation
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  /**
   * Add detail
   * Supporting information
   */
  addDetail(detail: IReference<'Resource'>): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DetectedIssueEvidence instance
   */
  build(): DetectedIssueEvidence {
    return new DetectedIssueEvidence(this.data);
  }

  /**
   * Build and validate the DetectedIssueEvidence instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DetectedIssueEvidence> {
    const detectedIssueEvidence = this.build();
    await detectedIssueEvidence.validateOrThrow();
    return detectedIssueEvidence;
  }
}
