import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideManifestPage } from '../../models/backbones/ImplementationGuideManifestPage.js';
import type {
  IImplementationGuideManifestPage,
} from '@fhir-toolkit/r4b-types';

/**
 * ImplementationGuideManifestPageBuilder - Fluent builder for ImplementationGuideManifestPage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideManifestPage = new ImplementationGuideManifestPageBuilder()
 *   .setName(value)
 *   .addAnchor({ ... })
 *   .build();
 */
export class ImplementationGuideManifestPageBuilder extends BackboneElementBuilder<ImplementationGuideManifestPage, IImplementationGuideManifestPage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * HTML page name
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Title of the page, for references
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add anchor
   * Anchor available on the page
   */
  addAnchor(anchor: string): this {
    return this.addToArray('anchor', anchor);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideManifestPage instance
   */
  build(): ImplementationGuideManifestPage {
    return new ImplementationGuideManifestPage(this.data);
  }

  /**
   * Build and validate the ImplementationGuideManifestPage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideManifestPage> {
    const implementationGuideManifestPage = this.build();
    await implementationGuideManifestPage.validateOrThrow();
    return implementationGuideManifestPage;
  }
}
