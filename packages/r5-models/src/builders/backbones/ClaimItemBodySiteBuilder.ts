import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimItemBodySite } from '../../models/backbones/ClaimItemBodySite.js';
import type {
  IClaimItemBodySite,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimItemBodySiteBuilder - Fluent builder for ClaimItemBodySite backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimItemBodySite = new ClaimItemBodySiteBuilder()
 *   .addSite({ ... })
 *   .build();
 */
export class ClaimItemBodySiteBuilder extends BackboneElementBuilder<ClaimItemBodySite, IClaimItemBodySite> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add site
   * Location
   */
  addSite(site: ICodeableReference): this {
    return this.addToArray('site', site);
  }

  /**
   * Add subSite
   * Sub-location
   */
  addSubSite(subSite: ICodeableConcept): this {
    return this.addToArray('subSite', subSite);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimItemBodySite instance
   */
  build(): ClaimItemBodySite {
    return new ClaimItemBodySite(this.data);
  }

  /**
   * Build and validate the ClaimItemBodySite instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimItemBodySite> {
    const claimItemBodySite = this.build();
    await claimItemBodySite.validateOrThrow();
    return claimItemBodySite;
  }
}
