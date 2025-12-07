import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideManifest } from '../../models/backbones/ImplementationGuideManifest.js';
import type {
  IImplementationGuideManifest,
  IImplementationGuideManifestPage,
  IImplementationGuideManifestResource,
} from '@fhir-toolkit/r4b-types';

/**
 * ImplementationGuideManifestBuilder - Fluent builder for ImplementationGuideManifest backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideManifest = new ImplementationGuideManifestBuilder()
 *   .setRendering(value)
 *   .addResource({ ... })
 *   .build();
 */
export class ImplementationGuideManifestBuilder extends BackboneElementBuilder<ImplementationGuideManifest, IImplementationGuideManifest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set rendering
   * Location of rendered implementation guide
   */
  setRendering(rendering: string): this {
    this.data.rendering = rendering;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add resource
   * Resource in the implementation guide
   */
  addResource(resource: IImplementationGuideManifestResource): this {
    return this.addToArray('resource', resource);
  }

  /**
   * Add page
   * HTML page within the parent IG
   */
  addPage(page: IImplementationGuideManifestPage): this {
    return this.addToArray('page', page);
  }

  /**
   * Add image
   * Image within the IG
   */
  addImage(image: string): this {
    return this.addToArray('image', image);
  }

  /**
   * Add other
   * Additional linkable file in IG
   */
  addOther(other: string): this {
    return this.addToArray('other', other);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideManifest instance
   */
  build(): ImplementationGuideManifest {
    return new ImplementationGuideManifest(this.data);
  }

  /**
   * Build and validate the ImplementationGuideManifest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideManifest> {
    const implementationGuideManifest = this.build();
    await implementationGuideManifest.validateOrThrow();
    return implementationGuideManifest;
  }
}
