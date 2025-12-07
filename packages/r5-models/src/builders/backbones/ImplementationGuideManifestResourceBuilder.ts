import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideManifestResource } from '../../models/backbones/ImplementationGuideManifestResource.js';
import type {
  IImplementationGuideManifestResource,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ImplementationGuideManifestResourceBuilder - Fluent builder for ImplementationGuideManifestResource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideManifestResource = new ImplementationGuideManifestResourceBuilder()
 *   .setReference(value)
 *   .addProfile({ ... })
 *   .build();
 */
export class ImplementationGuideManifestResourceBuilder extends BackboneElementBuilder<ImplementationGuideManifestResource, IImplementationGuideManifestResource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reference
   * Location of the resource
   */
  setReference(reference: IReference<'Resource'>): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set isExample
   * Is this an example
   */
  setIsExample(isExample: boolean): this {
    this.data.isExample = isExample;
    return this;
  }

  /**
   * Set relativePath
   * Relative path for page in IG
   */
  setRelativePath(relativePath: string): this {
    this.data.relativePath = relativePath;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add profile
   * Profile(s) this is an example of
   */
  addProfile(profile: string): this {
    return this.addToArray('profile', profile);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideManifestResource instance
   */
  build(): ImplementationGuideManifestResource {
    return new ImplementationGuideManifestResource(this.data);
  }

  /**
   * Build and validate the ImplementationGuideManifestResource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideManifestResource> {
    const implementationGuideManifestResource = this.build();
    await implementationGuideManifestResource.validateOrThrow();
    return implementationGuideManifestResource;
  }
}
