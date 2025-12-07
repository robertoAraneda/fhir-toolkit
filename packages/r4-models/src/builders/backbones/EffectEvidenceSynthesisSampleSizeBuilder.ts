import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EffectEvidenceSynthesisSampleSize } from '../../models/backbones/EffectEvidenceSynthesisSampleSize.js';
import type {
  IEffectEvidenceSynthesisSampleSize,
} from '@fhir-toolkit/r4-types';

/**
 * EffectEvidenceSynthesisSampleSizeBuilder - Fluent builder for EffectEvidenceSynthesisSampleSize backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const effectEvidenceSynthesisSampleSize = new EffectEvidenceSynthesisSampleSizeBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class EffectEvidenceSynthesisSampleSizeBuilder extends BackboneElementBuilder<EffectEvidenceSynthesisSampleSize, IEffectEvidenceSynthesisSampleSize> {
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
   * Build the EffectEvidenceSynthesisSampleSize instance
   */
  build(): EffectEvidenceSynthesisSampleSize {
    return new EffectEvidenceSynthesisSampleSize(this.data);
  }

  /**
   * Build and validate the EffectEvidenceSynthesisSampleSize instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EffectEvidenceSynthesisSampleSize> {
    const effectEvidenceSynthesisSampleSize = this.build();
    await effectEvidenceSynthesisSampleSize.validateOrThrow();
    return effectEvidenceSynthesisSampleSize;
  }
}
