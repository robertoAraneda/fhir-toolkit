import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceStatisticSampleSize } from '../../models/backbones/EvidenceStatisticSampleSize.js';
import type {
  IAnnotation,
  IEvidenceStatisticSampleSize,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceStatisticSampleSizeBuilder - Fluent builder for EvidenceStatisticSampleSize backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceStatisticSampleSize = new EvidenceStatisticSampleSizeBuilder()
 *   .setDescription(value)
 *   .addNote({ ... })
 *   .build();
 */
export class EvidenceStatisticSampleSizeBuilder extends BackboneElementBuilder<EvidenceStatisticSampleSize, IEvidenceStatisticSampleSize> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Textual description of sample size for statistic
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set numberOfStudies
   * Number of contributing studies
   */
  setNumberOfStudies(numberOfStudies: number): this {
    this.data.numberOfStudies = numberOfStudies;
    return this;
  }

  /**
   * Set numberOfParticipants
   * Cumulative number of participants
   */
  setNumberOfParticipants(numberOfParticipants: number): this {
    this.data.numberOfParticipants = numberOfParticipants;
    return this;
  }

  /**
   * Set knownDataCount
   * Number of participants with known results for measured variables
   */
  setKnownDataCount(knownDataCount: number): this {
    this.data.knownDataCount = knownDataCount;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Footnote or explanatory note about the sample size
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceStatisticSampleSize instance
   */
  build(): EvidenceStatisticSampleSize {
    return new EvidenceStatisticSampleSize(this.data);
  }

  /**
   * Build and validate the EvidenceStatisticSampleSize instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceStatisticSampleSize> {
    const evidenceStatisticSampleSize = this.build();
    await evidenceStatisticSampleSize.validateOrThrow();
    return evidenceStatisticSampleSize;
  }
}
