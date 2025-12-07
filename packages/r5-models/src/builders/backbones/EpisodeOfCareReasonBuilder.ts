import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EpisodeOfCareReason } from '../../models/backbones/EpisodeOfCareReason.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IEpisodeOfCareReason,
} from '@fhir-toolkit/r5-types';

/**
 * EpisodeOfCareReasonBuilder - Fluent builder for EpisodeOfCareReason backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const episodeOfCareReason = new EpisodeOfCareReasonBuilder()
 *   .setUse(value)
 *   .addValue({ ... })
 *   .build();
 */
export class EpisodeOfCareReasonBuilder extends BackboneElementBuilder<EpisodeOfCareReason, IEpisodeOfCareReason> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set use
   * What the reason value should be used for/as
   */
  setUse(use: ICodeableConcept): this {
    this.data.use = use;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add value
   * Medical reason to be addressed
   */
  addValue(value: ICodeableReference): this {
    return this.addToArray('value', value);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EpisodeOfCareReason instance
   */
  build(): EpisodeOfCareReason {
    return new EpisodeOfCareReason(this.data);
  }

  /**
   * Build and validate the EpisodeOfCareReason instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EpisodeOfCareReason> {
    const episodeOfCareReason = this.build();
    await episodeOfCareReason.validateOrThrow();
    return episodeOfCareReason;
  }
}
