import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseAddItemBodySite } from '../../models/backbones/ClaimResponseAddItemBodySite.js';
import type {
  IClaimResponseAddItemBodySite,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseAddItemBodySiteBuilder - Fluent builder for ClaimResponseAddItemBodySite backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseAddItemBodySite = new ClaimResponseAddItemBodySiteBuilder()
 *   .addSite({ ... })
 *   .build();
 */
export class ClaimResponseAddItemBodySiteBuilder extends BackboneElementBuilder<ClaimResponseAddItemBodySite, IClaimResponseAddItemBodySite> {
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
   * Build the ClaimResponseAddItemBodySite instance
   */
  build(): ClaimResponseAddItemBodySite {
    return new ClaimResponseAddItemBodySite(this.data);
  }

  /**
   * Build and validate the ClaimResponseAddItemBodySite instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseAddItemBodySite> {
    const claimResponseAddItemBodySite = this.build();
    await claimResponseAddItemBodySite.validateOrThrow();
    return claimResponseAddItemBodySite;
  }
}
