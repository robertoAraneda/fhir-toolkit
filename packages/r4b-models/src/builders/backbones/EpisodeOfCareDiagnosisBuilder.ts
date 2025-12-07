import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EpisodeOfCareDiagnosis } from '../../models/backbones/EpisodeOfCareDiagnosis.js';
import type {
  ICodeableConcept,
  IEpisodeOfCareDiagnosis,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * EpisodeOfCareDiagnosisBuilder - Fluent builder for EpisodeOfCareDiagnosis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const episodeOfCareDiagnosis = new EpisodeOfCareDiagnosisBuilder()
 *   .setCondition(value)
 *   .build();
 */
export class EpisodeOfCareDiagnosisBuilder extends BackboneElementBuilder<EpisodeOfCareDiagnosis, IEpisodeOfCareDiagnosis> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set condition
   * Conditions/problems/diagnoses this episode of care is for
   */
  setCondition(condition: IReference<'Condition'>): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set role
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …)
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set rank
   * Ranking of the diagnosis (for each role type)
   */
  setRank(rank: number): this {
    this.data.rank = rank;
    return this;
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
