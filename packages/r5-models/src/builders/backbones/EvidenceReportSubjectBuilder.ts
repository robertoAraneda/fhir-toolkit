import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceReportSubject } from '../../models/backbones/EvidenceReportSubject.js';
import type {
  IAnnotation,
  IEvidenceReportSubject,
  IEvidenceReportSubjectCharacteristic,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceReportSubjectBuilder - Fluent builder for EvidenceReportSubject backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceReportSubject = new EvidenceReportSubjectBuilder()
 *   .addCharacteristic({ ... })
 *   .build();
 */
export class EvidenceReportSubjectBuilder extends BackboneElementBuilder<EvidenceReportSubject, IEvidenceReportSubject> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add characteristic
   * Characteristic
   */
  addCharacteristic(characteristic: IEvidenceReportSubjectCharacteristic): this {
    return this.addToArray('characteristic', characteristic);
  }

  /**
   * Add note
   * Footnotes and/or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceReportSubject instance
   */
  build(): EvidenceReportSubject {
    return new EvidenceReportSubject(this.data);
  }

  /**
   * Build and validate the EvidenceReportSubject instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceReportSubject> {
    const evidenceReportSubject = this.build();
    await evidenceReportSubject.validateOrThrow();
    return evidenceReportSubject;
  }
}
