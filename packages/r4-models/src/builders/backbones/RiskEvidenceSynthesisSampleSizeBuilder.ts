import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RiskEvidenceSynthesisSampleSize } from '../../models/backbones/RiskEvidenceSynthesisSampleSize.js';
import type {
  IRiskEvidenceSynthesisSampleSize,
} from '@fhir-toolkit/r4-types';

/**
 * RiskEvidenceSynthesisSampleSizeBuilder - Fluent builder for RiskEvidenceSynthesisSampleSize backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const riskEvidenceSynthesisSampleSize = new RiskEvidenceSynthesisSampleSizeBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class RiskEvidenceSynthesisSampleSizeBuilder extends BackboneElementBuilder<RiskEvidenceSynthesisSampleSize, IRiskEvidenceSynthesisSampleSize> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of sample size
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set numberOfStudies
   * How many studies?
   */
  setNumberOfStudies(numberOfStudies: number): this {
    this.data.numberOfStudies = numberOfStudies;
    return this;
  }

  /**
   * Set numberOfParticipants
   * How many participants?
   */
  setNumberOfParticipants(numberOfParticipants: number): this {
    this.data.numberOfParticipants = numberOfParticipants;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RiskEvidenceSynthesisSampleSize instance
   */
  build(): RiskEvidenceSynthesisSampleSize {
    return new RiskEvidenceSynthesisSampleSize(this.data);
  }

  /**
   * Build and validate the RiskEvidenceSynthesisSampleSize instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RiskEvidenceSynthesisSampleSize> {
    const riskEvidenceSynthesisSampleSize = this.build();
    await riskEvidenceSynthesisSampleSize.validateOrThrow();
    return riskEvidenceSynthesisSampleSize;
  }
}
