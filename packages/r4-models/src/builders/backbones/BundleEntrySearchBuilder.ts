import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BundleEntrySearch } from '../../models/backbones/BundleEntrySearch.js';
import type {
  IBundleEntrySearch,
  SearchEntryModeType,
} from '@fhir-toolkit/r4-types';

/**
 * BundleEntrySearchBuilder - Fluent builder for BundleEntrySearch backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const bundleEntrySearch = new BundleEntrySearchBuilder()
 *   .setMode(value)
 *   .build();
 */
export class BundleEntrySearchBuilder extends BackboneElementBuilder<BundleEntrySearch, IBundleEntrySearch> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set mode
   * match | include | outcome - why this is in the result set
   */
  setMode(mode: SearchEntryModeType): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set score
   * Search ranking (between 0 and 1)
   */
  setScore(score: number): this {
    this.data.score = score;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BundleEntrySearch instance
   */
  build(): BundleEntrySearch {
    return new BundleEntrySearch(this.data);
  }

  /**
   * Build and validate the BundleEntrySearch instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BundleEntrySearch> {
    const bundleEntrySearch = this.build();
    await bundleEntrySearch.validateOrThrow();
    return bundleEntrySearch;
  }
}
