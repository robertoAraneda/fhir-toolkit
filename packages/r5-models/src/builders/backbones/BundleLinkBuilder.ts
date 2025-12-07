import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BundleLink } from '../../models/backbones/BundleLink.js';
import type {
  IBundleLink,
} from '@fhir-toolkit/r5-types';

/**
 * BundleLinkBuilder - Fluent builder for BundleLink backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const bundleLink = new BundleLinkBuilder()
 *   .setRelation(value)
 *   .build();
 */
export class BundleLinkBuilder extends BackboneElementBuilder<BundleLink, IBundleLink> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set relation
   * See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1
   */
  setRelation(relation: string): this {
    this.data.relation = relation;
    return this;
  }

  /**
   * Set url
   * Reference details for the link
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BundleLink instance
   */
  build(): BundleLink {
    return new BundleLink(this.data);
  }

  /**
   * Build and validate the BundleLink instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BundleLink> {
    const bundleLink = this.build();
    await bundleLink.validateOrThrow();
    return bundleLink;
  }
}
