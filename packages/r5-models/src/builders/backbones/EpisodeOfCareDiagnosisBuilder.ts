import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EpisodeOfCareDiagnosis } from '../../models/backbones/EpisodeOfCareDiagnosis.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IEpisodeOfCareDiagnosis,
} from '@fhir-toolkit/r5-types';

/**
 * EpisodeOfCareDiagnosisBuilder - Fluent builder for EpisodeOfCareDiagnosis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const episodeOfCareDiagnosis = new EpisodeOfCareDiagnosisBuilder()
 *   .setUse(value)
 *   .addCondition({ ... })
 *   .build();
 */
export class EpisodeOfCareDiagnosisBuilder extends BackboneElementBuilder<EpisodeOfCareDiagnosis, IEpisodeOfCareDiagnosis> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set use
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …)
   */
  setUse(use: ICodeableConcept): this {
    this.data.use = use;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add condition
   * The medical condition that was addressed during the episode of care
   */
  addCondition(condition: ICodeableReference): this {
    return this.addToArray('condition', condition);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EpisodeOfCareDiagnosis instance
   */
  build(): EpisodeOfCareDiagnosis {
    return new EpisodeOfCareDiagnosis(this.data);
  }

  /**
   * Build and validate the EpisodeOfCareDiagnosis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EpisodeOfCareDiagnosis> {
    const episodeOfCareDiagnosis = this.build();
    await episodeOfCareDiagnosis.validateOrThrow();
    return episodeOfCareDiagnosis;
  }
}
