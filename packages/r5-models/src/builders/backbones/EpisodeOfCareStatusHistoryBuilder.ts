import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EpisodeOfCareStatusHistory } from '../../models/backbones/EpisodeOfCareStatusHistory.js';
import type {
  EpisodeOfCareStatusType,
  IEpisodeOfCareStatusHistory,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * EpisodeOfCareStatusHistoryBuilder - Fluent builder for EpisodeOfCareStatusHistory backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const episodeOfCareStatusHistory = new EpisodeOfCareStatusHistoryBuilder()
 *   .setStatus(value)
 *   .build();
 */
export class EpisodeOfCareStatusHistoryBuilder extends BackboneElementBuilder<EpisodeOfCareStatusHistory, IEpisodeOfCareStatusHistory> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   */
  setStatus(status: EpisodeOfCareStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set period
   * Duration the EpisodeOfCare was in the specified status
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EpisodeOfCareStatusHistory instance
   */
  build(): EpisodeOfCareStatusHistory {
    return new EpisodeOfCareStatusHistory(this.data);
  }

  /**
   * Build and validate the EpisodeOfCareStatusHistory instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EpisodeOfCareStatusHistory> {
    const episodeOfCareStatusHistory = this.build();
    await episodeOfCareStatusHistory.validateOrThrow();
    return episodeOfCareStatusHistory;
  }
}
